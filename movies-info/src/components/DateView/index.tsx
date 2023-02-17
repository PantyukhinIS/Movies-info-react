import React from "react";

import prepareDate from "utils/prepareDate";

import './styles.scss';

interface IDateViewParams {
    value: string;
}

const DataView: React.FC<IDateViewParams> = ({value}) => {
    const{year} = prepareDate(value);

    return (
        <p className="dateview">
            <span className=" year">{year}</span>
        </p>
    )
}

export default DataView;
