import { SEND_MESSAGE } from "../messages/types";
import { sendMessage } from "../messages";

export const botSendMessage = (store) => (next) => (action) => {
  const nameChatBot = "Сhat-bot";

  if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author !== nameChatBot
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessage(
          { author: nameChatBot, text: "Ваше сообщение отправлено" },
          action.payload.chatId
        )
      );
    }, 2000);
  }
  return next(action);
};
