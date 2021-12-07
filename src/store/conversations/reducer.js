import { CREATE_CONVERSATION, HANDLE_CHANGE_MESSAGE_VALUE } from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  conversations: [
    { id: 1, fullName: "Работа", value: "" },
    { id: 2, fullName: "Друзья", value: "" },
    { id: 3, fullName: "Клиенты", value: "" },
  ],
};

export const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      const newConversation = {
        id: Math.floor(Math.random() * 100),
        fullName: action.payload,
        value: "",
      };
      return {
        ...state,
        conversations: [...state.conversations, newConversation],
      };

    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          ({ id }) => id !== action.payload
        ),
      };

    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        conversations: state.conversations.map((conversation) => {
          return conversation.id === +action.payload.chatId
            ? { ...conversation, value: action.payload.value }
            : conversation;
        }),
      };

    default:
      return state;
  }
};
