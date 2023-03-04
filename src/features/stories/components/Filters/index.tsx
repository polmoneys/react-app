import { useAppDispatch, useAppSelector } from '@/config/store/hooks'
import {
  Card,
  Col,
  Radio,
  HelveticaNeue,
  HelveticaNeueBoldXL,
  Switch,
  Couple,
  IconHeart,
} from '@/system/components'
import { addFilter, storiesFiltersSlice } from '../../store'
import { type Rating } from '../../interfaces/Filters'

export const matchEpisodeToRating = (label: Rating): string[] => {
  return {
    good: ['6'],
    bad: ['1', '2', '3'],
    excelent: ['4'],
    top: ['5'],
    all: ['1', '2', '3', '4', '5', '6'],
  }[label]
}

const matchLabelToHearts = (label: Rating): number => {
  return {
    good: 3,
    bad: 1,
    excelent: 4,
    top: 5,
    all: 0,
  }[label]
}
function Filters(): JSX.Element {
  const dispatch = useAppDispatch()
  const { sort, query, rating, old } = useAppSelector(storiesFiltersSlice)

  const onSwitch = (value: boolean): void => {
    dispatch(addFilter({ filter: 'old', value }))
  }

  return (
    <Col
      as="form"
      gap="var(--gap-3)"
      id="form-id"
      // onsubmit="submit.disabled = true"
    >
      <Card as="div" ratio="auto">
        <Col as="div">
          <Switch
            name="vintage"
            onChangeBoolean={onSwitch}
            label={<HelveticaNeue>Vintage movies only</HelveticaNeue>}
            id="only-old"
            initial={old}
          />

          <Radio.Group
            name="rating"
            initial={rating}
            onChange={value => {
              dispatch(addFilter({ filter: 'rating', value }))
            }}
            gap="var(--gap-1)"
            renderLabel={({
              checked,
              radioLabel,
            }: {
              checked: boolean
              radioLabel: string
            }) => {
              const amount = matchLabelToHearts(radioLabel as Rating)
              // all
              if (amount === 0) {
                return (
                  <HelveticaNeueBoldXL
                    dangerousColor={
                      checked ? 'var(--color-invalid)' : 'var(--color-focus)'
                    }
                  >
                    {radioLabel}
                  </HelveticaNeueBoldXL>
                )
              }
              return (
                <Couple as="div">
                  {[...Array(amount)].map((_, pos: number) => (
                    <IconHeart
                      key={`${pos}-${radioLabel}`}
                      label="checked"
                      size="lg"
                      stroke={
                        checked ? 'var(--color-invalid)' : 'var(--color-focus)'
                      }
                    />
                  ))}
                </Couple>
              )
            }}
          >
            <Radio.Label
              label="all"
              name="all"
              value="all"
              id="radio-rating-all"
              width="calc(25% - var(--gap-1)"
            />
            <Radio.Label
              label="top"
              name="top"
              value="top"
              id="radio-rating-top"
              width="calc(50% - var(--gap-1)"
            />
            <Radio.Label
              label="good"
              name="good"
              value="good"
              id="radio-rating-good"
              width="calc(25% - var(--gap-1)"
            />
            <Radio.Label
              label="bad"
              name="bad"
              value="bad"
              id="radio-bad"
              width="calc(25% - var(--gap-1)"
            />
            <Radio.Label
              label="excelent"
              name="excelent"
              value="excelent"
              id="radio-excelent"
              width="calc(75% - var(--gap-1)"
            />
          </Radio.Group>
        </Col>
      </Card>
      {/* <Button type="submit" form="form-id">
        Submit
      </Button> */}
    </Col>
  )
}
export default Filters
