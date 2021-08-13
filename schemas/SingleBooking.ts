import { list } from '@keystone-next/keystone/schema'
import { text, select, integer, relationship } from '@keystone-next/fields'
import { User } from './User'

export const SingleBooking = list({
  // access:

  fields: {
    sportClass: relationship({ ref: 'SportClass' }),
    user: relationship({ ref: 'User.bookings' }),
  },
})
