import React from "react";

import routeMain from "./routes";

import Women from 'assets/img/women.png';

import './styles.scss';

const AboutUs: React.FC = (): JSX.Element => (
    <div className="aboutUs">
        <div className="image">
            <img src={Women} alt={Women} />
        </div>
        <div className="info">
            <div className="titleText">MOVIESinfo</div>
            <p>
                There is a large selection of online movies on this site that you can
                familiarize yourself with. The task of this site is to provide
                an opportunity to decide on good films for every taste.
            </p>
        </div>
    </div>
)

export {routeMain};

export default AboutUs;