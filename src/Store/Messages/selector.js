export const messagesSelector = (chatId) => (state) => {
    return state.messages.messages[chatId] ?? []
}
