import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messagesReducer } from "./messages";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    conversations: conversationReducer,
    messages: messagesReducer,
  })
);
