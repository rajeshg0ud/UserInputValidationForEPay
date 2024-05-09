import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';


export const store=configureStore({
    name:"userData",
    reducer:{
        userSlice: userSlice
    }
})