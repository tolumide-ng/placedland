import { AppThunk, StoreActionPropsDefs } from "@store/modules/types";
import { axiosCall } from "@utils/helpers/axiosCall";
import {
    FETCH_LANDING_FAILURE,
    FETCH_LANDING_PENDING,
    FETCH_LANDING_SUCCESS,
} from "../actionTypes";

export const fetchLandingPending = () => ({
    type: FETCH_LANDING_PENDING,
    payload: {
        status: "pending",
        error: null,
        data: {},
    },
});

export const fetchLandingFailure = (error: string) => ({
    type: FETCH_LANDING_FAILURE,
    payload: {
        status: "failure",
        error,
        data: {},
    },
});

export const fetchLandingSuccess = (data: {}) => ({
    type: FETCH_LANDING_SUCCESS,
    payload: {
        status: "success",
        error: null,
        data,
    },
});

export const fetchLandingAction = (
    props: StoreActionPropsDefs
): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchLandingPending());
        const response = await axiosCall(props);
        dispatch(fetchLandingSuccess(response?.data));
    } catch (error) {
        dispatch(fetchLandingFailure(error?.message));
    }
};
