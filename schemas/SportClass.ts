import { list } from '@keystone-next/keystone/schema'
import { text, select, integer, relationship } from '@keystone-next/fields'
import { User } from './User'

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
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      ui: {
        displayMode: 'segmented-control',
        // to control what is shown when quickly adding a product
        createView: { fieldMode: 'hidden' },
      },
    }),
    startTime: select({
      dataType: 'enum',
      options: [
        { label: '08.00', value: '08.00' },
        { label: '09.00', value: '09.00' },
        { label: '10.00', value: '10.00' },
        { label: '11.00', value: '11.00' },
        { label: '12.00', value: '12.00' },
        { label: '13.00', value: '13.00' },
        { label: '14.00', value: '14.00' },
        { label: '15.00', value: '15.00' },
        { label: '16.00', value: '16.00' },
        { label: '17.00', value: '17.00' },
        { label: '18.00', value: '18.00' },
        { label: '19.00', value: '19.00' },
        { label: '20.00', value: '20.00' },
      ],
      isRequired: true,
      ui: { displayMode: 'select' },
    }),
    teacher: select({
      dataType: 'enum',
      options: [
        { label: 'Sam', value: 'Sam' },
        { label: 'Mohamud', value: 'Mohamud' },
        { label: 'Michael', value: 'Michael' },
        { label: 'Sophie', value: 'Sophie' },
        { label: 'Irene', value: 'Irene' },
        { label: 'Guido', value: 'Guido' },
      ],
      isRequired: true,
      ui: { displayMode: 'select' },
    }),
    duration: select({
      dataType: 'enum',
      options: [
        { label: '45 min', value: '45 min' },
        { label: '60 min', value: '60 min' },
      ],
      isRequired: true,
      ui: { displayMode: 'select' },
    }),
  },
})
