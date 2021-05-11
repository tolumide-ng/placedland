import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";
import { fetchLandingReducer } from "./landing/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
    fetchLandingReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
