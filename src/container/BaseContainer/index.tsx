// MultiStepForm.tsx
import React,{useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Step1 from "../../component/FormStep/step1"; // Adjust the path based on your project structure
import Step2 from "../../component/FormStep/step2"; // Assuming Step2 and Step3 have similar naming conventions
import Step3 from "../../component/FormStep/step3";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps: number = 3;
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
      const storedData =localStorage.getItem('submittedData');
      const parsedData = storedData ? JSON.parse(storedData) : [];
      localStorage.setItem('submittedData',JSON.stringify([...parsedData,values]))
      alert("sign up sucessfuly, please login to acces your account")
      console.log(values);
      formik.resetForm();
      () => {navigate('/login')} ;
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
        <h1 className="pb-10 text-center font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Sign up</h1>
        <div className="flex items-center mb-4">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`flex-1 h-2 ${
              index < currentStep ? 'bg-green-500' : 'bg-gray-300'
            } mx-1 rounded-full`}
          />
        ))}
      </div>
      <div>
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

      <div className="pt-8">
        {currentStep >1 &&(
          <Button type="button" onClick={prevStep} className="mr-10 bg-indigo-800 border-4"> Previous </Button>
        )}
        {currentStep < 3 ?(
          <Button type="button" onClick={nextStep} className="mr-10 bg-indigo-800 border-4"> Next </Button>
        ):(
          <>
          <Button type="button" onClick={handleReset} className="mr-10 bg-red-800 border-2">
          Reset
          </Button>
          <Button type="submit" className="bg-yellow-500 text-black border-2 rounded-lg">Submit</Button>
          </>)}
      </div>
    </form>
  );
};

export default MultiStepForm;
