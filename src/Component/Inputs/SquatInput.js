import React from 'react';

import "./SquatInput.css";

const squatInput = (props) => {
    return (
        <div className="SquatInput">
            Max Squat: <input onChange={props.onChange} value={props.currentMaxSquatValue}></input>
        </div>
    );
}

export default squatInput;