import React, {
  useContext,
  useState,
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  ChangeEvent,
} from "react";

const initialState = {
  filter: "",
  search: "",
  isPreserveLog: false,
  isExpandRequests: false,
};

interface IPanelContextProps {
  search: string;
  setSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  clearSearch?: () => void;
  filter: string;
  setFilter?: (e: ChangeEvent<HTMLInputElement>) => void;
  clearFilter?: () => void;
  isExpandRequests: boolean;
  setIsExpandRequests?: (e: ChangeEvent<HTMLInputElement>) => void;
  isPreserveLog: boolean;
  setIsPreserveLog?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PanelContext = createContext<IPanelContextProps>(initialState);
PanelContext.displayName = "PanelContext";

const PanelContextProvider = ({ children }: PropsWithChildren) => {
  const [search, setSearch] = useState(initialState.search);
  const [filter, setFilter] = useState(initialState.filter);
  const [isPreserveLog, setIsPreserveLog] = useState(
    initialState.isPreserveLog
  );
  const [isExpandRequests, setIsExpandRequests] = useState(
    initialState.isExpandRequests
  );

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearch(initialState.search);
  }, []);

  const handleFilterChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  const clearFilter = useCallback(() => {
    setFilter(initialState.filter);
  }, []);

  const handleExpandChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIsExpandRequests(e.target.checked);
  }, []);

  const handlePreserveChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIsPreserveLog(e.target.checked);
    },
    []
  );

  const value = useMemo(
    () => ({
      search,
      setSearch: handleSearchChange,
      clearSearch,
      filter,
      setFilter: handleFilterChange,
      clearFilter,
      isExpandRequests,
      setIsExpandRequests: handleExpandChange,
      isPreserveLog,
      setIsPreserveLog: handlePreserveChange,
    }),
    [
      search,
      handleSearchChange,
      clearSearch,
      filter,
      setFilter,
      clearFilter,
      isExpandRequests,
      handleExpandChange,
      isPreserveLog,
      handlePreserveChange,
    ]
  );

  return (
    <PanelContext.Provider value={value}>{children}</PanelContext.Provider>
  );
};

export const usePanel = () => useContext(PanelContext);

export default PanelContextProvider;
