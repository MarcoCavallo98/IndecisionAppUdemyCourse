import React from 'react';

const Header = (props) =>(
    <div className="header-app">
        <div className="container">
            <h1 className="header-app__title">{props.title}</h1>
            <p className="header-app__subtitle">{props.subtitle}</p>
        </div>
    </div>
);

Header.defaultProps = {
    title: 'IndecisionApp',
    subtitle: 'Put your life in the hands of a computer'
}

export default Header;