import * as React from "react";

import Button from "../Button";

import { Text, Wrapper } from "./styles";
import { TileProps } from "./types";

const Tile = ({ type, handleBuild }: TileProps) => (
  <Wrapper>
    <Text>{type}</Text>
    <Button onClick={handleBuild} disabled={false} loading={false}>
      Build
    </Button>
  </Wrapper>
);

export default Tile;
