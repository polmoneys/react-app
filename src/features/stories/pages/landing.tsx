import { Lorem, LoremXL } from "@/system/components/Core/Font/utils";
import { IconBookmark, IconHeart } from "@/system/components/Icons";
import { List } from "@/system/components/Lists";
import {
  Grotesk,
  GroteskXL,
  HelveticaNeue,
  HelveticaNeueBold,
  HelveticaNeueMedium,
} from "@/system/components/Typography";
import Card from "@/system/components/Core/Card";
import Grid from "@/system/components/Grid";
import { IconTwitter } from "@/system/components/Icons";
import View from "@/system/components/View";
import useStories from "../hooks/useStories";

const Stories = () => {
  const { data, isFetching } = useStories();

  return (
    <View>
      <View.Feature>
        <GroteskXL>Stories</GroteskXL>
      </View.Feature>

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

      <View.Full>
        <Grid as="div" size="md" className="gap:sm">
          {[...Array(12)].map((k, v) => (
            <Card as="div" ratio="landscape" key={v}>
              <Card.Title>
                <p className="mr:auto"> Nº {v} </p>
                <IconTwitter size="lg" label="" />
              </Card.Title>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
          ))}
        </Grid>
      </View.Full>
    </View>
  );
};

export default Stories;
