import { INCREMENT, DECREMENT } from "./ActionType";

export const increment = (): { type: typeof INCREMENT } => ({
  type: INCREMENT,
});

export const decrement = (): { type: typeof DECREMENT } => ({
  type: DECREMENT,
});
