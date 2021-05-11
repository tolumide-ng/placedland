import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
    FETCH_LANDING_FAILURE,
    FETCH_LANDING_PENDING,
    FETCH_LANDING_SUCCESS,
} from "./actionTypes";

export interface FetchLandingStateDef {
    readonly error: string | null;
    readonly status: string;
    readonly data: object;
}

export interface FetchLandingPendingActionDef {
    type: typeof FETCH_LANDING_PENDING;
    payload: FetchLandingStateDef;
}

export interface FetchLandingFailureActionDef {
    type: typeof FETCH_LANDING_FAILURE;
    payload: FetchLandingStateDef;
}

export interface FetchLandingSuccessActionDef {
    type: typeof FETCH_LANDING_SUCCESS;
    payload: FetchLandingStateDef;
}

export type FetchLandingTypeDefs =
    | FetchLandingFailureActionDef
    | FetchLandingPendingActionDef
    | FetchLandingSuccessActionDef;
