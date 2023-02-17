import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
    list: [],
};

const moviesSearchReducer = (state: IStore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'moviesSearch/setMoviesSearch':
            return {...state, list: [...action.payload]}
        default:
            return state;
    }
}

export default moviesSearchReducer;