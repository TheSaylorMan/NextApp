"use client";

import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import Input from "../Input";

interface Iform2 {
  addForm: any;
}

const Form2: React.FC<Iform2> = ({ addForm }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      message: "",
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: Yup.object({
      firstName: Yup.string().required(),
      lastName: Yup.string(),
      dateOfBirth: Yup.date(),
      email: Yup.string().email().required(),
      message: Yup.string().required(),
    }),
    onSubmit: (values, {resetForm}) => {
        addForm(values);
        resetForm();
  
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
        <Input type="text" name="firstName" placeholder="Your First Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} error={formik.errors.firstName} />
        <Input type="text" name="lastName" placeholder="Your Last Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} error={formik.errors.lastName} />
        <Input type="date" name="dateOfBirth" placeholder="Date" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dateOfBirth} error={formik.errors.dateOfBirth} />
        <Input type="email" name="email" placeholder="abc@abc.com" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} error={formik.errors.email}/>
        <textarea name="message"  cols={5} rows={10} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} ></textarea>

    </form>
  )

};

export default Form2; 
