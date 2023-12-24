import React from "react";
import Label from "../LabelText/Label";
import { InputField } from "../../component";

interface Step2Props {
  values: {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
  };
  errors: {
    streetAddress?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  };
  touched: {
    streetAddress?:boolean;
    stateArea?: boolean;
    city?: boolean;
    state?: boolean;
    zipCode?: boolean;
  };
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleBlur: React.FocusEventHandler<HTMLInputElement>;
}

const step2: React.FunctionComponent<Step2Props> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  return (
    <div id="formCard"className="flex flex-col bg-slate-900 shadow-md rounded-lg p-5">
      <h2 className="text-xl font-semibold mb-4">
        {" > "}
        we need your Address enter your Address Information
      </h2>
      <div className="mb-4 flex flex-col" id="container-account">
        <div id="field">
        <Label htmlFor="streetAddress">address </Label>
        </div>
        <InputField
          type="text"
          id="streetAddress"
          name="streetAddress"
          placeholder="enter yout street address"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.streetAddress}
          className="rounded-lg p-1"
        />
        {errors.streetAddress && touched.streetAddress && (
          <div className="text-red-500">{errors.streetAddress}</div>
        )}
      </div>

      <div className="mb-4 flex flex-col" id="container-account">
        <div id="field">
        <Label htmlFor="city">City </Label>
        </div>
        <InputField
          type="text"
          id="city"
          name="city"
          placeholder="which city do you curently live in"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.city}
          className="rounded-lg p-1"
        />
        {errors.city && touched.city && (
          <div className="text-red-500">{errors.city}</div>
        )}
      </div>

      <div className="mb-4 flex flex-col" id="container-account">
        <div id="field">
        <Label htmlFor="state">state </Label>
        </div>
        <InputField
          type="text"
          id="state"
          name="state"
          placeholder="wich state do you live"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.state}
          className="rounded-lg p-1"
        />
        {errors.state && touched.state && (
          <div className="text-red-500">{errors.state}</div>
        )}
      </div>
      <div className="mb-4 flex flex-col" id="container-account">
        <div id="field">
        <Label htmlFor="zipCode">zipcode </Label>
        </div>
        <InputField
          type="text"
          id="zipCode"
          name="zipCode"
          placeholder="what is your zipcode"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.zipCode}
          className="rounded-lg p-1"
        />
        {errors.zipCode && touched.zipCode && (
          <div className="text-red-500">{errors.zipCode}</div>
        )}
      </div>
    </div>
  );
};

export default step2;
