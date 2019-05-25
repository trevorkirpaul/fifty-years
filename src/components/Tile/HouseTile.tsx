import * as React from "react";

import Button from "../Button";

import { HouseTileWrapper, Text } from "./styles";
import { TileProps } from "./Tile";

const HouseTile = ({ type, handleOpenBuildModal }: TileProps) => (
  <HouseTileWrapper>
    <Text>{type}</Text>
    <Button onClick={handleOpenBuildModal} disabled={false} loading={false}>
      Build
    </Button>
  </HouseTileWrapper>
);

export default HouseTile;
