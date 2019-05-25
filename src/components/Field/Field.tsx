import React from "react";

import { Input } from "./styles";

export interface FieldProps {
  type: string;
  value: string;
  name?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => any;
  placeholder: string;
  disabled: boolean;
}

const Field = (props: FieldProps) => {
  return <Input {...props} />;
};

export default Field;
