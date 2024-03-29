import React from "react";
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
import { ReloadIcon } from "@radix-ui/react-icons";
import { Formik, Form, ErrorMessage } from "formik";
import { SignInType } from "@/types";
import { signInSchema } from "@/services/schemas";
import { useSignInMutation } from "@/store/api/v1/endpoints/auth";
import { Link } from "react-router-dom";

const SignInPage: React.FC = () => {
  const [signIn] = useSignInMutation();

  const initialValues: SignInType = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: SignInType, action: any) => {
    await signIn(values);
    action.resetForm();
  };

  return (
    <div className=" w-3/5 mx-auto h-screen flex justify-center items-center">
      <Card className=" basis-2/4 ">
        <CardHeader className=" w-full flex flex-row justify-between items-center ">
          <CardTitle>Sign In</CardTitle>
          <CardDescription className=" text-primary ">
            <Link to="/sign-up">I don't have an account</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleBlur, handleChange, isSubmitting }) => (
              <Form className=" flex flex-col gap-3 ">
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

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className=" w-full bg-primary "
                >
                  {isSubmitting && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
