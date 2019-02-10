import * as React from "react";

import Button from "../Button";

import { BarracksTileWrapper, Text } from "./styles";
import { TileProps } from "./types";

const BarracksTile = ({ type, handleOpenBuildModal }: TileProps) => (
  <BarracksTileWrapper>
    <Text>{type}</Text>
    <Button onClick={handleOpenBuildModal} disabled={false} loading={false}>
      Build
    </Button>
  </BarracksTileWrapper>
);

export default BarracksTile;
