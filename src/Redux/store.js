import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage  from "redux-persist/lib/storage"
import ScoreReducer from "./ScoreSlice"

const PersistConfig = {
    key: 'root',
    storage,
    version:1
}
const rootReducer = combineReducers({
    ScoreReducer,
})
const PersistReducer =persistReducer(PersistConfig,rootReducer)

export const store =configureStore({
    reducer:PersistReducer,
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    })
})