import React, {
  useContext,
  useState,
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
} from "react";

const initialState = {
  settings: {
    theme: "default",
  },
  setSettings: () => null,
} as const;

interface ISettingsContextProps {
  settings: {
    theme: "default" | "dark";
  };
  setSettings: (value: Record<string, string>) => void;
}

const SettingsContext = createContext<ISettingsContextProps>(initialState);
SettingsContext.displayName = "SettingsContext";

const SettingsContextProvider = ({ children }: PropsWithChildren) => {
  const [settings, setSettings] = useState(initialState.settings);

  const handleSettingsChange = useCallback(
    (updatedSettings: Record<string, string>) => {
      setSettings((prev) => ({ ...prev, ...updatedSettings }));
    },
    []
  );

  const value = useMemo(
    () => ({
      settings,
      setSettings: handleSettingsChange,
    }),
    [settings]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);

export default SettingsContextProvider;
