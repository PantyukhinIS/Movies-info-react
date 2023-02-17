import React from "react";

import { NavLink } from "react-router-dom";

import {routeMain as routeMovieDetail} from 'pages/MovieDetail';

import  {IMoviesMain}  from "types/IMoviesMain";

import NoImage from 'assets/img/noimage.png';

import './styles.scss';

interface IMoviesMainItemParams {
    item: IMoviesMain;
}

const MoviesMainItem: React.FC<IMoviesMainItemParams> = ({item}) => {
    return (
    <NavLink className="moviesMainItem" to={routeMovieDetail(item.show.id.toString())}>
        <div className="image">
            <img src={item.show.image != null ? item.show.image.medium : NoImage} alt="Movie" />
        </div>
        <p className="name">
            {item.show.name}
        </p>
        <p className="country">
            {item.show.network != null ? item.show.network.country.name : "Country unknown"}
        </p>
        <p className="category">
            {item.show.genres.join(', ')}
        </p>
    </NavLink>
    )
}

export default MoviesMainItem;