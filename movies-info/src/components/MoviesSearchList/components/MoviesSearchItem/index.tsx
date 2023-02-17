import React from "react";

import { NavLink } from "react-router-dom";

import {routeMain as routeMovieDetail} from 'pages/MovieDetail';

import { IMoviesMain } from "types/IMoviesMain";

import NoImage from 'assets/img/noimage.png';

import './styles.scss';

interface IMoviesSearchItemParams {
    item: IMoviesMain;
}

const MoviesSearchItem: React.FC<IMoviesSearchItemParams> = ({item}) => {
    return (
    <NavLink className="moviesItem" to={routeMovieDetail(item.show.id.toString())}>
        <div className="itemWrapper">
            <div className="image">
                <img src={item.show.image != null ? item.show.image.medium : NoImage} alt="Movie" />
            </div>
            <div className="text">
                <p className="name">
                    {item.show.name}
                </p>
                <p className="category">
                    {item.show.genres.join(', ')}
                </p>
            </div>
        </div>
    </NavLink>
    )
}

export default MoviesSearchItem;