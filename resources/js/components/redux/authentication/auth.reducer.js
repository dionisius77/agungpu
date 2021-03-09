import AuthActionTypes from './auth.types'

const INITIAL_STATE = {
    token: '',
    role: 'auth',
    loading: false,
    error: false,
    success: '',
    account: null,
    user: null,
    status: 200
  };
  
  const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
          case AuthActionTypes.LOGIN:
            return {
              ...state,
              loading: true,
              
            }
          case AuthActionTypes.VERIFY_ACCOUNT:
          case AuthActionTypes.LOGOUT:
            return {
              ...state,
              loading: true,
              error: false,
              success: false,
              status: 200
            }
          case AuthActionTypes.LOGIN_SUCCESS:
            return {
              ...state,
              loading: false,
              token: 'action.payload.access_token',
              user: action.payload,
              success: 'login',
              status: 200,
              account: null
            }
        case AuthActionTypes.LOGIN_FAILURE:
        case AuthActionTypes.VERIFY_ACCOUNT_FAILURE:
        case AuthActionTypes.LOGOUT_FAILURE:
            return {
              ...state,
              loading: false,
              error: true,
              status: action.payload
            }
        case AuthActionTypes.VERIFY_ACCOUNT_SUCCESS:
            return {
              ...state,
              success: 'account',
              loading: false,
              error: false,
              role: 'admin',
              account: action.payload
            }
        case AuthActionTypes.LOGOUT_SUCCESS:
            return {
              ...state,
              loading: false,
              error: false,
              success: '',
              role: 'auth',
              token: '',
              user: null,
              status: 200
            }
        default: return state
    }
  };
  
  export default AuthReducer;
  