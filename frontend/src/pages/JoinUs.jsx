import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMediaQuery } from 'react-responsive';

const JoinUs = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters.")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters.")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required"),
    phone: Yup.string(),
    city: Yup.string()
      .min(2, "City is required.")
      .required("City is required"),
    involvement: Yup.string().required(
      "Please select how you want to be involved."
    ),
    skills: Yup.string(),
    motivation: Yup.string()
      .min(10, "Please tell us why you want to join.")
      .required("Motivation is required"),
    privacyPolicy: Yup.boolean()
      .oneOf([true], "You must agree to the privacy policy")
      .required("You must agree to the privacy policy"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    involvement: "",
    skills: "",
    motivation: "",
    privacyPolicy: false,
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    alert("Thank you for joining! We'll be in touch soon.");
    resetForm();
  };

  // Responsive styles
  const containerStyles = {
    padding: isMobile ? "1rem" : "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const headerStyles = {
    textAlign: "center",
    marginBottom: isMobile ? "1.5rem" : "2rem",
    padding: isMobile ? "1.5rem 1rem" : "2rem 1.5rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px"
  };

  const formContainerStyles = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    padding: isMobile ? "1.5rem" : "2rem",
    maxWidth: "900px",
    margin: "0 auto"
  };

  const nameFieldContainerStyles = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "1rem",
    marginBottom: "1rem"
  };

  const fieldContainerStyles = {
    flex: 1,
    marginBottom: "1rem"
  };

  const labelStyles = {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "500",
    color: "#444",
    fontSize: isMobile ? "0.9rem" : "1rem"
  };

  const inputStyles = {
    width: "100%",
    padding: isMobile ? "0.65rem" : "0.75rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: isMobile ? "0.9rem" : "1rem"
  };

  return (
    <div style={containerStyles}>
      {/* Header Section */}
      <div style={headerStyles}>
        <h1 style={{
          fontSize: isMobile ? "1.5rem" : "2rem",
          fontWeight: "bold",
          color: "#4a148c",
          marginBottom: "0.5rem"
        }}>
          Join Our Community
        </h1>
        <p style={{
          fontSize: isMobile ? "0.9rem" : "1rem",
          color: "#555",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Become part of our vibrant community advocating for LGBTQ+ rights and creating positive change.
        </p>
      </div>

      {/* Form Section */}
      <div style={formContainerStyles}>
        <h2 style={{
          fontSize: isMobile ? "1.25rem" : "1.5rem",
          marginBottom: "1.5rem",
          color: "#333",
          borderBottom: "2px solid #f0f0f0",
          paddingBottom: "0.5rem"
        }}>
          Registration Form
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Name Fields */}
              <div style={nameFieldContainerStyles}>
                <div style={fieldContainerStyles}>
                  <label htmlFor="firstName" style={labelStyles}>
                    First Name
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    style={inputStyles}
                    placeholder="Enter your first name"
                  />
                  <ErrorMessage name="firstName" component="div" style={{
                    color: "#d32f2f",
                    fontSize: "0.75rem",
                    marginTop: "0.25rem"
                  }} />
                </div>
                <div style={fieldContainerStyles}>
                  <label htmlFor="lastName" style={labelStyles}>
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    style={inputStyles}
                    placeholder="Enter your last name"
                  />
                  <ErrorMessage name="lastName" component="div" style={{
                    color: "#d32f2f",
                    fontSize: "0.75rem",
                    marginTop: "0.25rem"
                  }} />
                </div>
              </div>

              {/* Email & Phone */}
              <div style={nameFieldContainerStyles}>
                <div style={fieldContainerStyles}>
                  <label htmlFor="email" style={labelStyles}>
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    style={inputStyles}
                    placeholder="your.email@example.com"
                  />
                  <ErrorMessage name="email" component="div" style={{
                    color: "#d32f2f",
                    fontSize: "0.75rem",
                    marginTop: "0.25rem"
                  }} />
                </div>
                <div style={fieldContainerStyles}>
                  <label htmlFor="phone" style={labelStyles}>
                    Phone Number (Optional)
                  </label>
                  <Field
                    name="phone"
                    type="text"
                    style={inputStyles}
                    placeholder="+254 XXX XXX XXX"
                  />
                  <ErrorMessage name="phone" component="div" style={{
                    color: "#d32f2f",
                    fontSize: "0.75rem",
                    marginTop: "0.25rem"
                  }} />
                </div>
              </div>

              {/* City */}
              <div style={fieldContainerStyles}>
                <label htmlFor="city" style={labelStyles}>
                  City/Town
                </label>
                <Field
                  name="city"
                  type="text"
                  style={inputStyles}
                  placeholder="Enter your city or town"
                />
                <ErrorMessage name="city" component="div" style={{
                  color: "#d32f2f",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem"
                }} />
              </div>

              {/* Involvement */}
              <div style={fieldContainerStyles}>
                <label htmlFor="involvement" style={labelStyles}>
                  How would you like to get involved?
                </label>
                <Field
                  as="select"
                  name="involvement"
                  style={{
                    ...inputStyles,
                    backgroundColor: "white"
                  }}
                >
                  <option value="">Select your involvement</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="member">Regular Member</option>
                  <option value="donor">Donor/Supporter</option>
                  <option value="partner">Partner Organization</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="involvement" component="div" style={{
                  color: "#d32f2f",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem"
                }} />
              </div>

              {/* Skills */}
              <div style={fieldContainerStyles}>
                <label htmlFor="skills" style={labelStyles}>
                  Skills & Expertise (Optional)
                </label>
                <Field
                  name="skills"
                  type="text"
                  style={inputStyles}
                  placeholder="Your skills..."
                />
                <ErrorMessage name="skills" component="div" style={{
                  color: "#d32f2f",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem"
                }} />
              </div>

              {/* Motivation */}
              <div style={fieldContainerStyles}>
                <label htmlFor="motivation" style={labelStyles}>
                  Why do you want to join us?
                </label>
                <Field
                  as="textarea"
                  name="motivation"
                  style={{
                    ...inputStyles,
                    minHeight: "100px"
                  }}
                  placeholder="Tell us more..."
                />
                <ErrorMessage name="motivation" component="div" style={{
                  color: "#d32f2f",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem"
                }} />
              </div>

              {/* Privacy Policy */}
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem"
              }}>
                <Field
                  name="privacyPolicy"
                  type="checkbox"
                  style={{
                    marginRight: "0.5rem",
                    width: isMobile ? "0.9rem" : "1rem",
                    height: isMobile ? "0.9rem" : "1rem"
                  }}
                />
                <label htmlFor="privacyPolicy" style={{
                  color: "#444",
                  fontSize: isMobile ? "0.85rem" : "0.95rem"
                }}>
                  I agree to the privacy policy and terms of service
                </label>
              </div>
              <ErrorMessage name="privacyPolicy" component="div" style={{
                color: "#d32f2f",
                fontSize: "0.75rem",
                marginTop: "-1rem",
                marginBottom: "1rem"
              }} />

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  backgroundColor: "#4a148c",
                  color: "white",
                  padding: isMobile ? "0.65rem" : "0.75rem 1.5rem",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  width: "100%",
                  transition: "background-color 0.3s"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#3d0d6e"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#4a148c"}
              >
                Submit Application
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default JoinUs;