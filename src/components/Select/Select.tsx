import React from "react";
import ReactSelect from "react-select";

import { SelectProps } from "./types";

const Select = ({ options, onChange, value }: SelectProps) => {
  return (
    <ReactSelect
      hideSelectedOptions
      options={options}
      onChange={onChange}
      value={value}
    />
  );
};

export default Select;
