// import axios from "../../axiosInstance";
import AuthActionTypes from "./auth.types";

// const loginUrl = `/v1/login`;

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: AuthActionTypes.LOGIN,
            });

            // const res = await axios.post(loginUrl, {
            //     email,
            //     password,
            // });

            dispatch({
                type: AuthActionTypes.LOGIN_SUCCESS,
                payload: { email: email, password: password },
            });
        } catch (err) {
            dispatch({
                type: AuthActionTypes.LOGIN_FAILURE,
                payload: err && err.response && err.response.status,
            });
        }
    };
};

export const logout = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const token = state.auth.token;

        try {
            dispatch({
                type: AuthActionTypes.LOGOUT,
            });

            // await axios.delete(logoutUrl, {
            //     headers: {
            //         Authorization: "Bearer " + token,
            //     },
            // });

            dispatch({
                type: AuthActionTypes.LOGOUT_SUCCESS,
            });
        } catch (err) {
            dispatch({
                type: AuthActionTypes.LOGOUT_FAILURE,
            });
        }
    };
};
