import { useContext } from "react";
import RouterContext from "../../contexts/RouterContext";

interface RouteProps {
  path: string;
  component: JSX.Element;
}

const Route = ({ path, component }: RouteProps) => {
  const { path: currentPath } = useContext(RouterContext);

  if (path === currentPath) {
    return component;
  } else {
    return null;
  }
};

export default Route;
