import { type ChangeEvent, useState } from 'react'
import * as yup from 'yup'

const VALIDATIONS = {
  text: yup.string(),
  url: yup.string().url(),
  username: yup.string().max(8, '8 chars max'),
}
export type SchemaText = yup.InferType<typeof VALIDATIONS.text>
export type SchemaURL = yup.InferType<typeof VALIDATIONS.url>
export type SchemaUsername = yup.InferType<typeof VALIDATIONS.username>

interface Props {
  initial: string
  validation: 'text' | 'url' | 'username'
  errorMessage?: string
}
type InputChange = ChangeEvent<HTMLInputElement>
type OnChange = (event: InputChange | string) => void

const useInputValidation = (
  props: Props,
): [string, OnChange, undefined | string] => {
  const { initial = '', validation, errorMessage } = props

  const [value, setValue] = useState<string>(initial)
  const [error, setError] = useState<string | undefined>(undefined)

  const onChange: OnChange = (data: string | InputChange) => {
    const value = typeof data === 'string' ? data : data.target.value
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function onChangeValidate() {
      try {
        console.log({ isValid: await VALIDATIONS[validation].isValid(value) })
        if (await VALIDATIONS[validation].isValid(value)) {
          console.log({ value }, 'W')
          setValue(value)
        } else {
          await VALIDATIONS[validation].validate(value).catch(err => {
            console.log({ err }, 'L')
            setError(err?.message ?? errorMessage)
            setValue(value)
          })
        }
      } catch (err) {}
    }
    const validate = onChangeValidate()
  }

  return [value, onChange, error]
}

export default useInputValidation
