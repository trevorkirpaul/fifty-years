import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ADVANCE_TO_NEXT_YEAR, FOOD, GOLD, WOOD } from "@redux/constants/Game";
import { TILE_TYPES } from "@redux/constants/Tile";
import { storeState } from "@redux/reducers";

import Button from "components/Button";

import RandomEventModal from "./components/RandomEventModal";

import * as S from "./styles";

export interface ActionMenuProps {}

/**
 * **ActionMenu** is a component which houses buttons
 * that control game actions/values such as advancing
 * to the next `currentYear` or opening option menus
 */
const ActionMenu = (props: ActionMenuProps) => {
  const dispatch = useDispatch();
  const { currentYear } = useSelector((state: storeState) => state.GAME);
  const { tiles } = useSelector((state: storeState) => state.TILE);
  const [randomEventModalIsOpen, toggleRandomEventModalIsOpen] = React.useState(
    false,
  );
  const [eventTypeForModal, setEventTypeForModal] = React.useState("");

  /**
   * **advanceYear** handles all logic that should happen
   * when the player advances to the next year. This involves
   * changing the year value, handling random events, adding
   * new resources, ect
   */
  const advanceYear = () => {
    // const generatedGoldFromTheYear = 0;

    // First we'll find the number of all of the tiles
    // we have from the year. This will be used as
    // a base multiplier for generating resources
    const numberOfBarracks = tiles.filter((t) => t.type === TILE_TYPES.BARRACKS)
      .length;
    const numberOfFields = tiles.filter((t) => t.type === TILE_TYPES.FIELD)
      .length;
    const numberOfHouses = tiles.filter((t) => t.type === TILE_TYPES.HOUSE)
      .length;

    // Next, we'll figure out how much food we generated
    // and remove any food which was used

    const generatedFood = numberOfFields * 25;

    const consumedFood = numberOfBarracks * 5 + numberOfHouses * 2.5;

    const finalAmountOfFood = generatedFood - consumedFood;

    dispatch({
      type: FOOD.ADD,
      payload: finalAmountOfFood,
    });

    // random event
    const events = [
      {
        name: "FOUND_TREASURE",
        type: GOLD.ADD,
        payload: 500,
      },
      {
        name: "FOUND_ABANDONED_CAMP",
        type: WOOD.ADD,
        payload: 250,
      },
      {
        name: "HARVEST_BOON",
        type: FOOD.ADD,
        payload: 500,
      },
    ];

    const randomChoice = Math.floor(Math.random() * 10);

    if (randomChoice < events.length) {
      toggleRandomEventModalIsOpen(true);

      setEventTypeForModal(events[randomChoice].name);

      dispatch({
        type: events[randomChoice].type,
        payload: events[randomChoice].payload,
      });
    }

    return dispatch({ type: ADVANCE_TO_NEXT_YEAR });
  };

  return (
    <React.Fragment>
      <RandomEventModal
        isOpen={randomEventModalIsOpen}
        toggleRandomEventModalIsOpen={toggleRandomEventModalIsOpen}
        eventType={eventTypeForModal}
      />
      <S.ActionMenu>
        <Button onClick={() => {}}>options</Button>

        <Button onClick={() => advanceYear()}>
          Advance to year {currentYear + 1}
        </Button>
      </S.ActionMenu>
    </React.Fragment>
  );
};

export default ActionMenu;
