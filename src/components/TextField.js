import React from 'react'
import { ErrorMessage, useField } from 'formik'

export default function TextField( {placeholder, ...props}){
    const [field, meta] = useField(props)
  return (
    <div>
      <input className={ `form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} placeholder={placeholder} {...field} {...props} autoComplete="off" />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
