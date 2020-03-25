import React from 'react';

import './RepView.css';

const repView = (props) => {
    return (
        <div className="RepView">
            <p>Week {props.week}</p>
            <p>Day {props.day}</p>
            <ul>{props.set1} @ {props.maxSquat * props.percent1}</ul>
            <ul>{props.set2} @ {props.maxSquat * props.percent2}</ul>
            <ul>{props.set3} @ {props.maxSquat * props.percent3}</ul>
            <ul>{props.set4} @ {props.maxSquat * props.percent4}</ul>
            {props.percent5 === undefined ? undefined : <ul>{props.set5} @ {props.maxSquat * props.percent5}</ul>}
        </div>
    );
}

export default repView;