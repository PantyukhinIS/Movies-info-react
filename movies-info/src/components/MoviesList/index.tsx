import React from "react";

import MoviesItem from "./components/MoviesItem";

import { IMoviesList } from "types/IMoviesList";

import './styles.scss';

interface IMoviesListParams {
    list: IMoviesList[];
}

const MoviesList: React.FC<IMoviesListParams> = ({list}) => (
    <div className="moviesList">
        <div className="listWrapper">
            {list.map((movie: IMoviesList) => (
            <MoviesItem key={movie.id} item={movie}/>
            ))}
        </div>        
    </div>
)

export default MoviesList;