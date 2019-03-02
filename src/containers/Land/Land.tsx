import React from "react";
import { connect } from "react-redux";

import { storeState } from "../../@redux/reducers/types";
import {
  game as gameSelector,
  tile as tileSelector,
} from "../../@redux/selectors";
import Tile from "../../components/Tile";

import { Wrapper } from "./styles";
import { landProps, landState } from "./types";

class Land extends React.Component<landProps, landState> {
  public render() {
    const {
      data: { TILE, GAME },
      handleOpenBuildModal,
    } = this.props;
    return (
      <Wrapper tiles={TILE.tiles}>
        {TILE.tiles.map((t: { id: string; type: string }) => {
          return (
            <Tile
              key={t.id}
              id={t.id}
              type={t.type}
              handleOpenBuildModal={handleOpenBuildModal}
              gold={GAME.gold}
              food={GAME.food}
              wood={GAME.wood}
            />
          );
        })}
      </Wrapper>
    );
  }
}

const mapState = (state: storeState) => ({
  data: {
    TILE: tileSelector(state),
    GAME: gameSelector(state),
  },
});

export default connect(mapState)(Land);
