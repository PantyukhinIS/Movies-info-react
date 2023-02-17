import { Dispatch } from "redux";

import getMoviesMain from "services/getMoviesMain";

import { IStore } from "./types";

export const setMoviesMainAction = (list: IStore['list']) => {
    return {
        type: 'moviesMain/setMoviesMain',
        payload: list,
    }
}

export const loadMoviesMain = () => async (dispatch: Dispatch) => {
    try{
        const response = await getMoviesMain();
        dispatch(setMoviesMainAction(response.data))
    } catch(e) {
        console.log(e, 'Error has occurred')
    }
}