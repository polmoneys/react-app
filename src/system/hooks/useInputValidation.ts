import { type ChangeEvent, useState } from 'react'
import * as yup from 'yup'

export const VALIDATE_URL = yup.string().url()
export const VALIDATE_USERNAME = yup.string().max(8, '8 chars max')
export type SchemaURL = yup.InferType<typeof VALIDATE_URL>
export type SchemaUsername = yup.InferType<typeof VALIDATE_USERNAME>

interface Props {
  initial: string
  // TODO: add preset validations as 'url' | 'username'...
  validation?: any
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

    return validation?.isValid(value).then((valid: boolean) => {
      if (valid) {
        setValue(value)
      } else {
        validation?.validate(value).catch((err: any) => {
          setError(err?.message ?? errorMessage)
          setValue(value)
        })
      }
    })
  }

  return [value, onChange, error]
}

export default useInputValidation
