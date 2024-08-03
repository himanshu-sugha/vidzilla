import { createSlice } from '@reduxjs/toolkit'

const appSlice =createSlice({
    name:"app",
    initialState:{ isClosed:false},
    reducers:{
        toggleMenu:(state)=>{
            state.isClosed=!state.isClosed;
        }
}
});
export const {toggleMenu}=appSlice.actions;
export default appSlice.reducer;
