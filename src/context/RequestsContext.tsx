import React, {
  useContext,
  useState,
  createContext,
  PropsWithChildren,
  useEffect,
  useCallback,
  useMemo,
} from "react";

const initialState = {
  requests: [],
};

interface IRequestsContextProps {
  requests: Array<any>;
  clearRequests?: () => void;
}

const RequestsContext = createContext<IRequestsContextProps>(initialState);
RequestsContext.displayName = "RequestsContext";

const RequestsContextProvider = ({ children }: PropsWithChildren) => {
  const [requests, setRequests] = useState<any>([]);

  const handleResetRequests = useCallback(() => {
    setRequests(initialState.requests);
  }, []);

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener((request) => {
      const resourceType = request._resourceType;
      if (resourceType === "xhr" || resourceType === "fetch") {
        setRequests((prev) => [...prev, request]);
      }
    });
  }, []);

  const value = useMemo(
    () => ({
      requests,
      clearRequests: handleResetRequests,
    }),
    [requests, handleResetRequests]
  );

  return (
    <RequestsContext.Provider value={value}>
      {children}
    </RequestsContext.Provider>
  );
};

export const useRequests = () => useContext(RequestsContext);

export default RequestsContextProvider;
