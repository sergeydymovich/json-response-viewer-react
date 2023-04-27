import React from "react";
import { isEmptyObj } from "../../../utils/object.utils";
import clsx from "clsx";

const ObjectProperty = ({ object: { key, value } }) => {
  const isNotEmptyObj =
    value && typeof value === "object" && !isEmptyObj(value);

  return (
    <div
      className={clsx("object-property flex items-start text-base", {
        "object-property-expandable pl-4": isNotEmptyObj,
      })}
    >
      <div
        className="object-key flex pl-5"
        onClick={() => console.log("key click")}
      >
        {key}
        {isNotEmptyObj && (
          <div className="custom-object-value ml-1 text-sm">
            {Array.isArray(value)
              ? `Arr(${value.length})`
              : `Obj(${Object.keys(value).length})`}
          </div>
        )}
      </div>
      <div className="object-value">
        {(() => {
          const objValue =
            value && typeof value === "object"
              ? Array.isArray(value)
                ? "[]"
                : "{}"
              : typeof value === "string"
              ? `'${value}'`
              : `${value}`;

          const valueType = typeof value;

          return (
            <div
              className={clsx(
                "object-search-value",
                `object-value_${typeof value}`
              )}
            >
              {objValue}
            </div>
          );
        })()}
      </div>
    </div>
  );
};

const ShowObject = ({ object }) => {
  console.log("PARSED OBJ", object);
  return (
    <div className="relative pr-5 border-l">
      {Object.entries(object).map(([key, value]) =>
        value && typeof value === "object" ? (
          <ShowObject object={value} />
        ) : (
          <ObjectProperty key={key} object={{ key, value }} />
        )
      )}
    </div>
  );
};

const JSXObject = ({ request }) => {
  return <ShowObject object={request} />;
};

export default JSXObject;
