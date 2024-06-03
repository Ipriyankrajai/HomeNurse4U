import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { skilldbAxiosClient } from "../../utils";
import Loader from "../../common/Loader";
import styles from "./enquiry.module.css";
import { Select } from "@headlessui/react";

const initValues = {
  name: "",
  email: "",
  country: "",
  phone: "",
  company: "",
  message: "",
  interest: "",
  state: "",
  designation: ""
};
const EnquiryFields = ({
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
    company: Yup.string().required("Required").strict().trim("Please Remove extra spaces."),
    message: Yup.string().required("Required").strict(),
    interest: Yup.string().required("Required").strict(),
    designation: Yup.string().required("Required").strict(),
    state: Yup.string().required("Required").strict(),
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
          <Form onSubmit={props.handleSubmit}>
            <div className={flex ? `md:flex gap-[20px]` : ""}>
              <Field name="name">
                {(formikProps) => {
                  const { field, meta } = formikProps;
                  return (
                    <div
                      className={`w-full ${styles["wrapper"]} ${fieldWrapClass}`}
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
              <Field name="designation">
                {(formikProps) => {
                  const { field, meta } = formikProps;
                  return (
                    <div
                      className={`w-full ${styles["wrapper"]} ${fieldWrapClass}`}
                    >
                      <div className={`${lableBGColor} ${styles["title"]}`}>
                        Designation <span className="text-[#D72C0D]">*</span>
                      </div>
                      <input
                        type={"text"}
                        placeholder="What position do you hold?"
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
            <div className={flex ? `md:flex gap-[20px]` : ""}>
              <Field name="company">
                {(formikProps) => {
                  const { meta, field } = formikProps;
                  return (
                    <div className={`${styles["wrapper"]} ${fieldWrapClass}`}>
                      <div className={`${lableBGColor} ${styles["title"]}`}>
                        Company <span className="text-[#D72C0D]">*</span>
                      </div>
                      <input
                        type={"text"}
                        className={`${
                          meta?.touched && meta?.error
                            ? styles["error-border"]
                            : styles["n-border"]
                        } ${lableBGColor}`}
                        placeholder="Where do you work?"
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
              <Field name="phone">
                {(formikProps) => {
                  const { field, meta } = formikProps;
                  return (
                    <div
                      className={`w-full ${styles["wrapper"]} ${fieldWrapClass}`}
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
            <div className={flex ? `md:flex gap-[20px]` : ""}>
              <Field name="email">
                {(formikProps) => {
                  const { field, meta } = formikProps;
                  return (
                    <div
                      className={`w-full ${styles["wrapper"]} ${fieldWrapClass}`}
                    >
                      <div className={`${lableBGColor} ${styles["title"]}`}>
                        Email<span className="text-[#D72C0D]">*</span>
                      </div>
                      <input
                        type={"email"}
                        placeholder="Your official email address"
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
              <Field name="interest">
                {(formikProps) => {
                  const { meta, field, form } = formikProps;
                  return (
                    <div
                      className={`w-full ${styles["wrapper"]} ${fieldWrapClass}`}
                    >
                      <div
                        className={`${lableBGColor} ${styles["title"]}  z-10`}
                      >
                        Interested In<span className="text-[#D72C0D]">*</span>
                      </div>
                      <div className="relative top-[10px]">
                        <Select
                          className={`bg-[#fafbfb] h-[40px] px-[14px] block w-full rounded-[6px] border ${meta?.error ? " border-[#D72C0D]" : " border-[#D2D5D8]"} appearance-none focus:border-[#008060] outline-none text-[13px] leading-[150%] trackig-[0.5px] ${
                            field.value ? "" : "text-[#6d7175]"
                          }`}
                          value={field.value}
                          onChange={(e) =>
                            form.setFieldValue("interest", e.target.value)
                          }
                        >
                          <option
                            disabled
                            selected
                            value={""}
                            className="text-[13px] leading-[150%] trackig-[0.5px]"
                            hidden
                          >
                            Please choose an option
                          </option>
                          <option value="Mobile Nursing">Mobile Nursing</option>
                          <option value="Phlebotomy">Phlebotomy</option>
                          <option value="Clinical Site Support">
                            Clinical Site Support
                          </option>
                          <option value="Clinical Supplies">
                            Clinical Supplies
                          </option>
                        </Select>
                      </div>
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
            <div className={flex ? `md:flex gap-[20px]` : ""}>
              <Field name="country">
                {(formikProps) => {
                  const { meta, field } = formikProps;
                  return (
                    <div
                      className={`w-full ${styles["wrapper"]} ${fieldWrapClass}`}
                    >
                      <div className={`${lableBGColor} ${styles["title"]}`}>
                        Country<span className="text-[#D72C0D]">*</span>
                      </div>
                      <input
                        type={"text"}
                        className={`${
                          meta?.touched && meta?.error
                            ? styles["error-border"]
                            : styles["n-border"]
                        } ${lableBGColor}`}
                        placeholder="Which country do you live in?"
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
              <Field name="state">
                {(formikProps) => {
                  const { field, meta } = formikProps;
                  return (
                    <div
                      className={`w-full ${styles["wrapper"]} ${fieldWrapClass}`}
                    >
                      <div className={`${lableBGColor} ${styles["title"]}`}>
                        State<span className="text-[#D72C0D]">*</span>
                      </div>
                      <input
                        type={"state"}
                        placeholder="Which state do you stay?"
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

            <Field name="message">
              {(formikProps) => {
                const { meta, field } = formikProps;
                return (
                  <div className={`${styles["wrapper"]} ${fieldWrapClass}`}>
                    <div className={`${lableBGColor} ${styles["title"]}`}>
                      Message
                    </div>
                    <textarea
                      rows={textAreaRow}
                      // type={"text"}
                      className={` scrollbar-styles resize-none ${
                        meta?.touched && meta?.error
                          ? styles["error-border"]
                          : styles["n-border"]
                      } ${lableBGColor}`}
                      placeholder={
                        fullPlaceHolder
                          ? "Tell us a bit more about your request..."
                          : "A bit more about your request..."
                      }
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
                            className={`${styles["error-msg-ta"]} ${lableBGColor}`}
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
            <button
              className={`uppercase bg-[#008060] text-white text-[13px] sf-med font-medium rounded-[10px] py-[10px] h-[50px] w-full`}
              disabled={loading}
              type={loading ? "button" : "submit"}
            >
              {loading ? (
                <div className="flex justify-center">
                  <Loader />
                </div>
              ) : (
                "SEND MESSAGE"
              )}
            </button>
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

export default EnquiryFields;
