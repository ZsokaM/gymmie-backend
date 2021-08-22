import { list } from '@keystone-next/keystone/schema'
import { text, select, integer, relationship } from '@keystone-next/fields'
import { User } from './User'
import { isSignedIn, rules } from '../access'

export const SportClass = list({
  // access:
  access: {
    create: rules.canManageSportClasses,
    read: () => true,
    update: rules.canManageSportClasses,
    delete: rules.canManageSportClasses,
  },
  fields: {
    name: text({ isRequired: true }),
    freeSpots: integer({
      defaultValue: 10,
    }),
    available: integer({
      isRequired: true,
    }),
    year: integer({
      isRequired: true,
    }),
    week: integer({
      isRequired: true,
    }),
    day: integer({
      isRequired: true,
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
    duration: integer({
      isRequired: true,
    }),
    users: relationship({
      ref: 'User.classes',
      many: true,
    }),
  },
})
