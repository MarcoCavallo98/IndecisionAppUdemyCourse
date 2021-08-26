import React from 'react';

const Option = (props) => (
    <div className="container__option">
        <p>{props.optionNum + 1}. {props.option}</p>
        <button 
        className="simple-button"
            onClick={() => props.removeOption(props.optionNum)}
        >
            Remove
        </button>
    </div>
);

export default Option;