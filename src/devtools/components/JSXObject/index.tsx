import React, { ReactNode } from "react";
import { isEmptyObj } from "../../../utils/object.utils";
import clsx from "clsx";

const ObjectProperty = ({
  object: { key, value },
  children,
}: {
  object: any;
  children?: ReactNode;
}) => {
  const isNotEmptyObj =
    value && typeof value === "object" && !isEmptyObj(value);

  return (
    <div
      className={clsx("object-property", {
        "object-property-expandable object-property-expandable_open":
          isNotEmptyObj,
      })}
    >
      <div
        className="object-key items-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="object-search-value">{key}</div>
        {isNotEmptyObj && (
          <div className="custom-object-value">
            {Array.isArray(value)
              ? `Arr(${value.length})`
              : `Obj(${Object.keys(value).length})`}
          </div>
        )}
      </div>
      <div className="object-value">
        {children && children}
        {!children && (
          <div
            className={clsx(
              "object-search-value",
              `object-value_${typeof value}`
            )}
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
    </div>
  );
};

const ShowObject = ({ object }) => (
  <div className="object-container">
    {Object.entries(object).map(([key, value]) => (
      <ObjectProperty key={key} object={{ key, value }}>
        {value && typeof value === "object" && <ShowObject object={value} />}
      </ObjectProperty>
    ))}
  </div>
);

const JSXObject = ({ request }) => {
  console.log("ININTIAL OBJ", request);

  return <ShowObject object={request} />;
};

export default JSXObject;
