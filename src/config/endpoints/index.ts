import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'

const endpoints = {
  baseUrl: '',
  settings: {
    me: 'v1/user',
    user: 'v1/users/{user}',
  },
  stories: {
    list: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  },
  archive: {
    base: 'https://api.spacexdata.com',
    crew: 'v4/crew',
    single: 'v4/crew/{id}',
    launches: 'v5/launches/latest',
  },
}

export const queryOptions = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24,
      retry: false,
    },
  },
})

export const axiosClient = axios.create({
  baseURL: endpoints.archive.base,
})

export default endpoints
