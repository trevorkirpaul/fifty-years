import {
  gameReducerTypes,
  tileReducerTypes,
} from "../../@redux/reducers/types";

interface landProps {
  data: {
    TILE: tileReducerTypes;
    GAME: gameReducerTypes;
  };

  handleOpenBuildModal: (id: string) => any;
}
interface landState {}

export { landProps, landState };
