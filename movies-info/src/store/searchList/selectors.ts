import { IStore } from "./types";

export const selectListSearch = (state: {moviesSearchReducer: IStore}): IStore['list'] => state.moviesSearchReducer.list;