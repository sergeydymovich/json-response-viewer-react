import React, { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

// interface IObjectKey extends ButtonHTMLAttributes<HTMLButtonElement> {
//   object: any;
//   isFilledObject?: boolean;
// }

interface IObjectKey {
  object: any;
  isFilledObject?: boolean;
  onClick: () => void;
}

const ObjectKey: FC<IObjectKey> = ({
  object: { key, value },
  isFilledObject,
  onClick,
}) => (
  <div //TODO btn
    className={clsx("object-key", {
      "cursor-pointer": isFilledObject,
      "cursor-text": !isFilledObject,
    })}
    onClick={onClick}
  >
    <div className="object-search-value">{key}:</div>
    {isFilledObject && (
      <div className="custom-object-value">
        {Array.isArray(value)
          ? `Arr(${value.length})`
          : `Obj(${Object.keys(value).length})`}
      </div>
    )}
  </div>
);

export default ObjectKey;
