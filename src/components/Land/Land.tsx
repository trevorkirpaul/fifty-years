import React from "react";

import Tile from "../Tile";

import { Wrapper } from "./styles";
import { LandProps, LandState } from "./types";

const Land = ({ tiles, handleBuild }: LandProps) => {
  return (
    <Wrapper>
      {tiles &&
        tiles.map((t: { id: string; type: string }) => {
          return (
            <Tile
              key={t.id}
              type={t.type}
              id={t.id}
              handleBuild={handleBuild}
            />
          );
        })}
    </Wrapper>
  );
};

export default Land;
