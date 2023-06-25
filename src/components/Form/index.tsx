import React from "react";
import styles from "./index.module.scss";
import Button from "@/components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IForm {
  addTask: any;
}

const Form: React.FC<IForm> = ({ addTask }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
      assignee: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required(),
      description: Yup.string(),
      date: Yup.date().required(),
      assignee: Yup.string().required(),
    }),
    onSubmit: (values, { resetForm }) => {
      addTask(values);
      resetForm();
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task name here..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      <textarea
        name="description"
        placeholder="Description"
        rows={4}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
      ></textarea>
      <div className={styles.bottomRow}>
        <div className={styles.bottomInputs}>
          <input
            type="date"
            name="date"
            placeholder="Due Date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
          <input
            type="text"
            name="assignee"
            placeholder="Assignee"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.assignee}
          />
        </div>
        <div className={styles.buttonHolder}>
          <Button text="Cancel" theme="light" />
          <Button text="Add task" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default Form;
