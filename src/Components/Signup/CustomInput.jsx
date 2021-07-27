import React from 'react';
import { useField } from 'formik';

export const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label>
          {label}
          <input {...field} {...props} />
        </label>
        {meta.touched && meta.error ? (
          <div>{meta.error}</div>
        ) : null}
      </>
    );
  }