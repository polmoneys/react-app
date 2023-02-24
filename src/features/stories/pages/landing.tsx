import { Lorem, LoremXL } from '@/system/components/Core/Font/utils'
import { IconBookmark, IconHeart, IconTwitter } from '@/system/components/Icons'
import { List } from '@/system/components/Lists'
import {
  Grotesk,
  GroteskXL,
  HelveticaNeue,
  HelveticaNeueBold,
  HelveticaNeueMedium,
} from '@/system/components/Typography'
import Grid from '@/system/components/Grid'
import View from '@/system/components/View'
import Pre from '@/system/components/Pre'
import useStories from '../hooks/useStories'
import { Card, CardPortraitSuccess } from '@/system/components/Cards'
import Button from '@/system/components/Buttons'

const Stories = () => {
  const { data, isFetching } = useStories()

  const p = `
         _
      _-'_'-_
   _-' _____ '-_
_-' ___________ '-_
 |___|||||||||___|
 |___|||||||||___|
 |___|||||||o|___|
 |___|||||||||___|
 |___|||||||||___|
 |___|||||||||___|
  `

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
              {isFetching ? 'Loading' : 'All SW films'}
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
        <Pre id="test-pre" label="" pre={p} description="" />
      </View.Full>
    </View>
  )
}

export default Stories
