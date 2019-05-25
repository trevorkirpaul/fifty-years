import * as React from "react";

import Button from "../Button";

import { FieldTileWrapper, Text } from "./styles";
import { TileProps } from "./Tile";

const FieldTile = ({ type, handleOpenBuildModal }: TileProps) => (
  <FieldTileWrapper>
    <Text>{type}</Text>
    <Button onClick={handleOpenBuildModal} disabled={false} loading={false}>
      Build
    </Button>
  </FieldTileWrapper>
);

export default FieldTile;
