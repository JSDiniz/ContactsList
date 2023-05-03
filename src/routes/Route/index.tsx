import { Redirect, Route as ReactRoute } from "react-router-dom";

import { useAuth } from "../../contexts/Auth";
import { IRouteProps } from "../../interface/Auth";

// true e true = ok
// true e false = n ok
// false e true = n ok
// false e false = ok

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: IRouteProps) => {
  const { token } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};

export default Route;
