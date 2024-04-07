import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Formik, Form, ErrorMessage } from "formik";
import { signInSchema } from "@/services/schemas";
import { useSignInMutation } from "@/store/api/v1/endpoints/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "@/store/slice/auth";
import { InputPassword } from "@/components";
import { SiPlatzi } from "react-icons/si";
import { Plus } from "tabler-icons-react";
import { SignInType } from "@/types";

const SignIn: React.FC = () => {
  const [signIn, data] = useSignInMutation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const dispatch = useDispatch();

  const initialValues: SignInType = {
    email: "john@mail.com",
    password: "changeme",
  };

  const handleSubmit = async (values: SignInType, action: any) => {
    await signIn(values);
    data.isSuccess && action.resetForm();
  };

  useEffect(() => {
    const isSuccess = data?.isSuccess;
    if (isSuccess) {
      dispatch(
        saveUserInfo({
          token: data?.data?.access_token,
        })
      );
      navigate("/");
    }
    // Toast
    if (data?.data || data?.error) {
      toast({
        duration: 1000,
        variant: `${isSuccess ? "default" : "destructive"}`,
        title: `${isSuccess ? "Success" : "Error"}`,
        description: `${
          isSuccess ? "Login Successfully." : "Authentication Failed."
        }`,
      });
    }
  }, [data]);

  return (
    <div className=" w-screen h-screen flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center items-center">
      <div className=" lg:basis-1/2 bg-dark lg:h-full lg:flex flex-col justify-center items-center ">
        <div>
          <div className=" flex items-center gap-3 ">
            <SiPlatzi className=" text-light text-[90px] lg:text-[150px] " />
            <Plus size={70} strokeWidth={3} className=" text-light " />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className=" text-light w-[90px] h-[90px] lg:w-[150px] lg:h-[150px] "
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
            </svg>
          </div>
        </div>
        <div className=" text-light text-center mt-8 ">
          <div className=" lg:text-xl ">Shadcn UI + Platzi Api Dashboard</div>
          <div className=" lg:text-sm text-xs text-slate-500 mt-4 ">
            -- By Aung Paing Soe --
          </div>
        </div>
      </div>
      <div className=" lg:basis-1/2 ">
        <div className=" lg:w-7/12 w-screen px-4 lg:px-0 mx-auto ">
          <div className=" text-2xl mb-6 ">Sign In</div>
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
                    placeholder="John@example.com"
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
                    placeholder="****"
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
        </div>
      </div>
    </div>
  );
};

export default SignIn;
