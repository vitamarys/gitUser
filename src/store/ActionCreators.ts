import { getUser } from "../actions/getUser";
import {getUserSlice} from "./reducers/getUserSlice";
import { AppDispatch } from "./store";


export const fetchUser = (id:string) => async (dispatch: AppDispatch) => {
    try{
        dispatch(getUserSlice.actions.getUserFetching(id));
        const response  = await getUser(id);        
        dispatch(getUserSlice.actions.getUserSuccess(response))
    }catch(error: any){
        dispatch(getUserSlice.actions.getUserError(error.message))
    }
    
}

