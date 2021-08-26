import React from 'react';
import Option from './Option';

const Options = (props) => (

    <div>
        <div className="container__header">
            <p>Your options:</p>
            <button
                className="simple-button"
                onClick={props.removeAllOptions}
                disabled={props.disabled}
            >
                Remove all
            </button>
        </div>
        {props.options.map((value, index) => (
            <Option 
                option={value} 
                optionNum = {index}
                removeOption={props.removeOption} 
                key={index} 
            />    
        ))}
    </div>

);

export default Options;