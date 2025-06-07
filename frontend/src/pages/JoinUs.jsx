import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const JoinUs = () => {
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

  return (
    <div style={{
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Header Section */}
      <div style={{
        textAlign: "center",
        marginBottom: "2rem",
        padding: "2rem 1.5rem",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px"
      }}>
        <h1 style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#4a148c",
          marginBottom: "0.5rem"
        }}>
          Join Our Community
        </h1>
        <p style={{
          fontSize: "1rem",
          color: "#555",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Become part of our vibrant community advocating for LGBTQ+ rights and creating positive change.
        </p>
      </div>

      {/* Form Section */}
      <div style={{
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        padding: "2rem",
        maxWidth: "900px",
        marginBottom: "2rem",
        margin: "0 auto"
      }}>
        <h2 style={{
          fontSize: "1.5rem",
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
              <div style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem"
              }}>
                <div style={{ flex: 1 }}>
                  <label htmlFor="firstName" style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                    color: "#444"
                  }}>
                    First Name
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "1rem"
                    }}
                    placeholder="Enter your first name"
                  />
                  <ErrorMessage name="firstName" component="div" style={{
                    color: "#d32f2f",
                    fontSize: "0.875rem",
                    marginTop: "0.25rem"
                  }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label htmlFor="lastName" style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                    color: "#444"
                  }}>
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "1rem"
                    }}
                    placeholder="Enter your last name"
                  />
                  <ErrorMessage name="lastName" component="div" style={{
                    color: "#d32f2f",
                    fontSize: "0.875rem",
                    marginTop: "0.25rem"
                  }} />
                </div>
              </div>

              {/* Email & Phone */}
              <div style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem"
              }}>
                <div style={{ flex: 1 }}>
                  <label htmlFor="email" style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                    color: "#444"
                  }}>
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "1rem"
                    }}
                    placeholder="your.email@example.com"
                  />
                  <ErrorMessage name="email" component="div" style={{
                    color: "#d32f2f",
                    fontSize: "0.875rem",
                    marginTop: "0.25rem"
                  }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label htmlFor="phone" style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                    color: "#444"
                  }}>
                    Phone Number (Optional)
                  </label>
                  <Field
                    name="phone"
                    type="text"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "1rem"
                    }}
                    placeholder="+254 XXX XXX XXX"
                  />
                  <ErrorMessage name="phone" component="div" style={{
                    color: "#d32f2f",
                    fontSize: "0.875rem",
                    marginTop: "0.25rem"
                  }} />
                </div>
              </div>

              {/* City */}
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="city" style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                  color: "#444"
                }}>
                  City/Town
                </label>
                <Field
                  name="city"
                  type="text"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "1rem"
                  }}
                  placeholder="Enter your city or town"
                />
                <ErrorMessage name="city" component="div" style={{
                  color: "#d32f2f",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem"
                }} />
              </div>

              {/* Involvement */}
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="involvement" style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                  color: "#444"
                }}>
                  How would you like to get involved?
                </label>
                <Field
                  as="select"
                  name="involvement"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "1rem",
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
                  fontSize: "0.875rem",
                  marginTop: "0.25rem"
                }} />
              </div>

              {/* Skills */}
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="skills" style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                  color: "#444"
                }}>
                  Skills & Expertise (Optional)
                </label>
                <Field
                  name="skills"
                  type="text"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "1rem"
                  }}
                  placeholder="Your skills..."
                />
                <ErrorMessage name="skills" component="div" style={{
                  color: "#d32f2f",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem"
                }} />
              </div>

              {/* Motivation */}
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="motivation" style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                  color: "#444"
                }}>
                  Why do you want to join us?
                </label>
                <Field
                  as="textarea"
                  name="motivation"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "1rem",
                    minHeight: "100px"
                  }}
                  placeholder="Tell us more..."
                />
                <ErrorMessage name="motivation" component="div" style={{
                  color: "#d32f2f",
                  fontSize: "0.875rem",
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
                    width: "1rem",
                    height: "1rem"
                  }}
                />
                <label htmlFor="privacyPolicy" style={{
                  color: "#444",
                  fontSize: "0.95rem"
                }}>
                  I agree to the privacy policy and terms of service
                </label>
              </div>
              <ErrorMessage name="privacyPolicy" component="div" style={{
                color: "#d32f2f",
                fontSize: "0.875rem",
                marginTop: "-1rem",
                marginBottom: "1rem"
              }} />

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  backgroundColor: "#4a148c",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "1rem",
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