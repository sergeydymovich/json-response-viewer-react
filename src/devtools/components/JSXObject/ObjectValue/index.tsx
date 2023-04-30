import React, { ReactNode } from "react";
import { insertTagIntoString } from "../../../../utils/string.utils";

import clsx from "clsx";

const ObjectValue = ({
  value,
  search,
  children,
}: {
  value: any;
  search: string;
  children?: ReactNode;
}) => {
  const valueByType =
    value && typeof value === "object"
      ? Array.isArray(value)
        ? "[]"
        : "{}"
      : typeof value === "string"
      ? `'${value}'`
      : `${value}`;

  const valueToDisplay = search
    ? insertTagIntoString(valueByType, search)
    : valueByType;

  return (
    <div className="object-value">
      {children && children}
      {!children && (
        <div
          className={clsx(
            "object-search-value",
            `object-value_${typeof value}`
          )}
          dangerouslySetInnerHTML={{ __html: valueToDisplay }}
        />
      )}
    </div>
  );
};

export default ObjectValue;
