import { CREATE_CONVERSATION } from "./types";
import { DELETE_CONVERSATION } from "../types";

export const createConversation = (conversationName) => ({
  type: CREATE_CONVERSATION,
  payload: conversationName,
});

export const deleteConversation = (conversationName) => ({
  type: DELETE_CONVERSATION,
  payload: conversationName,
});
