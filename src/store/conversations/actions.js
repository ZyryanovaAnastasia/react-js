import { CREATE_CONVERSATION, HANDLE_CHANGE_MESSAGE_VALUE } from "./types";
import { DELETE_CONVERSATION } from "../types";

export const createConversation = (conversationName) => ({
  type: CREATE_CONVERSATION,
  payload: conversationName,
});

export const deleteConversation = (conversationName) => ({
  type: DELETE_CONVERSATION,
  payload: conversationName,
});

export const handleChangeMessageValue = (value, chatId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, chatId },
});
