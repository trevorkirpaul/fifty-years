import React from "react";

import { StyledButtonBase } from "./styles";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  return <StyledButtonBase {...props}>{props.children}</StyledButtonBase>;
};

export default Button;
