import { QueryClient } from "react-query";

const endpoints = {
  baseUrl: "",
  settings: {
    me: "v1/user",
    user: "v1/users/{user}",
  },
  stories: {
    list: "https://graphqlzero.almansi.me/api",
  },
};

export const queryOptions = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24,
      retry: false,
    },
  },
});

export default endpoints;
