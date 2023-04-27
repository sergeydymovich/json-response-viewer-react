import clsx from "clsx";
import React, { ReactNode } from "react";

const ObjectValue = ({
  value,
  children,
}: {
  value: any;
  children?: ReactNode;
}) => (
  <div className="object-value">
    {children && children}
    {!children && (
      <div
        className={clsx("object-search-value", `object-value_${typeof value}`)}
      >
        {value && typeof value === "object"
          ? Array.isArray(value)
            ? "[]"
            : "{}"
          : typeof value === "string"
          ? `'${value}'`
          : `${value}`}
      </div>
    )}
  </div>
);

export default ObjectValue;
