import { ActionType } from "../../action/Action-types";

const initialState = {
  movies: [
    {name:'thuyatun'},
    {job:'developer'}
  ],
  movie: {
    name:'mg mg'
  },
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_MOVIES:
      return { ...initialState, movies: payload };

    case ActionType.SELECT_MOVIE:
      return { ...initialState, movie: payload };

    default:
      return state;
  }
};
