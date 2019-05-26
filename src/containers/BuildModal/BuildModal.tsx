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
import Modal from "components/Modal/_Modal";
import Select from "components/Select";
import Text from "components/Text";

import { filterOptionsBasedOnCost } from "./helpers";
import * as S from "./styles";

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
      <Modal isOpen={buildModalOpen} onClose={() => {}}>
        <S.BuildModal>
          <S.TitleSection>
            <S.Heading>Build</S.Heading>

            <Text>
              Select the type of building which will be constructed on this
              empty land.
            </Text>
          </S.TitleSection>

          {/* <p>gold: {gold}</p>
          <p>food: {food}</p>
          <p>wood: {wood}</p> */}

          <S.SelectionWrapper>
            <Select
              options={optionsPlayerCanAfford}
              value={selectedOption}
              onChange={this.handleOnChangeSelect}
            />
          </S.SelectionWrapper>

          <S.CurrentSelection>
            <S.Row>
              <Text>type:</Text>

              <Text>
                {selectedOption ? selectedOption.label : "nothing selected"}
              </Text>
            </S.Row>

            <S.Row>
              <Text>gold cost:</Text>

              <Text>
                {selectedOption ? selectedOption.goldCost : "nothing selected"}
              </Text>
            </S.Row>

            <S.Row>
              <Text>food cost:</Text>

              <Text>
                {selectedOption ? selectedOption.foodCost : "nothing selected"}
              </Text>
            </S.Row>

            <S.Row>
              <Text>wood cost:</Text>

              <Text>
                {selectedOption ? selectedOption.woodCost : "nothing selected"}
              </Text>
            </S.Row>
          </S.CurrentSelection>

          <S.ActionSection>
            <Button onClick={closeModal} disabled={false} loading={false}>
              Cancel
            </Button>

            <Button
              onClick={this.startBuild}
              disabled={
                optionsPlayerCanAfford.length === 0 ||
                !this.state.selectedOption
              }
              loading={false}
            >
              Start Building
            </Button>
          </S.ActionSection>
        </S.BuildModal>
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
