import { SEND_MESSAGE } from "./types";

const initialState = {
  messages: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: [
            ...(state.messages[action.payload.chatId] ?? []),
            { ...action.payload.message},
          ],
        },
      };

    default:
      return state;
  }
};
