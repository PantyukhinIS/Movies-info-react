import { Dispatch } from "redux";

import getMoviesList from "services/getMoviesList";

import { IStore } from "./types";

export const setMoviesAction = (list: IStore['list']) => {
    return {
        type: 'movies/setMovies',
        payload: list,
    }
}

export const loadMovies = () => async (dispatch: Dispatch) => {
    try{
        const response = await getMoviesList();
        dispatch(setMoviesAction(response.data))
    } catch(e) {
        console.log(e, 'Error has occurred')
    }
}