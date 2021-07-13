import React from 'react';
 import { useFormik } from 'formik';
 import styled from 'styled-components';
 
 export const ProfileData = () => {
   const formik = useFormik({
     initialValues: {
       Who: '',
       Company: '',
       Website: '',
       Location: '',
       Skills:'',
       Bio: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

   return (
     
     <form onSubmit={formik.handleSubmit}>
     <Blockh1>Profile Data</Blockh1>
       <label htmlFor="I am a">I am a</label>
       <BlockInput
         id="Who"
         name="Who"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Who}
       />
        <label htmlFor="Company">Company</label>
       <BlockInput
         id="Company"
         name="Company"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Company}
       />
       <label htmlFor="Website">Website</label>
       <BlockInput
         id="Website"
         name="Website"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Website}
       />
       <label htmlFor="Location">Location</label>
       <BlockInput
         id="Location"
         name="Location"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Location}
       />
       <label htmlFor="Skills">Skills</label>
       <BlockInput
         id="Skills"
         name="Skills"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Skills}
       />
       <label htmlFor="Bio">Bio</label>
       <BlockInput
         id="Bio"
         name="Bio"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Bio}
       />
       <button type="submit">Submit</button>
     </form>
   );
 };

 const BlockInput=styled.input`
 display: block;
 `
 const Blockh1=styled.h1`
 display: block;
 `

 const Blockselect=styled.select`
 display: block;
 `