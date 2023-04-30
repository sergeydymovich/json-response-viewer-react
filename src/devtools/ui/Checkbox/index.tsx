import React, { ChangeEvent, FC } from "react";
import clsx from "clsx";

interface ICheckbox {
  className?: string;
  label: string;
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<ICheckbox> = ({
  className,
  label,
  value,
  ...checkboxProps
}) => (
  <label className={clsx("checkbox-label", className)}>
    <input type="checkbox" checked={value} {...checkboxProps} />
    <p className="checkbox-text">{label}</p>
  </label>
);
