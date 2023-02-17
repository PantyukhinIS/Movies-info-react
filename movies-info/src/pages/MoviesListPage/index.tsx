import React, {useEffect} from "react";

import routeMain from "./routes";

import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "store/moviesList/actions";
import { selectList } from "store/moviesList/selectors";

import MoviesList from "components/MoviesList";

import './styles.scss';

const MoviesListPage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const moviesList = useSelector(selectList);

    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch])

    return (
        <section className="moviesListPage">
            <div className="titleCategory">
                Selected category:
                <span className="category">Animals</span>
            </div>
            {moviesList.length > 0 && <MoviesList list={moviesList.slice(0,20)} />}
        </section>
    )
}

export {routeMain};

export default MoviesListPage;