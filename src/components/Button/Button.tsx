import React from "react";

import { StyledButtonBase } from "./styles";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  return (
    <StyledButtonBase onClick={props.onClick}>
      {props.children}
    </StyledButtonBase>
  );
};

export default Button;
