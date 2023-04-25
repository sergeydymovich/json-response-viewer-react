import React, {
  useContext,
  useState,
  createContext,
  PropsWithChildren,
  useEffect,
} from "react";

interface IRequestsContextProps {
  requests: Array<any>;
}

const RequestsContext = createContext<IRequestsContextProps>({
  requests: [],
});
RequestsContext.displayName = "RequestsContext";

const RequestsContextProvider = ({ children }: PropsWithChildren) => {
  const [requests, setRequests] = useState<any>([]);

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener((request) => {
      const resourceType = request._resourceType;
      if (resourceType === "xhr" || resourceType === "fetch") {
        setRequests((prev) => [...prev, request]);
      }
    });
  }, []);

  return (
    <RequestsContext.Provider value={{ requests }}>
      {children}
    </RequestsContext.Provider>
  );
};

export const useRequests = () => useContext(RequestsContext);

export default RequestsContextProvider;
