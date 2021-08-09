import { list } from '@keystone-next/keystone/schema'
import {
  text,
  select,
  integer,
  checkbox,
  relationship,
} from '@keystone-next/fields'
import { User } from './User'

export const SportClass = list({
  // access:
  // ui
  fields: {
    name: text({ isRequired: true }),
    freeSpots: integer({
      defaultValue: 10,
    }),
    available: checkbox({
      defaultValue: true,
      isRequired: true,
    }),
    year: integer({
      isRequired: true,
    }),
    week: integer({
      isRequired: true,
    }),
    day: select({
      dataType: 'enum',
      //swap to numbers here and also in the table
      options: [
        { label: 'Monday', value: '0' },
        { label: 'Tuesday', value: '1' },
        { label: 'Wednesday', value: '2' },
        { label: 'Thursday', value: '3' },
        { label: 'Friday', value: '4' },
        { label: 'Saturday', value: '5' },
        { label: 'Sunday', value: '6' },
      ],
      isRequired: true,
      ui: { displayMode: 'select' },
    }),
    startTime: text({
      isRequired: true,
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
        { label: '45 min', value: '45' },
        { label: '60 min', value: '60' },
      ],
      isRequired: true,
      ui: { displayMode: 'select' },
    }),
    users: relationship({
      ref: 'User.classes',
      many: true,
    }),
  },
})
