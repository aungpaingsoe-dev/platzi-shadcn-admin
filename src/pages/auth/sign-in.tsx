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
import { ReloadIcon } from "@radix-ui/react-icons";
import { Formik, Form, ErrorMessage } from "formik";
import { SignInType } from "@/types";
import { signInSchema } from "@/services/schemas";
import { useSignInMutation } from "@/store/api/v1/endpoints/auth";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "@/store/slice/auth";
import { InputPassword } from "@/components";

const SignIn: React.FC = () => {
  const [signIn, data] = useSignInMutation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const dispatch = useDispatch();

  const initialValues: SignInType = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: SignInType, action: any) => {
    await signIn(values);
    action.resetForm();
  };

  useEffect(() => {
    const isSuccess = data?.data?.success;
    if (isSuccess) {
      dispatch(
        saveUserInfo({
          user: data?.data?.user,
          token: data?.data?.token,
        })
      );
      navigate("/");
    }
    // Toast
    if (data?.data) {
      toast({
        variant: `${isSuccess ? "default" : "destructive"}`,
        title: `${isSuccess ? "Success" : "Error"}`,
        description: `${data?.data?.message}`,
      });
    }
  }, [data]);

  return (
    <div className=" w-3/5 mx-auto h-screen flex justify-center items-center">
      <Card className=" basis-2/4 ">
        <CardHeader className=" w-full flex flex-row justify-between items-center ">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            <Link to="/auth/sign-up">I don't have an account</Link>
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
                    placeholder="Enter your email address"
                  />
                  <ErrorMessage
                    name="email"
                    component={"div"}
                    className=" text-sm text-danger "
                  />
                </div>

                <div className=" flex flex-col gap-2 ">
                  <Label htmlFor="password">Password</Label>
                  <InputPassword
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
                    className=" text-sm text-danger"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className=" w-full "
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

export default SignIn;
