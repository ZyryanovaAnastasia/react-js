export const conversationsSelector = (state) =>
  state.conversations.conversations;

export const messageValueSelector = (chatId) => (state) => {
  return (
    state.conversations.conversations.find(
      (conversation) => conversation.id === +chatId
    )?.value ?? ""
  );
};
