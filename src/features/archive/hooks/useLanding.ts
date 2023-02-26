import { useQueries } from '@tanstack/react-query'
import endpoints, { axiosClient } from '@/config/endpoints'
import { useAppSelector } from '@/config/store/hooks'
import { matchItemsToCrew, matchToLaunch } from '../utils'
import { archiveFiltersSlice } from '../store'

function useLanding() {
  const { agency, status: crewStatus } = useAppSelector(archiveFiltersSlice)
  const variables = {
    options: {
      // page: 0,
      // limit: 10,
      // sort: {
      //   name: 'desc',
      // },
    },
  }

  return useQueries({
    queries: [
      {
        queryKey: ['crew', agency, crewStatus],
        queryFn: async () => {
          const endpoint = endpoints.archive.crew

          const { data, status } = await axiosClient.get(endpoint, {
            params: {
              query: {
                ...(agency != null && agency !== 'All' && { agency }),
                active: crewStatus,
                // query: {
                //  "$text": {
                //   "$search": "crs"
                // },
              },
              ...variables,
            },
          })
          if (status >= 400 && data.status < 500) {
            return await Promise.reject(new Error('Validation error'))
          }

          if (status >= 500) {
            return await Promise.reject(new Error('Server error'))
          }
          if (status === 200) {
            return matchItemsToCrew(data)
          }
        },
      },
      {
        queryKey: ['launches', variables],
        queryFn: async () => {
          const endpoint = endpoints.archive.launches

          const { data, status } = await axiosClient.get(endpoint, {
            params: {
              query: {},
              ...variables,
            },
          })
          if (status >= 400 && data.status < 500) {
            return await Promise.reject(new Error('Validation error'))
          }

          if (status >= 500) {
            return await Promise.reject(new Error('Server error'))
          }
          if (status === 200) {
            return matchToLaunch(data)
          }
        },
      },
    ],
  })
}

export default useLanding
