import React from "react";
import { isEmptyObj } from "../../../utils/object.utils";
import ObjectProperty from "./ObjectProperty";

const ShowObject = ({ object, isShow, search }) => (
  <div className="object-container">
    {Object.entries(object).map(([key, value]) => {
      const isFilledObject =
        value && typeof value === "object" && !isEmptyObj(value);

      return (
        <ObjectProperty
          key={key}
          object={{ key, value }}
          isShow={isShow}
          isFilledObject={isFilledObject}
          search={search}
        >
          {isFilledObject && (
            <ShowObject object={value} isShow={isShow} search={search} />
          )}
        </ObjectProperty>
      );
    })}
  </div>
);

const JSXObject = ({ request, isShow, search }) => {
  console.log("ININTIAL OBJ", request);

  return <ShowObject object={request} isShow={isShow} search={search} />;
};

export default JSXObject;
