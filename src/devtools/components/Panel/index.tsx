import React from "react";
import { usePanel } from "../../../context/PanelContext";
import { useRequests } from "../../../context/RequestsContext";
import { CrossedOutCircle } from "../../icons";
import { Checkbox, Input } from "../../ui";

const Panel = () => {
  const { search, setSearch, clearSearch, filter, setFilter, clearFilter } =
    usePanel();

  const { clearRequests } = useRequests();

  return (
    <div className="panel">
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
        <Checkbox label="Preserve log" />
      </div>
      <div className="right-column">
        <Checkbox label="Expand" />
        <Input
          placeholder="search"
          value={search}
          onChange={setSearch}
          onCrossClick={clearSearch}
        />
      </div>
    </div>
  );
};

export default Panel;
