import actionTypes from "../actionTypes";
import { landingState as initialState } from "..";
import { FetchLandingStateDef, FetchLandingTypeDefs } from "../types";

const fetchLandingTypes = [...actionTypes];

export const fetchLandingReducer = (
    state = initialState,
    fetchLandingStateProps: FetchLandingTypeDefs
): FetchLandingStateDef => {
    return fetchLandingTypes.includes(fetchLandingStateProps.type)
        ? { ...state, ...fetchLandingStateProps.payload }
        : state;
};
