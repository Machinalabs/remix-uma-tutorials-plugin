import { FormikErrors } from "formik";

export function getValidatorFunction<T>(typeItem: T) {
    const errors: FormikErrors<T> = {}

    return (values: T) => {
        const keys = Object.keys(typeItem)

        keys.forEach((key) => {
            if (!values[key]) {
                errors[key] = "Required"
            }
        })

        return errors
    }
}