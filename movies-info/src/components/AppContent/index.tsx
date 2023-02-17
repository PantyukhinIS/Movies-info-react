import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainPage, {routeMain as routeMainPage} from 'pages/MainPage';
import MoviesListPage, {routeMain as routeMoviesListPage} from 'pages/MoviesListPage';
import MovieDetail, {routeMain as routeMovieDetail} from 'pages/MovieDetail';
import AboutUs, {routeMain as routeAboutUs} from 'pages/AboutUs';
import SearchPage, {routeMain as routeSearchPage} from 'pages/SearchPage';

import Footer from 'components/Footer';
import Header from 'components/Header';

import './styles.scss';

const AppContent:React.FC = (): JSX.Element => {
  return (
    <div className="mainWrapper">
        <Header />
        <main>
          <Switch>
            <Route exact path={routeMainPage()} component={MainPage} />
            <Route exact path={routeMoviesListPage()} component={MoviesListPage} />
            <Route exact path={routeMovieDetail()} component={MovieDetail} />
            <Route exact path={routeAboutUs()} component={AboutUs} />
            <Route exact path={routeSearchPage()} component={SearchPage} />
            <Redirect
             to={{
               pathname: routeMainPage()
             }}
            />
          </Switch>
        </main>
        <Footer />
    </div>
  );
}

export default AppContent;