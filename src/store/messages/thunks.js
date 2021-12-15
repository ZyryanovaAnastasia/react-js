import { handleChangeMessageValue } from "../conversations";
import { sendMessage } from "./actions";

export const sendMessageWithBot =
  (message, chatId) => async (dispatch, getState) => {
    const nameChatBot = "Сhat-bot";

    dispatch(sendMessage(message, chatId));
    dispatch(handleChangeMessageValue("", chatId));

    if (message.author !== nameChatBot) {
      setTimeout(() => {
        dispatch(
          sendMessage(
            { author: nameChatBot, text: "Ваше сообщение отправлено" },
            chatId
          )
        );
      }, 2000);
    }
  };
