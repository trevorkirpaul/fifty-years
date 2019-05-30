import React from "react";

import * as S from "./styles";

export interface HeadingProps {
  children: React.ReactNode;
  className?: any;
}
const Heading = ({ children, className }: HeadingProps) => (
  <S.Heading className={className}>{children}</S.Heading>
);

export interface SubHeadingProps {
  children: React.ReactNode;
  className?: any;
}

const SubHeading = ({ children, className }: SubHeadingProps) => (
  <S.SubHeading className={className}>{children}</S.SubHeading>
);

export { Heading as default, SubHeading };
