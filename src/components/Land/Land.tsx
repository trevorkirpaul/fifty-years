import React from "react";

import Tile from "../Tile";

import { Wrapper } from "./styles";
import { LandProps } from "./types";

const Land = ({ tiles, handleOpenBuildModal, gold, food, wood }: LandProps) => {
  return (
    <Wrapper>
      {tiles &&
        tiles.map((t: { id: string; type: string }) => {
          return (
            <Tile
              key={t.id}
              type={t.type}
              id={t.id}
              handleOpenBuildModal={() => handleOpenBuildModal(t.id)}
              gold={gold}
              food={food}
              wood={wood}
            />
          );
        })}
    </Wrapper>
  );
};

export default Land;
