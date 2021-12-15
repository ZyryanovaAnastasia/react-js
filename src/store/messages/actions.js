import { SEND_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE } from "./types";

export const sendMessage = (message, chatId) => ({
  type: SEND_MESSAGE,
  payload: { message, chatId },
});

export const deleteMessage = (messageId, chatId) => ({
  type: DELETE_MESSAGE,
  payload: { messageId, chatId },
});

export const editMessage = (messageId, chatId, newText) => ({
  type: EDIT_MESSAGE,
  payload: { messageId, chatId, newText },
});
