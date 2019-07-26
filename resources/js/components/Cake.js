import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div>
                <h1>CAKE!!!</h1>
            </div>
        );
    }
}

if (document.getElementById('cake')) {
    ReactDOM.render(<Example />, document.getElementById('cake'));
}
