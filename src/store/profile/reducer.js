import {LOGIN, LOGOUT} from "./types";

const initialState = {
    isAuth: false,
    countMessage: 0,
  };
  
  export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN: {
        return { ...state, isAuth: true, countMessage: 10 };
      }
      case LOGOUT: {
        return {
          ...state,
          isAuth: false,
          countMessage: 0
        };
      }
      default:
        return state;
    }
  };
  