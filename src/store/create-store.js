import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";

export const store = createStore(combineReducers({ profile: profileReducer }));
