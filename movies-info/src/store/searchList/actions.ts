import { Dispatch } from "redux";

import getMoviesSearch from "services/getMoviesSearch";

import { IStore } from "./types";

export const setMoviesSearchAction = (list: IStore['list']) => {
    return {
        type: 'moviesSearch/setMoviesSearch',
        payload: list,
    }
}

export const loadMoviesSearch = (value: string) => async (dispatch: Dispatch) => {
    try{
        const response = await getMoviesSearch(value);
        dispatch(setMoviesSearchAction(response.data))
    } catch(e) {
        console.log(e, 'Error has occurred')
    }
}