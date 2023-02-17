import React from "react";

import MoviesMainItem from "./components/MoviesMainItem";

import { IMoviesMain } from "types/IMoviesMain";

import './styles.scss';

interface IMoviesMainListParams {
    list: IMoviesMain[];
}

const MoviesMainList: React.FC<IMoviesMainListParams> = ({list}) => (
    <div className="moviesMainList">
        <div className="mainListWrapper">
            {list.map((movie: IMoviesMain) => (
            <MoviesMainItem key={movie.show.id} item={movie}/>
            ))}       
        </div>
    </div>
)

export default MoviesMainList;