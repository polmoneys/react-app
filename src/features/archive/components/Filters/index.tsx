import { type FormEvent, useEffect } from 'react'
import { ButtonSuccess } from '@/system/components/Buttons'
import Col from '@/system/components/Col'
import { Radio } from '@/system/components/Radios'
import { HelveticaNeue } from '@/system/components/Typography'
import { Switch } from '@/system/components/Checkboxes'
import { isEmptyObject } from '@/system/utils/record'
import useSearchUrl from '@/system/hooks/useSearchUrl'
import { useAppDispatch, useAppSelector } from '@/config/store/hooks'
import { addFilter, archiveFiltersSlice } from '../../store'

function Filters(): JSX.Element {
  const dispatch = useAppDispatch()

  const { agency, status } = useAppSelector(archiveFiltersSlice)

  const onSwitch = (status: boolean): void => {
    dispatch(
      addFilter({ filter: 'status', value: status ? 'active' : 'inactive' }),
    )
  }
  const [urlState, setUrlState, updateCurrentUrlState, back] = useSearchUrl()

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newURLSearchParams = Object.fromEntries(formData)
    console.log({ newURLSearchParams })
    if (isEmptyObject(newURLSearchParams)) alert('Change some filters')
    updateCurrentUrlState(newURLSearchParams as Partial<Record<string, string>>)
  }

  useEffect(() => {
    if (!isEmptyObject(urlState)) {
      console.log({ urlState })
    }
  }, [urlState])

  return (
    <Col as="form" gap="var(--gap-3)" onSubmit={onSubmit}>
      <Switch
        name="status"
        onChangeBoolean={onSwitch}
        label={<HelveticaNeue>Active crew only</HelveticaNeue>}
        id="active-crew"
        initial={status === 'active'}
      />

      <Radio.GroupFieldset name="agency" gap="var(--gap-3)">
        <Radio.Fieldset label="All" value="all" id="radio-all" defaultChecked />
        <Radio.Fieldset label="NASA" value="NASA" id="radio-nasa" />
        <Radio.Fieldset label="ESA" value="ESA" id="radio-esa" />
        <Radio.Fieldset label="SpaceX" value="SpaceX" id="radio-spacex" />
        <Radio.Fieldset
          label="Roscosmos"
          value="Roscosmos"
          id="radio-roscosmos"
        />
        <Radio.Fieldset
          label="Axiom Space"
          value="AxiomSpace"
          id="radio-axiom-space"
        />
      </Radio.GroupFieldset>

      {/* <Radio.Group
            name="agency"
            initial={agency ?? 'All'}
            onChange={(value: Agencies) => {
              console.log({ value })
              dispatch(addFilter({ filter: 'agency', value }))
            }}
            gap="var(--gap-1)"
          >
            <Radio label="All" value="All" id="radio-all" defaultChecked />
            <Radio label="NASA" value="NASA" id="radio-nasa" />
            <Radio label="ESA" value="ESA" id="radio-esa" />
            <Radio label="SpaceX" value="SpaceX" id="radio-spacex" />
            <Radio
              label="Axiom Space"
              value="AxiomSpace"
              id="radio-axiom-space"
            />
            <Radio label="Roscosmos" value="Roscosmos" id="radio-roscosmos" />
          </Radio.Group> */}

      <ButtonSuccess type="submit">Apply filters to url</ButtonSuccess>
    </Col>
  )
}
export default Filters
