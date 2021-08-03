import { list } from '@keystone-next/keystone/schema';
import { text, select, integer, relationship } from '@keystone-next/fields';
import { User } from './User';

export const SportClass = list({
  // access:
  // ui
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    freeSpots: integer({
      defaultValue: 10,
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'Draft',
      ui: {
        displayMode: 'segmented-control',
        // to control what is shown when quickly adding a product
        createView: { fieldMode: 'hidden' },
      },
    }),
    //add startTime and endTime
    //later add teachers
    // teachers: relationship({ref: User.isTeacher, many: true})
  },
});
