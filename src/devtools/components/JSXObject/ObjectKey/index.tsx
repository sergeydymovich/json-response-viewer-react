import React, { FC } from "react";
import { insertTagIntoString } from "../../../../utils/string.utils";

import clsx from "clsx";

interface IObjectKey {
  object: any;
  isFilledObject?: boolean;
  search: string;
  onClick: () => void;
}

const ObjectKey: FC<IObjectKey> = ({
  object: { key, value },
  isFilledObject,
  search,
  onClick,
}) => {
  const keyValue = search ? insertTagIntoString(key, search) : key;

  return (
    <div //TODO btn
      className={clsx("object-key", {
        "cursor-pointer": isFilledObject,
        "cursor-text": !isFilledObject,
      })}
      onClick={onClick}
    >
      <div
        className="object-search-value"
        dangerouslySetInnerHTML={{ __html: keyValue }}
      />
      {isFilledObject && (
        <div className="custom-object-value">
          {Array.isArray(value)
            ? `Arr(${value.length})`
            : `Obj(${Object.keys(value).length})`}
        </div>
      )}
    </div>
  );
};

export default ObjectKey;
