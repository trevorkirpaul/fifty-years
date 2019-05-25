import { Action, AnyAction, Dispatch } from "redux";

declare module "react-redux" {
  export function useDispatch<A extends Action = AnyAction>(): Dispatch<A>;
  export function useSelector<TState, TSelected>(
    selector: (state: TState) => TSelected,
    deps?: ReadonlyArray<any>,
  ): TSelected;
  // ... other additions from the pull request
}
