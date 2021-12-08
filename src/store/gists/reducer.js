import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR } from "./types";

const initialState = {
  gists: [],
  gistsLoading: false,
  gistsError: null,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return {
        ...state,
        gistsLoading: true,
        gistsError: null,
      };

    case GET_GISTS_SUCCESS:
      return { ...state, gistsLoading: false, gists: action.payload };

    case GET_GISTS_ERROR:
      return { ...state, gistsLoading: false, gistsError: action.payload };

    default:
      return state;
  }
};
