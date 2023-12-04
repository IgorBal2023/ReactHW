import { ErrorMessage, Field, Form, Formik } from "formik";
import "./formData.css";
import * as yup from "yup";

export const FormData = () => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .test("no-only-spaces", function (value) {
        return value.trim() !== "";
      })
      .required("Required"),
    lastName: yup
      .string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .test("no-only-spaces", function (value) {
        return value.trim() !== "";
      })
      .required("Required"),
    city: yup
      .string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .test("no-only-spaces", function (value) {
        return value.trim() !== "";
      })
      .required("Required"),
  });

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: "", lastName: "", city: "" }}
        onSubmit={(values, formikBag) => {
          formikBag.resetForm();
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field
              name="name"
              type="text"
              id="name"
              className={`input ${
                formik.errors.name && formik.touched.name ? `error` : ``
              }`}
            />
            <ErrorMessage
              className="errorMessage"
              name="name"
              component="div"
            />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <Field
              name="lastName"
              type="text"
              id="lastName"
              className={`input ${
                formik.errors.lastName && formik.touched.lastName ? `error` : ``
              }`}
            />
            <ErrorMessage
              className="errorMessage"
              name="lastName"
              component="div"
            />
            <br />
            <label htmlFor="city">City</label>
            <Field
              name="city"
              type="text"
              id="city"
              className={`input ${
                formik.errors.city && formik.touched.city ? `error` : ``
              }`}
            />
            <ErrorMessage
              className="errorMessage"
              name="city"
              component="div"
            />
            <br />
            <button type="submit" className="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
