import { INCREMENT, DECREMENT } from "../action/ActionType";

const initialState = {
  count: 0,
};

type Action = { type: string };

const CounterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default CounterReducer;
