import { useCallback, useContext } from "react";
import RouterContext from "../contexts/RouterContext";

const useRouter = () => {
  const { path, changePath } = useContext(RouterContext);

  const push = useCallback((nextPath: string) => {
    if (path === nextPath) return;
    changePath(nextPath);
  }, []);

  return { push };
};

export default useRouter;
