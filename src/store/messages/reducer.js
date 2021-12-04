import { nanoid } from "nanoid";
import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  messages: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const getTime = () => {
        return new Date().toLocaleTimeString().slice(0, -3);
      };

      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: [
            ...(state.messages[action.payload.chatId] ?? []),
            { ...action.payload.message, time: getTime(), id: nanoid() },
          ],
        },
      };

    case DELETE_MESSAGE:

      console.log('messageId '+action.payload.messageId);
      console.log(state.messages[action.payload.chatId].filter((message) => message.author === "Сhat-bot"));
    
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: state.messages[action.payload.chatId].filter(
            ({ id }) => id !== action.payload.messageId
          ),
        },
      };
    case DELETE_CONVERSATION:
      delete state.messages[action.payload];
      return {
        ...state,
      };
    default:
      return state;
  }
};
