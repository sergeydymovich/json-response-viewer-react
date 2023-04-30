import React, { FC } from "react";
import { IconType } from "../../icons/types";
import clsx from "clsx";

interface ICheckbox {
  className?: string;
  label: string;
}

export const Checkbox: FC<ICheckbox> = ({
  className,
  label,
  ...checkboxProps
}) => (
  <label className={clsx("checkbox-label", className)}>
    <input type="checkbox" {...checkboxProps} />
    <p className="checkbox-text">{label}</p>
  </label>
);
