import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false
}

const UserReducer = createSlice({
    name: 'UserReducer',
    initialState,
    reducers: {
        setStatusLogin: (state, {type, payload}) => {
            state.isLogin = payload
        }
    }
});

export const { setStatusLogin } = UserReducer.actions

export default UserReducer.reducer