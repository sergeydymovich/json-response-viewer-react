import React from "react";

const ObjectKey = ({
  object: { key, value },
  onClick,
  isNotEmptyObj,
}: {
  object: any;
  onClick: () => void;
  isNotEmptyObj?: boolean;
}) => (
  <button className="object-key" onClick={onClick}>
    <div className="object-search-value">{key}:</div>
    {isNotEmptyObj && (
      <div className="custom-object-value">
        {Array.isArray(value)
          ? `Arr(${value.length})`
          : `Obj(${Object.keys(value).length})`}
      </div>
    )}
  </button>
);

export default ObjectKey;
