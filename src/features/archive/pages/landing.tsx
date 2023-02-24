import { type FormEvent, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button, { ButtonSuccess } from '@/system/components/Buttons'
import { Radio } from '@/system/components/Radios'
import {
  GroteskXL,
  HelveticaNeue,
  HelveticaNeueBold,
} from '@/system/components/Typography'
import useSearchUrl from '@/system/hooks/useSearchUrl'
import Col from '@/system/components/Col'
import Grid from '@/system/components/Grid'
import { Card, CardPortraitError } from '@/system/components/Cards'
import { IconHeart, IconTwitter } from '@/system/components/Icons'
import { isEmptyObject } from '@/system/utils/record'
import { Lorem, LoremMD } from '@/system/components/Core/Font/utils'

const Archive = () => {
  const [urlState, setUrlState, updateCurrentUrlState, back] = useSearchUrl()

  // useEffect(() => {
  //   if (isEmptyObject(urlState)) return
  // }, [urlState])

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newURLSearchParams = Object.fromEntries(formData)
    if (isEmptyObject(newURLSearchParams)) alert('Change some filters')
    updateCurrentUrlState(newURLSearchParams as Partial<Record<string, string>>)
  }

  return (
    <Col as="article" gap="var(--gap-3)">
      <GroteskXL>Archive</GroteskXL>

      <Col as="form" onSubmit={onSubmit}>
        <Radio.GroupFieldset name="status" gap="var(--gap-1)">
          <Radio.Fieldset
            label="Draft"
            value="draft"
            id="radio-draft"
            defaultChecked
          />
          <Radio.Fieldset label="Live" value="live" id="radio-live" />
          <Radio.Fieldset label="Unknown" value="unknown" id="radio-unknown" />
          <Radio.Fieldset
            label="Published"
            value="published"
            id="radio-published"
          />
        </Radio.GroupFieldset>

        <ButtonSuccess>Apply filters to url</ButtonSuccess>
      </Col>

      <Grid as="section" size="sm" className="gap:xl">
        <div className="demo gap:md">
          {[...Array(6)].map((k, v) => (
            <Card.Landscape as="div" key={v}>
              <Card.Title>
                <Button className="mr:auto">
                  <IconHeart label="" />
                </Button>
                <IconTwitter size="lg" label="" />
              </Card.Title>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card.Landscape>
          ))}
        </div>

        <div className="demo gap:md">
          {[...Array(6)].map((k, v) => (
            <Card.Portrait as="div" key={v}>
              <Card.Title>
                <Button className="mr:auto">
                  <IconHeart label="" />
                </Button>
                <IconTwitter size="lg" label="" />
              </Card.Title>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card.Portrait>
          ))}
        </div>
      </Grid>
    </Col>
  )
}

export default Archive
