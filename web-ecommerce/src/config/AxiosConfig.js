import {useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/reducers/user/userAction';
import {store} from '../redux/index';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/app',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const logout = error.response.data.logout;
        if (logout) {
            localStorage.removeItem('token');
            store.dispatch(logoutUser());
            window.location.href = '/login';
        } 
        return Promise.reject(error);
    }
);

export default axiosInstance;