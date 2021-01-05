
import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist'
import userReducer from "./user-reducer";

import storage from 'redux-persist/lib/storage'
import tableReducer from "./table-reducer";

const rootReducer = combineReducers({
  user: userReducer,
  tables: tableReducer
});

const persistConfig = {
    key:'root',
    storage: storage,
    whitelist: ['user']
}

export default persistReducer(persistConfig, rootReducer)