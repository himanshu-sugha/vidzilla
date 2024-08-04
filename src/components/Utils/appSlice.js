import { createSlice } from '@reduxjs/toolkit'

const appSlice =createSlice({
    name:"app",
    initialState:{ isClosed:false},
    reducers:{
        toggleMenu:(state)=>{
            state.isClosed=!state.isClosed;
        },
        closeMenu:(state)=>{
            state.isClosed=true;
        }
}
});
export const {closeMenu,toggleMenu}=appSlice.actions;
export default appSlice.reducer;
