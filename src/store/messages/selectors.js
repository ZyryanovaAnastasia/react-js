export const messagesSelector = (chatId) => (state) =>
  state.messages.messages[chatId] ?? [];

export const messageTextSelector = (messagesId, chatId) => (state) => {
  return (
    state.messages.messages[chatId].find((message) => message.id === messagesId)
      ?.text ?? ""
  );
};
