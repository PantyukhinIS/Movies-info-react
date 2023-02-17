import { IStore } from "./types";

export const selectMovie = (state: {movieReducer: IStore}): IStore['list'] => state.movieReducer.list;