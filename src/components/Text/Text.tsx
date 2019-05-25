import React from "react";
import * as S from "./styles";

export interface TextProps {
  children: React.ReactNode;
}
const Text = ({ children }: TextProps) => {
  return <S.Text>{children}</S.Text>;
};
export default Text;
