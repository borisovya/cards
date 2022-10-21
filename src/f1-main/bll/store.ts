import {combineReducers, createStore} from "redux";
import {authReducer} from "./auth-reducer";

const reducers = combineReducers({
        auth: authReducer
})

const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>

export default store

// @ts-ignore
window.store = store