import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { logger, timeScheduler } from "./middlewares";
import { getGistsApi } from "../api/gists";
import { gistsReducer } from "./gists";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  profile: profileReducer,
  conversations: conversationReducer,
  messages: messagesReducer,
  gits: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      timeScheduler,
      logger,
      thunk.withExtraArgument({ getGistsApi })
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
