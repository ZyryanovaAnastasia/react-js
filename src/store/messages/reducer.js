import { nanoid } from "nanoid";
import { SEND_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE } from "./types";
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
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: state.messages[action.payload.chatId].filter(
            ({ id }) => id !== action.payload.messageId
          ),
        },
      };

    case EDIT_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: state.messages[action.payload.chatId].map(
            (message) => {
              return message.id === action.payload.messageId
                ? { ...message, text: action.payload.newText }
                : message;
            }
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
