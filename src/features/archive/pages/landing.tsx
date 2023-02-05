import Card from "@/system/components/Card";
import Grid from "@/system/components/Grid";
import { IconTwitter } from "@/system/components/Icons";
import { GroteskXL } from "@/system/components/Typography";

const Archive = () => {
  return (
    <article>
      <GroteskXL>Archive</GroteskXL>
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
    </article>
  );
};

export default Archive;
