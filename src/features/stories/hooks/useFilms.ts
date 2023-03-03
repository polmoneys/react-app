import { useQuery } from '@tanstack/react-query'
import { request, gql } from 'graphql-request'
import endpoints from '@/config/endpoints'
import { matchItemsToFilms } from '../utils'

function useFilms() {
  const endpoint = endpoints.stories.list

  return useQuery({
    queryKey: ['films'],
    queryFn: async () => {
      const data: any = await request(
        endpoint,
        gql`
          query {
            allFilms {
              films {
                title
                director
                releaseDate
                episodeID
                openingCrawl
              }
            }
          }
        `,
      )

      return matchItemsToFilms(data?.allFilms?.films)
    },
  })
}

export default useFilms
