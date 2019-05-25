import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ADVANCE_TO_NEXT_YEAR } from "@redux/constants/Game";
import { storeState } from "@redux/reducers";

import Button from "components/Button";

import * as S from "./styles";

export interface ActionMenuProps {}

/**
 * **ActionMenu** is a component which houses buttons
 * that control game actions/values such as advancing
 * to the next `currentYear` or opening option menus
 */
const ActionMenu = (props: ActionMenuProps) => {
  const { currentYear } = useSelector((state: storeState) => state.GAME);

  const dispatch = useDispatch();

  return (
    <S.ActionMenu>
      <Button onClick={() => {}}>options</Button>

      <Button onClick={() => dispatch({ type: ADVANCE_TO_NEXT_YEAR })}>
        Advance to year {currentYear + 1}
      </Button>
    </S.ActionMenu>
  );
};

export default ActionMenu;
