import { Lorem, LoremXL } from "@/system/components/Core/Font/utils";
import { IconBookmark, IconHeart } from "@/system/components/Icons";
import List from "@/system/components/List";
import {
  Grotesk,
  GroteskXL,
  HelveticaNeue,
  HelveticaNeueBold,
  HelveticaNeueMedium,
} from "@/system/components/Typography";
import View from "@/system/components/View";
import useStories from "../hooks/useStories";

const Stories = () => {
  const { data, isFetching } = useStories();
  /* 
    TODO:
    
    dispatch(postUpdated({ id: postId, title, content }))
    
    const post = useSelector(state =>
      state.posts.find(post => post.id === postId)
    );
  */
  return (
    <View>
      <View.Full>
        <GroteskXL>Stories</GroteskXL>
        <HelveticaNeueMedium>{LoremXL}</HelveticaNeueMedium>
      </View.Full>
      <View.Popout>
        <List label="stories">
          {isFetching && (
            <List.Divider>
              <HelveticaNeueBold>Loading</HelveticaNeueBold>
            </List.Divider>
          )}
          <List.Divider>
            <HelveticaNeue>
              {isFetching ? "Loading" : "All SW films"}
            </HelveticaNeue>
          </List.Divider>
          {data?.map(story => (
            <List.Item
              start={<IconBookmark label="Bookmark" size="md" />}
              end={
                <IconHeart label="Like" size="lg" stroke="var(--color-focus)" />
              }
              key={story.id}
            >
              <HelveticaNeueBold>{story.title}</HelveticaNeueBold>
              <HelveticaNeue>Story by {story.director}</HelveticaNeue>
            </List.Item>
          ))}
        </List>
      </View.Popout>
      <View.Feature>
        <GroteskXL>{Lorem}</GroteskXL>
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        <HelveticaNeue>{LoremXL}</HelveticaNeue>
      </View.Feature>
    </View>
  );
};

export default Stories;
