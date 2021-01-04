
import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist'
import userReducer from "./gameDataReducer";

import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  user: userReducer
});

const persistConfig = {
    key:'root',
    storage: storage,
    whitelist: ['user']
}

export default persistReducer(persistConfig, rootReducer)