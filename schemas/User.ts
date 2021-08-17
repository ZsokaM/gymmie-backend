import { list } from '@keystone-next/keystone/schema'
import { text, password, relationship } from '@keystone-next/fields'
import { SingleBooking } from './SingleBooking'

export const User = list({
  // access:
  // ui: come back when setting up roles/access
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // roles, bookings to be added
    classes: relationship({
      ref: 'SportClass.users',
    }),
    bookings: relationship({
      ref: 'SingleBooking.user',
      many: true,
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    }),
  },
})
