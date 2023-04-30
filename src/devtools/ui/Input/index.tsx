import React, { FC, InputHTMLAttributes } from "react";
import { CrossIcon } from "../../icons";
import clsx from "clsx";

interface IInput extends InputHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onCrossClick: () => void;
}

export const Input: FC<IInput> = ({
  className,
  onCrossClick,
  ...inputProps
}) => (
  <label className={clsx("input-label", className)}>
    <input className="input search-input" {...inputProps}></input>
    <button className="result-clear" onClick={onCrossClick}>
      <CrossIcon className="cross-icon" />
    </button>
  </label>
);
