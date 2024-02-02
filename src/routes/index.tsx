import Route from "./Route";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { PageNotFound } from "../pages/PageNotFound";
import { useAuth } from "../contexts/Auth";

const Routed = () => {
  const { token } = useAuth();

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route component={PageNotFound} isPrivate={!!token} />
    </Switch>
  );
};

export default Routed;
