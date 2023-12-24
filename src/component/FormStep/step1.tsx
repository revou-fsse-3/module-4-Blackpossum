import React from "react";
import Label from "../LabelText/Label";
import { InputField } from "../../component";

interface Step1Props {
  values: {
    fullName:string;
    email:string;
    dob:string;
  };
  errors: {
    fullName?: string;
    email?: string;
    dob?: string;
  };
  touched: {
    fullName?: boolean;
    email?: boolean;
    dob?: boolean;
  };
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleBlur: React.FocusEventHandler<HTMLInputElement>;
}

const step1: React.FunctionComponent<Step1Props> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  return (

    <div id="formCard" className="flex flex-col bg-violet-800 shadow-md rounded-lg p-5">
      <h2 className="text-xl font-semibold mb-4">
        {" > "}
        please enter your personal Identification
      </h2>
      <div className="mb-4 flex  flex-col" id="container-account">
        <div id="field">
        <Label htmlFor="fullName">Full name  </Label>
        </div>
        <InputField
          id="fullName"
          name="fullName"
          placeholder="write your full name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          className="rounded-lg p-1"
        />
        {errors.fullName && touched.fullName && (
          <div className="text-red-500">{errors.fullName}</div>
        )}
      </div>

      <div className="mb-4 flex flex-col" id="container-account">
        <div id="field">
        <Label htmlFor="email">Email Address  </Label>
        </div>
        <InputField
          type="text"
          id="email"
          name="email"
          placeholder="enter your Email address"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className="rounded-lg p-1"
        />
        {errors.email && touched.email && (
          <div className="text-red-500">{errors.email}</div>
        )}
      </div>

      <div className="mb-4 flex flex-col" id="container-account">
        <div id="field">
        <Label htmlFor="dob">Date of Birth  </Label>
        </div>
        <InputField
          type="text"
          id="dob"
          name="dob"
          placeholder="DD / MM / YYYY"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.dob}
          className=" text-center rounded-lg p-1"
        />
        {errors.dob && touched.dob && (
          <div className="text-red-500">{errors.dob}</div>
        )}
      </div>
    </div>
  );
};

export default step1;
