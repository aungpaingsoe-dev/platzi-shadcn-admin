import { ErrorComponent } from "@/components";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error : any = useRouteError();
  return (
    <div>
      <ErrorComponent />
      { error?.message }
    </div>
  );
};

export default ErrorPage;
