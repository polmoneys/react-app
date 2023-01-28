import { useQuery } from "react-query";
import { request, gql } from "graphql-request";
import endpoints from "@/config/endpoints";

function useStories() {
  const endpoint = endpoints.stories.list;

  return useQuery("stories", async () => {
    const {
      posts: { data },
    } = await request(
      endpoint,
      gql`
        query {
          posts {
            data {
              id
              title
            }
          }
        }
      `
    );
    return data;
  });
}

export default useStories;
