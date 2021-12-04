import { CREATE_CONVERSATION } from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  conversations: [
    { id: 1, fullName: "Работа" },
    { id: 2, fullName: "Друзья" },
    { id: 3, fullName: "Клиенты" },
  ],
};

export const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      const newConversation = {
        id: Math.floor(Math.random() * 100),
        fullName: action.payload,
      };
      return {
        ...state,
        conversations: [...state.conversations, newConversation],
      };

    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
