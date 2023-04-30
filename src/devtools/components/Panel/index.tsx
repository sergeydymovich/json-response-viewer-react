import React from "react";
import { usePanel } from "../../../context/PanelContext";
import { useRequests } from "../../../context/RequestsContext";
import { CrossedOutCircle } from "../../icons";
import { Checkbox, Input } from "../../ui";
import { useSettings } from "../../../context/SettingsContext";
import clsx from "clsx";

const Panel = () => {
  const {
    search,
    setSearch,
    clearSearch,
    filter,
    setFilter,
    clearFilter,
    isExpandRequests,
    setIsExpandRequests,
    isPreserveLog,
    setIsPreserveLog,
  } = usePanel();

  const { clearRequests } = useRequests();

  const {
    settings: { theme },
  } = useSettings();

  return (
    <div className={clsx("panel", { "panel-dark": theme === "dark" })}>
      <div className="left-column">
        <button className="clear-list-button" onClick={clearRequests}>
          <CrossedOutCircle className="crossed-circle-icon" />
        </button>
        <Input
          placeholder="filter"
          value={filter}
          onChange={setFilter}
          onCrossClick={clearFilter}
        />
        <Checkbox
          value={isPreserveLog}
          onChange={setIsPreserveLog}
          label="Preserve log"
        />
      </div>
      <div className="right-column">
        <Checkbox
          value={isExpandRequests}
          onChange={setIsExpandRequests}
          label="Expand"
        />
        <Input
          placeholder="search"
          value={search}
          onChange={setSearch}
          onCrossClick={clearSearch}
        />
        <button className="clear-list-button" onClick={null}>
          SETTINGS BTN
        </button>
      </div>
    </div>
  );
};

export default Panel;
