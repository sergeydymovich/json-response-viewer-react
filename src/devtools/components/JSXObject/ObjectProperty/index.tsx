import React, { ReactNode, useState } from "react";
import ObjectKey from "../ObjectKey";
import ObjectValue from "../ObjectValue";
import clsx from "clsx";

const ObjectProperty = ({
  object,
  isNotEmptyObj,
  children,
}: {
  object: any;
  isNotEmptyObj?: boolean;
  children?: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { key, value } = object;

  return (
    <div
      className={clsx("object-property", {
        "object-property-expandable ": isNotEmptyObj,
        "object-property-expandable_open": isOpen,
      })}
    >
      <ObjectKey
        object={object}
        isNotEmptyObj={isNotEmptyObj}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <ObjectValue value={value}>{children}</ObjectValue>
    </div>
  );
};

export default ObjectProperty;
