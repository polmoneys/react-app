import { useQueries } from '@tanstack/react-query'
import { request, gql } from 'graphql-request'
import endpoints from '@/config/endpoints'
import { matchToPeople, matchToPlanets } from '../utils'

function useTrivia() {
  const endpoint = endpoints.stories.list

  return useQueries({
    queries: [
      {
        queryKey: ['planets'],
        queryFn: async () => {
          const data = await request(
            endpoint,
            gql`
              query {
                allPlanets {
                  totalCount
                  planets {
                    id
                    name
                    diameter
                  }
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                }
              }
            `,
          )
          if (data?.status >= 400 && data.status < 500) {
            return await Promise.reject(new Error('Validation error'))
          }

          if (data?.status >= 500) {
            return await Promise.reject(new Error('Server error'))
          }
          return matchToPlanets(data.allPlanets)
        },
      },
      {
        queryKey: ['people'],
        queryFn: async () => {
          const data = await request(
            endpoint,
            gql`
              query {
                allPeople {
                  people {
                    id
                    birthYear
                    name
                    eyeColor
                    homeworld {
                      name
                    }
                  }
                  totalCount
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                }
              }
            `,
          )
          return matchToPeople(data.allPeople)
        },
      },
    ],
  })
}

export default useTrivia
