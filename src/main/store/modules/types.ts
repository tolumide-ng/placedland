import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootStateDef } from ".";
import { ForAxiosDefs, LandingStateDef } from "../../commonTypes";

export interface RootState {
    dropDownReducer: {
        display: boolean;
    };
}

export interface StoreActionPropsDefs {
    path: string;
    payload: {};
    method: ForAxiosDefs;
    params?: {};
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateDef,
    unknown,
    Action<string>
>;

export interface RootState {
    fetchLandingReducer: {
        status: string;
        error: string;
        data: LandingStateDef;
    };
}
