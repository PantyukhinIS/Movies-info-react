import { Dispatch } from "redux";

import getMovieById from "services/getMovieById";

import { IStore } from "./types";

export const setMovieAction = (list: IStore['list']) => {
    return {
        type: 'movie/setMovie',
        payload: list,
    }
}

export const loadMovie = (id: string) => async (dispatch: Dispatch) => {
    try{
        const response = await getMovieById(id);
        dispatch(setMovieAction(response.data))
    } catch(e) {
        console.log(e, 'Error has occurred')
    }
}