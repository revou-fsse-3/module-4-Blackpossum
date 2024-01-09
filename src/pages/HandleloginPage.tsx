import { Input } from "@/components/ui/input";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Label from "@/component/LabelText/Label";

interface LoginProps {}

const validationSchema = yup.object({
  email: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const LoginPage: React.FC<LoginProps> = ({}) => {
  const navigate = useNavigate();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      const res = await axios.post(
        "https://mock-api.arikmpt.com/api/user/login",
        values
      );
      localStorage.setItem("token", res.data.data.token);
      navigate("/product-detail");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <Card className="my-20 w-[800px] h-[400px]">
      <CardHeader>
        <CardTitle>Log In</CardTitle>
        <CardDescription>Log In to view our product</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex space-x-4" id="container-account">
                    <div id="field">
                      <Label htmlFor="email">Email</Label>
                      <Field id="email" type="email" name="email" placeholder="email" />
                    </div>
                  </div>

                  <div className="mb-4 flex space-x-4" id="container-account">
                    <div id="field">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="password"
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    Login
                  </Button>
                  <h1 className="text-center"> OR </h1>
                  <Button
                    variant="outline"
                    type="submit"
                    onClick={() => navigate("/signup")}
                  >
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
