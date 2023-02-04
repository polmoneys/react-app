import { useQuery } from "react-query";
import { request, gql } from "graphql-request";
import endpoints from "@/config/endpoints";
import { matchItemsToStories } from "../store/utils";

function useStories() {
  const endpoint = endpoints.stories.list;

  return useQuery("stories", async () => {
    const data = await request(
      endpoint,
      gql`
        query {
          allFilms {
            films {
              title
              director
              releaseDate
              # TODO: https://studio.apollographql.com/public/star-wars-swapi/schema/reference?variant=current
              # speciesConnection {
              #   species {
              #     name
              #     classification
              #   }
              # }
            }
          }
        }
      `
    );

    return matchItemsToStories(data.allFilms.films);
  });
}

export default useStories;
