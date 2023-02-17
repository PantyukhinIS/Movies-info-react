import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import moviesReducer from "./moviesList/reducer";
import moviesMainReducer from "./mainList/reducer";
import movieReducer from "./movie/reducer";
import moviesSearchReducer from "./searchList/reducer";

const rootReducer = combineReducers({
    moviesReducer,
    moviesMainReducer,
    movieReducer,
    moviesSearchReducer
})

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store;