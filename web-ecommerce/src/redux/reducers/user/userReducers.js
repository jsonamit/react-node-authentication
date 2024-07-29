

import { userActionTypes } from '../../../constants/Action.type';

let initialState = {
    name: '',
    email: '',
    mobile: '',
    token: localStorage.getItem('token') || null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

export const userReducers = (state = initialState,{ type,payload }) => {
    switch(type) {
        case userActionTypes.SET_USER : 
            return {
                ...state,
                loading: false,
                error: null,
                isAuthenticated: true,
                token: payload.token,
                name: payload.name,
                email: payload.email,
                mobile: payload.mobile,
            };

        case userActionTypes.GET_USER : 
            return {...state};

        case userActionTypes.UPDATE_USER : 
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                token: payload.token,
                name: payload.name,
                email: payload.email,
                mobile: payload.mobile
            };

        case userActionTypes.LOGOUT_USER : 
            return {
                ...state,
                loading: false,
                error: null,
                isAuthenticated: false,
                token: '',
                name: '',
                email: '',
                mobile: '',
            };

        default : 
            return state
    }
}


// import { createSlice } from '@reduxjs/toolkit';

// let initialState = {
//     name: '',
//     email: '',
//     mobile: '',
//     token: localStorage.getItem('token') || null,
//     isAuthenticated: false,
//     loading: false,
//     error: null,
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         getUser: (state) =>{
//             return state;
//         },
//         setUser: (state,action) => {
//             state.loading = false;
//             state.isAuthenticated = true;
//             state.token = action.payload.token;
//             state.name = action.payload.name;
//             state.email = action.payload.email;
//             state.mobile = action.payload.mobile;
//         },
//         updateUser: (state,action) =>{
//             state.token = action.payload.token;
//             state.name = action.payload.name;
//             state.email = action.payload.email;
//             state.mobile = action.payload.mobile;
//         },
//         logout: (state) => {
//             localStorage.removeItem('token');
//             state.name = '';
//             state.email = '';
//             state.mobile = '';
//             state.token = null;
//             state.isAuthenticated = false;
//             state.loading = false;
//             state.error = null;
//         },
//     }
// });

// export const { setUser, getUser, updateUser } = userSlice.actions;
// export default userSlice.reducer;