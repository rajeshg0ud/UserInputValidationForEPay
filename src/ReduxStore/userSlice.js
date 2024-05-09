import {createSlice} from '@reduxjs/toolkit';

const userSlice= createSlice({
    name: "userSlice",
    initialState :{
        data:{}
    },
    reducers:{
        setSubmit:(state, action)=>{
            state.data=(action.payload);
        }
    }
})


export const {setSubmit} = userSlice.actions;

export default userSlice.reducer;