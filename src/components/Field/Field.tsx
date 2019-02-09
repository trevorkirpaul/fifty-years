import React from "react";

import { Input } from "./styles";
import { FieldProps } from "./types";

const Field = (props: FieldProps) => {
  return <Input {...props} />;
};

export default Field;
