import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, ErrorMessage } from "formik";
import { SignUpType } from "@/types";
import { signUpSchema } from "@/services/schemas";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "@/store/api/v1/endpoints/auth";
import { ReloadIcon } from "@radix-ui/react-icons";

const SignUpPage: React.FC = () => {
  const [singUp, data] = useSignUpMutation();

  const initialValues: SignUpType = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const handleSubmit = (values: SignUpType, action: any) => {
    singUp(values);
    action.resetForm();
  };

  useEffect(() => {
    console.log(data.isError);
  }, [data]);

  return (
    <div className=" w-3/5 mx-auto h-screen flex justify-center items-center">
      <Card className=" basis-2/4 ">
        <CardHeader className=" w-full flex flex-row justify-between items-center ">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription className=" text-primary ">
            <Link to="/sign-in">I already have account</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleBlur, handleChange, isSubmitting }) => (
              <Form className=" flex flex-col gap-3 ">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component={"div"}
                    className=" text-sm text-danger "
                  />
                </div>

                <div className=" flex flex-col gap-2 ">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component={"div"}
                    className=" text-sm text-danger "
                  />
                </div>

                <div className=" flex flex-col gap-2 ">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component={"div"}
                    className=" text-sm text-danger "
                  />
                </div>

                <div className=" flex flex-col gap-2 ">
                  <Label htmlFor="password_confirmation">
                    Password Confirmation
                  </Label>
                  <Input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    value={values.password_confirmation}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your password confirmation"
                  />
                  <ErrorMessage
                    name="password_confirmation"
                    component={"div"}
                    className=" text-sm text-danger "
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className=" w-full bg-primary "
                >
                  {isSubmitting && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
