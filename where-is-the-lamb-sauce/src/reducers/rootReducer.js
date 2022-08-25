import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { combineReducers } from 'redux';

const persistConfig = {
    key: "persist",
    storage,
}

const rootReducer = combineReducers({


})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;