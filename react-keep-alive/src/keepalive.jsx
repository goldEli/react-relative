import { useContext, createContext } from "react";
import { useOutlet, useLocation } from "react-router-dom";

const KeepAliveContext = createContext({});

export function KeepAliveProvider({ children, keepPaths }) {
  return (
    <KeepAliveContext.Provider value={{ keepPaths }}>
      {children}
    </KeepAliveContext.Provider>
  );
}

const elementsCache = new Map();
export function useKeepAliveOutlet() {
  const element = useOutlet();
  const { pathname } = useLocation();
  const { keepPaths } = useContext(KeepAliveContext);
  const isKeepAlive = keepPaths.includes(pathname);
  if (isKeepAlive) {
    elementsCache.set(pathname, element);
  }

  return (
    <>
      {[...elementsCache].map(([key, ele], idx) => {
        const hidden = key !== pathname;
        return (
          <div key={idx} hidden={hidden}>
            {ele}
          </div>
        );
      })}
      {!isKeepAlive && element}
    </>
  );
}
