import React from "react";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import classes from "./Forms.module.css";

const initialValue = {
  email: "",
  companyName: "",
  password: "",
  acceptTerms: false,
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required")
    .email("Email is invalid"),

  companyName: Yup.string()
    .max(30, "Too Long!")
    .required("Company Name is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters"),

  acceptTerms: Yup.boolean().oneOf(
    [true],
    "Accept Terms & Conditions is required"
  ),
});

const Forms = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={handleSubmit}>
      {(formik) => {
        return (
          <form onSubmit={formik.handleSubmit}>
            <div className={classes.Rectangle}>
              <div className={classes.main}>
                <span className={classes.SignUp}>Sign Up</span>
                <span className={classes["No-credit-card-requi"]}>
                  No credit card required
                </span>

                <div className={classes.formDiv}>
                  <input
                    className={classes.inputBox}
                    type="email"
                    placeholder="Email address"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className={classes.formErrorMsg}
                  />
                </div>

                <div className={classes.formDiv}>
                  <input
                    className={classes.inputBox}
                    type="text"
                    placeholder="Company name"
                    name="companyName"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className={classes.formErrorMsg}
                  />
                </div>

                <div className={classes.formDiv}>
                  <input
                    className={classes.inputBox}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={classes.formErrorMsg}
                  />
                </div>
              </div>
              <input
                className={classes.Path}
                type="checkbox"
                name="acceptTerms"
                value={formik.values.acceptTerms}
                onChange={formik.handleChange}
              />

              <span className={classes["I-agree-to-the-Terms"]}>
                <span className={classes["text-style-1"]}>I agree to the</span>
                Terms & Conditions
              </span>
              <ErrorMessage
                name="acceptTerms"
                component="div"
                className={classes.formErrorMsg}
              />

              <div className={classes.main}>
                <button className={classes["btn-get"]} type="submit">
                  Get Started
                </button>
                <div>
                  <span className={classes["Already-have-an-acco"]}>
                    Already have an account?
                    <span className={classes["text-style-1"]}>Sign in</span>
                  </span>
                </div>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Forms;
