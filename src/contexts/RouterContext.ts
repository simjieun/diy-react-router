import { createContext } from "react";

type Router = {
  path: string;
  changePath: (path: string) => void;
};

const RouterContext = createContext<Router>({
  path: "/",
  changePath: () => null,
});

export default RouterContext;
