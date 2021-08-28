import { list } from '@keystone-next/keystone/schema'
import { relationship } from '@keystone-next/fields'
import { User } from './User'
import { isSignedIn, rules } from '../access'

export const SingleBooking = list({
  access: {
    create: isSignedIn,
    read: () => true,
    update: () => false,
    delete: rules.canManageBookings,
  },

  fields: {
    sportClass: relationship({ ref: 'SportClass.bookings' }),
    user: relationship({ ref: 'User.bookings' }),
  },
})
