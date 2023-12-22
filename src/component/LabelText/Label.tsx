// label component
import React, { LabelHTMLAttributes } from "react";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = ({ children, ...props }: Props) => {
  return <label {...props}>{children}</label>;
};

export default Label;
