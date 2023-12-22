// MultiStepForm.tsx
import React,{useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Step1 from "../../component/FormStep/step1"; // Adjust the path based on your project structure
import Step2 from "../../component/FormStep/step2"; // Assuming Step2 and Step3 have similar naming conventions
import Step3 from "../../component/FormStep/step3";

// Step 1 validation schema
const step1ValidationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  dob: Yup.date().required("Date of Birth is required"),
});

// Step 2 validation schema
const step2ValidationSchema = Yup.object({
  streetAddress: Yup.string().required("Street Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string()
    .matches(/^\d{5}$/, "Invalid Zip Code")
    .required("Zip Code is required"),
});

// Step 3 validation schema
const step3ValidationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must be at least 8 characters long and contain at least one letter and one number"
    )
    .required("Password is required"),
});

const MultiStepForm: React.FunctionComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      dob: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      ...step1ValidationSchema.fields,
      ...step2ValidationSchema.fields,
      ...step3ValidationSchema.fields,
    }),
  });

  const {
    handleSubmit,
    handleReset,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = formik;

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex bg-white shadow-md rounded-md py-5">
      {/* Step 1: Address Information */}
      {/* import similar code from step2 file tsx and error messages */}
        {currentStep === 1 && (
          <Step1
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        )}
      {/* Step 2: Address Information */}
      {/* import similar code from step2 file tsx and error messages */}

        {currentStep === 2 && (
          <Step2
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        )}
      {/* Step 3: Account Information */}
      {/* import similar code from step2 file tsx and error messages  */}
        {currentStep === 3 && (
          <Step3
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        )}
      </div>
      {/* Button navigasi dan submit*/}

      <div>
        {currentStep >1 &&(
          <button type="button" onClick={prevStep} className="mr-4"> Previous </button>
        )}
        {currentStep < 3 ?(
          <button type="button" onClick={nextStep}> Next </button>
        ):(
          <>
          <button type="button" onClick={handleReset} className="mr-4">
          Reset
          </button>
          <button type="submit" className=" bg-green-500 text-white rounded-md">Submit</button>
          </>)}
      </div>
    </form>
  );
};

export default MultiStepForm;