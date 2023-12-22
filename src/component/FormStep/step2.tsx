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
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        {" "}
        we need your Adress enter your Adress Information
      </h2>
      <div className="mb-4" id="container-account">
        <Label htmlFor="streetAddress">Street Address </Label>
        <InputField
          id="streetAddress"
          name="StreetAddress"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.streetAddress}
        />
        {errors.streetAddress && touched.streetAddress && (
          <div className="text-red-500">{errors.streetAddress}</div>
        )}
      </div>

      <div className="mb-4" id="container-account">
        <Label htmlFor="city">City </Label>
        <InputField
          type="city"
          id="city"
          name="city"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.city}
        />
        {errors.city && touched.city && (
          <div className="text-red-500">{errors.city}</div>
        )}
      </div>

      <div className="mb-4" id="container-account">
        <Label htmlFor="state">state </Label>
        <InputField
          type="text"
          id="state"
          name="state"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.state}
        />
        {errors.state && touched.state && (
          <div className="text-red-500">{errors.state}</div>
        )}
      </div>
      <div className="mb-4" id="container-account">
        <Label htmlFor="zipCode">zipcode </Label>
        <InputField
          type="text"
          id="zipCode"
          name="zipCode"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.zipCode}
        />
        {errors.zipCode && touched.zipCode && (
          <div className="text-red-500">{errors.zipCode}</div>
        )}
      </div>
    </div>
  );
};

export default step2;
