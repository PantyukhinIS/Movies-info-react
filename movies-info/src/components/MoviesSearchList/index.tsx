import React from "react";

import MoviesSearchItem from "./components/MoviesSearchItem";

import { IMoviesMain } from "types/IMoviesMain";

import './styles.scss';

interface IMoviesListParams {
    list: IMoviesMain[];
}

const MoviesSearchList: React.FC<IMoviesListParams> = ({list}) => (
    <div className="moviesSearchList">
        <div className="searchListWrapper">
            {list.map((movie: IMoviesMain) => (
            <MoviesSearchItem key={movie.show.id} item={movie}/>
            ))}
        </div>        
    </div>
)

export default MoviesSearchList;