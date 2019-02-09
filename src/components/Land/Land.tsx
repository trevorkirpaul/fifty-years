import React from "react";

import Tile from "../Tile";

import { Wrapper } from "./styles";
import { LandProps, LandState } from "./types";

const Land = ({ tiles, handleOpenBuildModal }: LandProps) => {
  return (
    <Wrapper>
      {tiles &&
        tiles.map((t: { id: string; type: string }) => {
          return (
            <Tile
              key={t.id}
              type={t.type}
              id={t.id}
              handleOpenBuildModal={handleOpenBuildModal}
            />
          );
        })}
    </Wrapper>
  );
};

export default Land;
