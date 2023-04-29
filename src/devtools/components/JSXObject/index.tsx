import React from "react";
import { isEmptyObj } from "../../../utils/object.utils";
import ObjectProperty from "./ObjectProperty";

const ShowObject = ({ object }) => (
  <div className="object-container">
    {Object.entries(object).map(([key, value]) => {
      const isFilledObject =
        value && typeof value === "object" && !isEmptyObj(value);

      return (
        <ObjectProperty
          key={key}
          object={{ key, value }}
          isFilledObject={isFilledObject}
        >
          {isFilledObject && <ShowObject object={value} />}
        </ObjectProperty>
      );
    })}
  </div>
);

const JSXObject = ({ request }) => {
  console.log("ININTIAL OBJ", request);

  return <ShowObject object={request} />;
};

export default JSXObject;
