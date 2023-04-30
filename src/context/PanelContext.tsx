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
};

interface IPanelContextProps {
  search: string;
  setSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  clearSearch?: () => void;
  filter: string;
  setFilter?: (e: ChangeEvent<HTMLInputElement>) => void;
  clearFilter?: () => void;
}

const PanelContext = createContext<IPanelContextProps>(initialState);
PanelContext.displayName = "PanelContext";

const PanelContextProvider = ({ children }: PropsWithChildren) => {
  const [search, setSearch] = useState(initialState.search);
  const [filter, setFilter] = useState(initialState.filter);

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

  const value = useMemo(
    () => ({
      search,
      setSearch: handleSearchChange,
      clearSearch,
      filter,
      setFilter: handleFilterChange,
      clearFilter,
    }),
    [search, handleSearchChange, clearSearch, filter, setFilter, clearFilter]
  );

  return (
    <PanelContext.Provider value={value}>{children}</PanelContext.Provider>
  );
};

export const usePanel = () => useContext(PanelContext);

export default PanelContextProvider;
