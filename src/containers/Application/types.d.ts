import {
  gameReducerTypes,
  playerReducerTypes,
} from "../../@redux/reducers/types";
interface AppState {
  /**
   * `boolean` which will determine
   * whether or not the modal used when
   * building on an empty Tile is open
   */
  buildModalOpen: boolean;
  /**
   * When the modal is opened, `currentTileId`
   * will refer to the Tile from which the BuildModal was
   * opened
   */
  currentTileId: string;
}

interface AppProps {
  data: {
    player: playerReducerTypes;
    game: gameReducerTypes;
  };
}

export { AppState, AppProps };
