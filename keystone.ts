import 'dotenv/config'
import { config, createSchema } from '@keystone-next/keystone/schema'
import { createAuth } from '@keystone-next/auth'
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session'
import { User } from './schemas/User'
import { SportClass } from './schemas/SportClass'
import { Booking } from './schemas/Booking'

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
    // add in initial roles here
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

      //data seeding can be added here if needed
    },
    // keystone refers to datatypes as lists
    lists: createSchema({
      // schema items to go here
      User,
      SportClass,
      Booking,
    }),
    ui: {
      // show the UI only for people who pass this test, needs to be changed for roles
      isAccessAllowed: ({ session }) => !!session && !!session.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      //Graphql query
      User: `id`,
    }),
  }),
)
