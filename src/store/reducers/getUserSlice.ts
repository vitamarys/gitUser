import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserData } from '../../types';

interface GetUserState {
    userName: string,
    userInfo: UserData | null,
    isLoading: boolean,
    error: string,
}
const initialState: GetUserState = {
    userName: '',
    userInfo: null,
    isLoading: false,
    error: '',
}
export const getUserSlice = createSlice({
    name:'getUser',
    initialState,
    reducers:{
        getUserFetching(state, action:PayloadAction<string>) {
            state.isLoading = true;
            state.userName =  action.payload;
        },
        getUserSuccess(state, action:PayloadAction<UserData>) {
            state.isLoading = false;
            state.userInfo =  action.payload;
            state.error = ''
        },
        getUserError(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        }


    }
})

export default getUserSlice.reducer