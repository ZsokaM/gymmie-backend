import { graphQLSchemaExtension } from '@keystone-next/keystone/schema'
import addToBookings from './addToBookings'

//fake graphql tagged template literal for syntax highlighting to making it easier to read, similar to gql
const graphql = String.raw

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      addToBookings(sportClassId: ID): SingleBooking
    }
  `,
  resolvers: {
    Mutation: {
      addToBookings,
    },
  },
})
