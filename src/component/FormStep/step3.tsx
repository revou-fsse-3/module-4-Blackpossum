import React from "react";
import Label from "../LabelText/Label";
import { InputField } from "../../component";

interface Step3Props {
  values: {
    username: string;
    password: string;
  };
  errors: {
    username?: string;
    password?: string;
  };
  touched: {
    username?: boolean;
    password?: boolean;
  };
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleBlur: React.FocusEventHandler<HTMLInputElement>;
}

const step3: React.FunctionComponent<Step3Props> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        {" "}
        Setup your Account Information
      </h2>
      <div className="mb-4" id="container-account">
        <Label htmlFor="fullname">username:</Label>
        <InputField
          id="username"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          className=""
        />
        {errors.username && touched.username && (
          <div className="text-red-500">{errors.username}</div>
        )}
      </div>

      <div className="mb-4" id="container-account">
        <Label htmlFor="password">password:</Label>
        <InputField
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && (
          <div className="text-red-500">{errors.password}</div>
        )}
      </div>
    </div>
  );
};

export default step3;
