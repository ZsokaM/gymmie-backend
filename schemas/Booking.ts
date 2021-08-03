import { list } from '@keystone-next/keystone/schema';
import { text, select, integer, relationship } from '@keystone-next/fields';
import { User } from './User';

export const Booking = list({
  // access:
  // ui
  fields: {
    name: text({ isRequired: true }),

    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    //add date
    //later add teachers
    // teachers: relationship({ref: User.isTeacher, many: true})
  },
});
