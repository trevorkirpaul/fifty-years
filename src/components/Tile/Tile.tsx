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

const Tile = ({ type, handleOpenBuildModal, id }: TileProps) => {
  switch (type) {
    case "barracks":
      return (
        <BarracksTile
          id={id}
          type={type}
          handleOpenBuildModal={handleOpenBuildModal}
        />
      );

    case "house":
      return (
        <HouseTile
          id={id}
          type={type}
          handleOpenBuildModal={handleOpenBuildModal}
        />
      );

    case "field":
      return (
        <FieldTile
          id={id}
          type={type}
          handleOpenBuildModal={handleOpenBuildModal}
        />
      );

    default:
      return (
        <EmptyTile
          id={id}
          type={type}
          handleOpenBuildModal={handleOpenBuildModal}
        />
      );
  }
};

export default Tile;
