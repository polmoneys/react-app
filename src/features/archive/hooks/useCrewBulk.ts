import { useQueries } from '@tanstack/react-query'
import endpoints, { axiosClient } from '@/config/endpoints'
import { getEndpoint } from '@/config/endpoints/utils'
import { useAppSelector } from '@/config/store/hooks'
import { archiveFiltersSlice } from '../store'
import { matchItemToCrew } from '../utils'

function useCrewBulk() {
  const { bulk } = useAppSelector(archiveFiltersSlice)
  const variables = {
    query: {},
    options: {},
  }

  return useQueries({
    queries: (bulk ?? [])?.map(id => ({
      queryKey: ['crew-member', variables, id],
      queryFn: async () => {
        const endpoint = getEndpoint(endpoints.archive.single, [id])

        const { data, status } = await axiosClient.get(endpoint, {
          params: variables,
        })

        if (status === 200) {
          return matchItemToCrew(data)
        }
        if (status >= 400) {
          return await Promise.reject(new Error('Validation error'))
        }
      },
    })),
  })
}

export default useCrewBulk
