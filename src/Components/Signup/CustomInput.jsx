import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

export const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <CustomLabel>
        {label}
      </CustomLabel>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </>
  );
}

const CustomLabel = styled.label`
  display: block;
  margin-bottom: -35px;
  font-family: Georgia, "Times New Roman", Times, serif;
`