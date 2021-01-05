import { FormikErrors } from "formik"

export function getValidatorFunction<T>(typeItem: T) {

  return (values: T) => {
    const errors: FormikErrors<T> = {}

    const keys = Object.keys(typeItem)

    keys.forEach((key) => {
      if (!values[key]) {
        errors[key] = "Required"
      }
    })

    return errors
  }
}
