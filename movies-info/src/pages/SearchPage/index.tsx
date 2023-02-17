import React, { useState } from "react";

import routeMain from "./routes";

import { useDispatch, useSelector } from "react-redux";
import { loadMoviesSearch } from "store/searchList/actions";
import { selectListSearch } from "store/searchList/selectors";

import MoviesSearchList from "components/MoviesSearchList";

import './styles.scss';

const SearchPage: React.FC = (): JSX.Element => {

    const[value, setValue] = useState<string>("");

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleClick = () => {
        dispatch(loadMoviesSearch(value));
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === "Enter") {
            handleClick();
        }
    }

    const dispatch = useDispatch();
    const moviesList = useSelector(selectListSearch);

    return (
        <section className="SearchPage">
            <div className="titleCategory">
                Search by category
            </div>
            <div className="input">
                <i className="fas fa-search fa-lg" onClick={handleClick}></i>
                <input type="search" value={value} onChange={inputChange} onKeyPress={handleKeyDown} placeholder="Example: drama" />
            </div>
            <p>Search results:</p>
            {moviesList.length > 0 ? <MoviesSearchList list={moviesList} /> :
            <div className="noResult">
                Enter a search query
                <br/> to display the results
            </div>}
        </section>        
    )
}

export {routeMain};

export default SearchPage;