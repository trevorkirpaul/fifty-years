const NAME: string = "TILE";

/**
 * This action will start the game
 * and add the starting empty tiles
 * to the tile reducer
 *
 * @NOTE possible deprecated. Player will
 * start with one tile and will have to buy
 * new empty tiles to build on
 */
const CREATE_GAME: string = `@@${NAME}/CREATE_GAME`;

const BUILD = `@@${NAME}/BUILD`;

const TILE_TYPES = {
  BARRACKS: "BARRACKS",
  HOUSE: "HOUSE",
  FIELD: "FIELD",
};

export { NAME, CREATE_GAME, BUILD, TILE_TYPES };
