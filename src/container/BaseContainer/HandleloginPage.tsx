import React from "react";
import { Input } from "@/components/ui/input";
import { Formik, Form,  } from "formik";
import { useNavigate } from "react-router-dom";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Label from "@/component/LabelText/Label";


interface LoginProps {
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

const LoginPage: React.FC<LoginProps> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  const navigate = useNavigate();
  return (
    <Card className="my-20 w-[800px] h-[400px]">
    <CardHeader>
      <CardTitle>Log In</CardTitle>
      <CardDescription>Log In to view our product</CardDescription>
    </CardHeader>
    <CardContent>
        <div className="grid w-full items-center gap-4">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => {
            // Handle login logic (e.g., API call)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid w-full items-center gap-4">
              <div className="flex space-x-4" id="container-account">
                <div id="field">
                  <Label htmlFor="username">Email</Label>
                </div>
                <Input
                  type="username"
                  id="username"
                  name="username"
                  placeholder="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  className="rounded-lg p-1"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500">{errors.password}</div>
                )}
              </div>

              <div className="mb-4 flex space-x-4" id="container-account">
                <div id="field">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="rounded-lg p-1"
                  placeholder="enter a Password"
                />
                {errors.username && touched.username && (
                  <div className="text-red-500">{errors.username}</div>
                )}
              </div>
              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
              <h1 className="text-center"> OR </h1>
              <Button variant="outline" type="submit" onClick={()=> navigate('/signup')}>
                Sign Up
              </Button>
              </div>
            </Form>
          )}
        </Formik>
        </div>
    </CardContent>
  </Card>
  );
};

export default LoginPage;

