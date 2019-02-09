import * as React from "react";

import { TileProps } from "./types";

const Tile = (props: TileProps) => <div>{props.type}</div>;

export default Tile;
