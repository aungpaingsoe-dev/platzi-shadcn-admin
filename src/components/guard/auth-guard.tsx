import React, { useEffect } from "react";
import useCookieStorage from "@/hooks/useCookieStorage";
import { useDispatch } from "react-redux";
import { removeUserInfo, saveUserInfo } from "@/store/slice/auth";
import { useLocation, useNavigate } from "react-router";
import useNetworkDetect from "@/hooks/useNetworkDetect";
import { NetworkError } from "@/components";

interface Props {
  children: React.ReactNode;
}

const AuthGuardComponent: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getData } = useCookieStorage();
  const { isOnline } = useNetworkDetect();
  const isAuth = getData("token") && getData("user") ? true : false;

  // Checking Authentication
  const checkAuth = () => {
    if (!isAuth) {
      navigate("/auth/sign-in");
      dispatch(removeUserInfo());
    } else {
      dispatch(
        saveUserInfo({ user: getData("user"), token: getData("token") })
      );
      // Redirect Back Home is Auth Layout
      if (
        location.pathname === "/auth/sign-in" ||
        location.pathname === "/auth/sign-up"
      ) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    checkAuth();
  },[]);

  return <div>
    {
      isOnline ? children : <NetworkError/>
    }
  </div>;
};

export default AuthGuardComponent;
