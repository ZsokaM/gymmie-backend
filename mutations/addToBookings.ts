import { KeystoneContext } from '@keystone-next/types'

async function addToBookings(
  root: any,
  { sportClassId },
  context: KeystoneContext,
) {
  const currentSession = context.session
  if (!currentSession.itemId) {
    throw new Error('You must be logged in to do this')
  }

  const allBookings = await context.lists.SingleBooking.findMany({
    where: {
      user: { id: currentSession.itemId },
      sportClass: { id: sportClassId },
    },
  })

  const [existingBooking] = allBookings

  if (existingBooking) {
    throw new Error('You are already signed up for this class')
  }

  const allClasses = await context.lists.SportClass.findMany({
    where: {
      id: sportClassId,
    },
    resolveFields: 'id, freeSpots, users',
  })
  const [bookedClass] = allClasses
  await context.lists.SportClass.updateOne({
    id: bookedClass.id,
    data: {
      freeSpots: bookedClass.freeSpots - 1,
    },
  })

  return await context.lists.SingleBooking.createOne({
    data: {
      sportClass: { connect: { id: sportClassId } },
      user: { connect: { id: currentSession.itemId } },
    },
  })
}

export default addToBookings
