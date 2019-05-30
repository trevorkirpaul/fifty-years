import { BUILD } from "../constants/Tile";

export interface tileActionTypes {
  type: string;
  payload?: any;
}

/**
 * **build** is used to:
 * 1. convert an empty tile into a build tile
 * 2. updated existing tile into a new tile type
 *
 * This is all done by using the `payload.id` which
 * is an identifier for which tile we are operating on.
 *
 * @param payload { type: string, id: string}
 */
const build = (payload: { type: string; id: string }) => ({
  type: BUILD,
  payload,
});

export { build };
