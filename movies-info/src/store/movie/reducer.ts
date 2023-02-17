import { AnyAction } from "redux";
import { IStore } from "./types";


const initialState = {
    list: null,
};

const movieReducer = (state: IStore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'movie/setMovie':
            return {...state, list: {...action.payload}}
        default:
            return state;
    }
}

export default movieReducer;