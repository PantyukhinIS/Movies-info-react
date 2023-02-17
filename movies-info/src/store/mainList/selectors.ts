import { IStore } from "./types";

export const selectListMain = (state: {moviesMainReducer: IStore}): IStore['list'] => state.moviesMainReducer.list;