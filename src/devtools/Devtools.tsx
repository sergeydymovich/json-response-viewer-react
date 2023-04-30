import React, { useEffect } from "react";
import ReqList from "./components/ReqList";
import Panel from "./components/Panel";
import { useSettings } from "../context/SettingsContext";

const Devtools = () => {
  const { setSettings } = useSettings();

  useEffect(() => {
    setSettings({ theme: chrome.devtools.panels.themeName });
  }, []);

  return (
    <div className="content">
      <Panel />
      <ReqList />
    </div>
  );
};

export default Devtools;
