import 'dotenv/config'
import { config, createSchema } from '@keystone-next/keystone/schema'
import { createAuth } from '@keystone-next/auth'
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session'
import { User } from './schemas/User'
import { SportClass } from './schemas/SportClass'
import { SingleBooking } from './schemas/SingleBooking'
import { Role } from './schemas/Role'
import { sendPasswordResetEmail } from './lib/mail'
import { extendGraphqlSchema } from './mutations'
import { permissionsList } from './schemas/fields'
import { insertSeedData } from './seed-data'

const databaseURL = process.env.DATABASE_URL

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
  passwordResetLink: {
    async sendToken(args) {
      await sendPasswordResetEmail(args.token, args.identity)
    },
  },
})

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      async onConnect(keystone) {
        console.log('Connected to the database!')
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(keystone)
        }
      },
    },
    lists: createSchema({
      User,
      SportClass,
      SingleBooking,
      Role,
    }),
    extendGraphqlSchema: extendGraphqlSchema,
    ui: {
      isAccessAllowed: ({ session }) => !!session && !!session.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id role { ${permissionsList.join(' ')} }`,
    }),
  }),
)
