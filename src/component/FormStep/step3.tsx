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
    <div id="formCard" className="flex flex-col bg-slate-900 shadow-md rounded-lg p-5">
      <h2 className="text-xl font-semibold mb-4">
        {" > "}
        Setup your Account Information
      </h2>
      <div className="mb-4 flex space-x-4" id="container-account">
        <div id="field">
        <Label htmlFor="fullname">username</Label>
        </div>
        <InputField
          id="username"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          className="rounded-lg p-1"
          placeholder="enter a Username"
        />
        {errors.username && touched.username && (
          <div className="text-red-500">{errors.username}</div>
        )}
      </div>

      <div className="flex space-x-4" id="container-account">
        <div id="field">
        <Label htmlFor="password">password</Label>
        </div>
        <InputField
          type="password"
          id="password"
          name="password"
          placeholder="enter a password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className="rounded-lg p-1"
        />
        {errors.password && touched.password && (
          <div className="text-red-500">{errors.password}</div>
        )}
      </div>
    </div>
  );
};

export default step3;
