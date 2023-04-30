import React, { ReactNode, useEffect, useState } from "react";
import ObjectKey from "../ObjectKey";
import ObjectValue from "../ObjectValue";
import clsx from "clsx";
import { usePanel } from "../../../../context/PanelContext";

const ObjectProperty = ({
  object,
  isShow,
  isFilledObject,
  search,
  children,
}: {
  object: any;
  isShow: boolean;
  isFilledObject?: boolean;
  search: string;
  children?: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isExpandRequests } = usePanel();

  useEffect(() => {
    setIsOpen(isExpandRequests);
  }, [isExpandRequests]);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={clsx("object-property", {
        "object-property-expandable": isFilledObject,
        "object-property-expandable_open": isFilledObject && isShow && isOpen,
      })}
    >
      <ObjectKey
        object={object}
        isFilledObject={isFilledObject}
        onClick={isFilledObject ? toggleIsOpen : null}
        search={search}
      />
      <ObjectValue value={object.value} search={search}>
        {children}
      </ObjectValue>
    </div>
  );
};

export default ObjectProperty;
