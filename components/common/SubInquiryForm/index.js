import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { skilldbAxiosClient } from "../../utils";
import Loader from "../../common/Loader";
import styles from "./enquiry.module.css";

const initValues = {
  name: "",
  email: "",
  country: "",
  phone: "",
  company: "",
  message: "",
};
const SubInquiryForm = ({
  flex = false,
  buttonFitContent = false,
  fullPlaceHolder = false,
  lableBGColor = "bg-white",
  textAreaRow = 2,
  fieldWrapClass = "",
  userID,
  orgID,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [initialValues, setInitialValues] = useState(initValues);

  const phoneRegExp = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/;
  // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object({
    name: Yup.string()
      .strict()
      .trim("Please Remove extra spaces.")
      .required("Required")
      .max(20, "First Name should not be more then 20 character")
      .matches(/^[aA-zZ\s]+$/, "Special charaters are not allowed"),
    email: Yup.string()
      .email()
      .strict()
      .trim("Please Remove extra spaces.")
      .required("Required"),
    // phone: Yup.string().strict().trim("Please Remove extra spaces."),
    phone: Yup.string().required("Required").matches(phoneRegExp, "Invalid"),
    country: Yup.string()
      .strict()
      .trim("Please Remove extra spaces.")
      .required("Required"),
    company: Yup.string().strict().trim("Please Remove extra spaces."),
    message: Yup.string().required("Required").strict(),
  });

  useEffect(() => {
    setLoading(false);
    setStatus(null);
    getDataFromLocalStorage();
  }, []);

  const getDataFromLocalStorage = () => {
    const data = localStorage.getItem("inquire-details-new");
    if (data) {
      setInitialValues(JSON.parse(data));
    } else {
      setInitialValues(initValues);
    }
  };
  const setDataInLocalStorage = (values) => {
    localStorage.setItem("inquire-details-new", JSON.stringify(values));
  };
  const submitRequirement = async (values) => {
    setLoading(true);
    const resp = await skilldbAxiosClient.post("/marketplace-inquiry/create", {
      userId: userID || null,
      organizationId: orgID || null,
      name: values?.name,
      email: values?.email,
      countryName: values?.country,
      countryCode: values?.country,
      // phone: values?.phone ? values?.phone : "",
      company: values?.company,
      message: values?.message,
      pageURL: router?.asPath,
    });
    if (resp.data.success) {
      setDataInLocalStorage(values);
      setStatus("success");
      setLoading(false);
      window.open("/thank-you", "_blank");
      window.focus();
    } else {
      setStatus("failed");
      setLoading(false);
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          submitRequirement(values);
        }}
        enableReinitialize
      >
        {(props) => (
            // grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 
          <Form onSubmit={props.handleSubmit} className=" px-[20px] grid sm:grid-cols-2 gap-2 md:flex md:flex-wrap m-auto max-w-[1084px] mt-[30px]">
            <div className={ " flex-auto mr-[11px] "}>
              <Field name="name">
                {(formikProps) => {
                  const { field, meta } = formikProps;
                  return (
                    <div
                      className={`max-w-[303px] ${styles["wrapper"]} ${fieldWrapClass}`}
                    >
                      <div className={`${lableBGColor} ${styles["title"]}`}>
                        Full Name<span className="text-[#D72C0D]">*</span>
                      </div>
                      <input
                        type={"text"}
                        placeholder="What should we call you?"
                        className={`${
                          meta?.touched && meta?.error
                            ? styles["error-border"]
                            : styles["n-border"]
                        } ${lableBGColor}`}
                        onChange={(e) => {
                          let newValue = e.target.value;
                          props.setFieldValue(field?.name, newValue);
                        }}
                        value={field.value}
                      />
                      <ErrorMessage
                        name={field?.name}
                        render={(msg) => {
                          return (
                            <div
                              className={`${styles["error-msg"]} ${lableBGColor}`}
                            >
                              {msg}
                            </div>
                          );
                        }}
                      ></ErrorMessage>
                    </div>
                  );
                }}
              </Field>
            </div>
            <div className={" flex-auto mr-[11px] "}>
              <Field name="phone">
                {(formikProps) => {
                  const { field, meta } = formikProps;
                  return (
                    <div
                      className={`max-w-[303px] ${styles["wrapper"]} ${fieldWrapClass}`}
                    >
                      <div className={`${lableBGColor} ${styles["title"]}`}>
                        Phone<span className="text-[#D72C0D]">*</span>
                      </div>
                      <input
                        type={"email"}
                        placeholder="How do we get back to you?"
                        className={`${
                          meta?.touched && meta?.error
                            ? styles["error-border"]
                            : styles["n-border"]
                        } ${lableBGColor}`}
                        onChange={(e) => {
                          let newValue = e.target.value;
                          props.setFieldValue(field?.name, newValue);
                        }}
                        value={field.value}
                      />
                      <ErrorMessage
                        name={field.name}
                        render={(msg) => {
                          return (
                            <div
                              className={`${styles["error-msg"]} ${lableBGColor}`}
                            >
                              {msg}
                            </div>
                          );
                        }}
                      ></ErrorMessage>
                    </div>
                  );
                }}
              </Field>
              </div>
              <div className={ " flex-auto mr-[11px] "}>
              <Field name="message">
                {(formikProps) => {
                  const { field, meta } = formikProps;
                  return (
                    <div
                      className={`max-w-[303px] ${styles["wrapper"]} ${fieldWrapClass}`}
                    >
                      <div className={`${lableBGColor} ${styles["title"]}`}>
                        Message<span className="text-[#D72C0D]">*</span>
                      </div>
                      <input
                        type={"message"}
                        placeholder="Your official message address"
                        className={`${
                          meta?.touched && meta?.error
                            ? styles["error-border"]
                            : styles["n-border"]
                        } ${lableBGColor}`}
                        onChange={(e) => {
                          let newValue = e.target.value;
                          props.setFieldValue(field?.name, newValue);
                        }}
                        value={field.value}
                      />
                      <ErrorMessage
                        name={field.name}
                        render={(msg) => {
                          return (
                            <div
                              className={`${styles["error-msg"]} ${lableBGColor}`}
                            >
                              {msg}
                            </div>
                          );
                        }}
                      ></ErrorMessage>
                    </div>
                  );
                }}
              </Field>
            </div>
            <div>
            <div className="flex-auto ">
            <button
              className={`mt-[10px] uppercase bg-[#00856F] text-white rounded-[6px] h-[40px] px-[20px] font-medium tracking-[0.14px] text-[14px] `}
              disabled={loading}
              type={loading ? "button" : "submit"}
            >
              {loading ? (
                <div className="flex justify-center">
                  <Loader />
                </div>
              ) : (
                "Submit rfi/rfp"
              )}
            </button>
            </div>
            </div>
            {status ? (
              status == "success" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.05,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.1,
                    },
                  }}
                  className="text-[#007B5C] text-[13px] py-[11px] h-[40px] sf-med font-medium"
                >
                  Thank you for your inquiry.
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.05,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.1,
                    },
                  }}
                  className="text-red-700 text-[13px] py-[11px] h-[40px] sf-med font-medium"
                >
                  Something went wrong.
                </motion.div>
              )
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SubInquiryForm;
