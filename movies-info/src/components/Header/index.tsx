import React from 'react';

import { NavLink } from 'react-router-dom';

import {routeMain as routeMainPage} from 'pages/MainPage';
import {routeMain as routeMoviesListPage} from 'pages/MoviesListPage';
import {routeMain as routeAboutUs} from 'pages/AboutUs';
import {routeMain as routeSearchPage} from 'pages/SearchPage';

import Moviesinfo from 'assets/img/moviesinfo.svg';

import './styles.scss';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="mainHeader">
      <div className='logo'>
        <img src={Moviesinfo} alt={Moviesinfo} />
      </div>
      <nav>
        <NavLink to={routeMainPage()} activeClassName={'linkActive'}>
          Main
        </NavLink>
        <NavLink to={routeMoviesListPage()} activeClassName={'linkActive'}>
          Movies by category
        </NavLink>
        <NavLink to={routeAboutUs()} activeClassName={'linkActive'}>
          About us
        </NavLink>
        <NavLink to={routeSearchPage()} activeClassName={'linkActive'}>
          Search
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;