import React from "react";

import { StyledButtonBase } from "./styles";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: any;
  disabled: boolean;
  loading: boolean;
}

/**
 *
 * `Button` is the default shared button component
 *
 * @children will render as the label
 *
 * @onClick will be passed to the button's onClick
 *
 * @disabled is a boolean to disable the button
 *
 * @loading is a boolean to disable the button
 */

const Button = (props: ButtonProps) => {
  return (
    <StyledButtonBase onClick={props.onClick}>
      {props.children}
    </StyledButtonBase>
  );
};

export default Button;
