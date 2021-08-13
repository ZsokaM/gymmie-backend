//@TO-ASK-MICHAEL: why am i getting parsing errors when i add typing
// export default function addToBookings(
//     root: any,
//     {sportClassID} : {sportClassID: string},
//     context: KeystoneContext,
//   ): SingleBookingCreateInput {
//     console.log('adding to booking')
//   }

async function addToBookings(root, { sportClassId }, context) {
  //1. query current user to see if they are signed in
  const currentSession = context.session
  if (!currentSession.itemId) {
    throw new Error('You must be logged in to do this')
  }
  //2. query current user bookings & see if this single booking exists
  const allBookings = await context.lists.SingleBooking.findMany({
    where: {
      user: { id: currentSession.itemId },
      sportClass: { id: sportClassId },
    },
  })

  const [existingBooking] = allBookings

  //3. if it is, dont allow them to add
  if (existingBooking) {
    throw new Error('You are already signed up for this class')
  }

  //4.1 if it isnt, update the SportClass' freeSpots
  const allClasses = await context.lists.SportClass.findMany({
    where: {
      id: sportClassId,
    },
    resolveFields: 'id, freeSpots',
  })

  const [bookedClass] = allClasses

  await context.lists.SportClass.updateOne({
    id: bookedClass.id,
    data: { freeSpots: bookedClass.freeSpots - 1 },
  })

  //4.2 if it isnt, create a new booking
  return await context.lists.SingleBooking.createOne({
    data: {
      sportClass: { connect: { id: sportClassId } },
      user: { connect: { id: currentSession.itemId } },
    },
  })
}

export default addToBookings
