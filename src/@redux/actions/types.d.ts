interface playerActionTypes {
  type: string;
  payload: string;
}

interface gameActionTypes {
  type: string;
  payload: number;
}

interface tileActionTypes {
  type: string;
  payload?: string | number;
}

export { playerActionTypes, gameActionTypes, tileActionTypes };
