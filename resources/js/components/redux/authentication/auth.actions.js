import axios from "../../../axiosInstance";
import AuthActionTypes from "./auth.types";

const loginUrl = `/api/login`;
const userUrl = `/api/user`;

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: AuthActionTypes.LOGIN,
            });

            const getToken = await axios.post(loginUrl, {
                email,
                password,
            });
            const token = getToken.data.token;

            const res = await axios.post(userUrl, {}, {
                headers: token,
            });
            
            dispatch({
                type: AuthActionTypes.LOGIN_SUCCESS,
                payload: { email: res.data.email, password: res.data.password },
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
