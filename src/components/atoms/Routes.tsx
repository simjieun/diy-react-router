import { ReactComponentElement, ReactNode, useContext } from "react";
import RouterContext from "../../contexts/RouterContext";
import Route from "./Route";

interface RoutesProps {
  children: ReactComponentElement<typeof Route>[];
}

export default function Routes({ children }: RoutesProps) {
  const { path } = useContext(RouterContext);

  let component: ReactNode = <div>Not Found</div>;

  for (const route of children) {
    if (route.props.path === path) {
      component = route.props.component;
      break;
    }
  }

  return component;
}
