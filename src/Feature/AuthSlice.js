import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: true,
    userData: null,
    toggleSide: true
}

const AuthSlice = createSlice({

    name: 'authslice',
    initialState,
    reducers: {
        login: ((state, action) => {
            state.status = true
            state.userData = action.payload.userData
        }),
        logout: ((state, action) => {
            state.status = false
            state.userData = null
        }),
        toggleSidebar: ((state, action) => {
            state.toggleSide = !state.toggleSide
        })

    }

})


export const { login, logout, toggleSidebar } = AuthSlice.actions

export default AuthSlice.reducer