import { permissionsList } from './schemas/fields'
import { ListAccessArgs } from './types'

export const isSignedIn = ({ session }: ListAccessArgs) => {
  return !!session
}
const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission]
    },
  ]),
)

export const permissions = {
  ...generatedPermissions,

  //     you can add extra custom permission as well
  //   canDoWhatever({ session }: ListAccessArgs) {
  //     return session?.data.role?.canDoWhatever
  //   },
}

export const rules = {
  canManageSportClasses({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    return permissions.canManageSportClasses({ session }) ? true : false
  },
  canManageBookings({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageBookings({ session })) {
      return true
    }
    return { user: { id: session.itemId } }
  },
  canManageUsers({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageUsers({ session })) {
      return true
    }
    return { id: session.itemId }
  },
}
