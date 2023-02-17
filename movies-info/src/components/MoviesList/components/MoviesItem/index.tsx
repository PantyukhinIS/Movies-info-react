import React from "react";

import { NavLink } from "react-router-dom";

import {routeMain as routeMovieDetail} from 'pages/MovieDetail';

import  {IMoviesList}  from "types/IMoviesList";

import NoImage from 'assets/img/noimage.png';

import './styles.scss';

interface IMoviesItemParams {
    item: IMoviesList;
}

const MoviesItem: React.FC<IMoviesItemParams> = ({item}) => {
    return (
    <NavLink className="moviesItem" to={routeMovieDetail(item.id.toString())}>
        <div className="itemWrapper">
            <div className="image">
                <img src={item.image != null ? item.image.medium : NoImage} alt="Movie" />
            </div>
            <div className="text">
                <p className="name">
                    {item.name}
                </p>
                <p className="category">
                    {item.genres.join(', ')}
                </p>
            </div>
        </div>
    </NavLink>
    )
}

export default MoviesItem;