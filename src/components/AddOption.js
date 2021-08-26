import React from 'react';

const AddOption = (props) => (
    <form 
        onSubmit={props.addOption}
        className="container__bottom"
    >
        <input
            type="text" 
            name="newOpt"
        />
        <button className="little-button">Add option</button>
    </form>
);

export default AddOption;