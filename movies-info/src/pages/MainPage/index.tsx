import React, {useEffect} from "react";

import routeMain from "./routes";

import { useDispatch, useSelector } from "react-redux";
import { loadMoviesMain } from "store/mainList/actions";
import { selectListMain } from "store/mainList/selectors";

import MoviesMainList from "components/MoviesMainList";

import './styles.scss';

const MainPage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const moviesList = useSelector(selectListMain);

    useEffect(() => {
        dispatch(loadMoviesMain());
    }, [dispatch])

    return (
        <section className="mainPage">
            <div className="titleMain">MOVIESinfo</div>
            <div className="smallTitle">The most popular portal about movies</div>
            {moviesList.length > 0 && <MoviesMainList list={moviesList.slice(0,8)} />}
        </section>
    )
}

export {routeMain};

export default MainPage;