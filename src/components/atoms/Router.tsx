import { ReactNode, useState, useCallback, useEffect } from "react";
import RouterContext from "../../contexts/RouterContext";

interface RouterProps {
  children: ReactNode;
}

export default function Router({ children }: RouterProps) {
  const [path, setPath] = useState(window.location.pathname);

  const changePath = useCallback((path: string) => {
    window.history.pushState({ path }, "", path);
    setPath(path);
  }, []);

  useEffect(() => {
    const popStateHandler = (event: PopStateEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setPath(event.state.path);
    };

    window.addEventListener("popstate", popStateHandler);
    return () => window.removeEventListener("popstate", popStateHandler);
  }, []);

  return (
    <RouterContext.Provider value={{ path, changePath }}>
      {children}
    </RouterContext.Provider>
  );
}
