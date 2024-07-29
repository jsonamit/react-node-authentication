import { userActionTypes } from '../../../constants/Action.type';

export const setUser = (user) => {
    return {
        type : userActionTypes.SET_USER,
        payload : user
    }
}

export const getuser = () =>{
    return {
        type : userActionTypes.GET_USER,
        payload : ''
    }
}

export const logoutUser = () =>{
    localStorage.removeItem('token');
    return {
        type : userActionTypes.LOGOUT_USER
    }
}