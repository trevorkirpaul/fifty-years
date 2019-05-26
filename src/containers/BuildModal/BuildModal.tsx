import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import uuid from "uuid/v4";

import * as GameActions from "@redux/actions/Game";
import * as TileActions from "@redux/actions/Tile";
import { storeState } from "@redux/reducers";
import { gameReducerTypes } from "@redux/reducers/Game";

import { game as gameSelector } from "@redux/selectors";
import Button from "components/Button";
import Modal from "components/Modal";
import Select from "components/Select";

import { filterOptionsBasedOnCost } from "./helpers";
import { Wrapper } from "./styles";

const options = [
  {
    value: "barracks",
    label: "barracks",
    goldCost: 50,
    foodCost: 25,
    woodCost: 25,
  },
  {
    value: "house",
    label: "house",
    goldCost: 50,
    foodCost: 25,
    woodCost: 25,
  },
  {
    value: "field",
    label: "field",
    goldCost: 50,
    foodCost: 0,
    woodCost: 25,
  },
];

export interface BuildModalProps {
  buildModalOpen: boolean;
  closeModal: () => any;

  /**
   * from redux
   */
  data: {
    game: gameReducerTypes;
  };
  actions: {
    tile: {
      build: ({ type, id }: { type: string; id: string }) => any;
    };
    game: {
      addGold: (payload: number) => any;
      removeGold: (payload: number) => any;
      removeWood: (payload: number) => any;
      removeFood: (payload: number) => any;
    };
  };
  /**
   * `currentTileId` is the Tile from
   * which the modal was opened and the Tile
   * we'll be building on
   */
  currentTileId: string;
}

export interface BuildModalState {
  selectedOption: any;
}

class BuildModal extends React.Component<BuildModalProps, BuildModalState> {
  constructor(props: BuildModalProps) {
    super(props);

    this.state = {
      selectedOption: null,
    };
  }

  public handleOnChangeSelect = (option: { value: string; label: string }) => {
    return this.setState({ selectedOption: option });
  }

  public startBuild = () => {
    const {
      actions: {
        tile: { build },
        game: { removeGold, removeFood, removeWood },
      },
    } = this.props;

    if (!this.state.selectedOption) {
      return null;
    }

    // dispatch actions to build the tile, updating
    // the Tile reducer. We'll also dispatch actions
    // to deplete the necessary resources
    build({
      type: this.state.selectedOption.value,
      id: this.props.currentTileId,
    });

    removeGold(this.state.selectedOption.goldCost);
    removeWood(this.state.selectedOption.woodCost);
    removeFood(this.state.selectedOption.foodCost);

    // reset selection and close modal
    this.setState({ selectedOption: "" });
    return this.props.closeModal();
  }

  public render() {
    const {
      buildModalOpen,
      closeModal,
      data: {
        game: { gold, food, wood },
      },
    } = this.props;
    const { selectedOption } = this.state;

    /**
     * Using `filterOptionsBasedOnCost` to determine
     * which build options the player has access to
     * based on their resources
     */

    const optionsPlayerCanAfford = filterOptionsBasedOnCost({
      options,
      playerResources: { gold, food, wood },
    });

    return (
      <Modal modalIsOpen={buildModalOpen}>
        <Wrapper>
          <h1>Build</h1>
          <p>This is a modal used when building on an empty tile</p>
          <p>gold: {gold}</p>
          <p>food: {food}</p>
          <p>wood: {wood}</p>

          <Select
            options={optionsPlayerCanAfford}
            value={selectedOption}
            onChange={this.handleOnChangeSelect}
          />

          <Button onClick={closeModal} disabled={false} loading={false}>
            Cancel
          </Button>

          <Button
            onClick={this.startBuild}
            disabled={
              optionsPlayerCanAfford.length === 0 || !this.state.selectedOption
            }
            loading={false}
          >
            Start Building
          </Button>
        </Wrapper>
      </Modal>
    );
  }
}

const mapState = (state: storeState) => ({
  data: {
    game: gameSelector(state),
  },
});

const mapDispatch = (dispatch: any) => ({
  actions: {
    tile: bindActionCreators(TileActions, dispatch),
    game: bindActionCreators(GameActions, dispatch),
  },
});

export default connect(
  mapState,
  mapDispatch,
)(BuildModal);
