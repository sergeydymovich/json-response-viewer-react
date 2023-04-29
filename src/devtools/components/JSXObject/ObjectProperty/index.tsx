import React, { ReactNode, useState } from "react";
import ObjectKey from "../ObjectKey";
import ObjectValue from "../ObjectValue";
import clsx from "clsx";

const ObjectProperty = ({
  object,
  isFilledObject,
  children,
}: {
  object: any;
  isFilledObject?: boolean;
  children?: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={clsx("object-property", {
        "object-property-expandable": isFilledObject,
        "object-property-expandable_open": isOpen,
      })}
    >
      <ObjectKey
        object={object}
        isFilledObject={isFilledObject}
        onClick={isFilledObject ? toggleIsOpen : null}
      />
      <ObjectValue value={object.value}>{children}</ObjectValue>
    </div>
  );
};

export default ObjectProperty;
