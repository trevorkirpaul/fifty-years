import * as React from "react";

import Button from "../Button";

import BarracksTile from "./BarracksTile";
import FieldTile from "./FieldTile";
import HouseTile from "./HouseTile";

import { Text, Wrapper } from "./styles";

import { TileProps } from "./types";

const EmptyTile = ({ type, handleOpenBuildModal }: TileProps) => (
  <Wrapper>
    <Text>{type}</Text>
    <Button onClick={handleOpenBuildModal} disabled={false} loading={false}>
      Build
    </Button>
  </Wrapper>
);

const Tile = ({
  type,
  handleOpenBuildModal,
  id,
  gold,
  food,
  wood,
}: TileProps) => {
  switch (type) {
    case "barracks":
      return (
        <BarracksTile
          id={id}
          type={type}
          handleOpenBuildModal={handleOpenBuildModal}
          gold={gold}
          food={food}
          wood={wood}
        />
      );

    case "house":
      return (
        <HouseTile
          id={id}
          type={type}
          handleOpenBuildModal={handleOpenBuildModal}
          gold={gold}
          food={food}
          wood={wood}
        />
      );

    case "field":
      return (
        <FieldTile
          id={id}
          type={type}
          handleOpenBuildModal={handleOpenBuildModal}
          gold={gold}
          food={food}
          wood={wood}
        />
      );

    default:
      return (
        <EmptyTile
          id={id}
          type={type}
          handleOpenBuildModal={handleOpenBuildModal}
          gold={gold}
          food={food}
          wood={wood}
        />
      );
  }
};

export default Tile;
