import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

import DataView from "components/DateView";

import { useDispatch, useSelector } from "react-redux";
import { loadMovie } from "store/movie/actions";
import { selectMovie } from "store/movie/selectors";

import { ID } from "types/ID";

import routeMain from "./routes";

import Star from 'assets/img/star.png';
import NoImage from 'assets/img/noimage.png';

import './styles.scss';

const MovieDetail: React.FC = (): JSX.Element => {
    const {id} = useParams<ID>();

    const dispatch = useDispatch();
    const movies = useSelector(selectMovie);


    useEffect(() => {
        dispatch(loadMovie(id));
    }, [dispatch, id])

    return (
        <section className="moviesDetail">
            {movies ? (
                <div className="detailWrapper">
                    <div className="image">
                        <img src={movies.image != null ? movies.image.medium : NoImage} alt="Movie" />
                    </div>
                    <div className="data">
                        <p className="name">
                            {movies.name}
                        </p>
                        <div className="dataWrapper">
                            <div className="leftPart">
                                <p>Release:</p>
                                <p>Country:</p>
                                <p>Language:</p>
                                <p>Genres:</p>
                                <p>Description:</p>
                            </div>
                            <div className="rightPart">
                                <DataView value = {movies.ended}/>
                                <p className="country" >
                                    {movies.network != null ? movies.network.country.name : "Сountry unknown"}
                                </p>
                                <p className="language">
                                    {movies.language}
                                </p>
                                <p className="category">
                                    {movies.genres.join(', ')}
                                </p>
                                <p className="summary">
                                    {movies.summary != null ? movies.summary.replace(/<\w>|<\/\w>/gm, '') : "No description"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rating">
                        <img src={Star} alt={Star} /> {movies.rating.average != null ? movies.rating.average : "0"}/10
                    </div>
                </div>
            ) : <></>}
        </section>
    )
}

export {routeMain};

export default MovieDetail;