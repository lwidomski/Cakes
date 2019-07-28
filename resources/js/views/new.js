import React, { Component } from 'react';
import { render } from 'react-dom';
import New from "../components/New";

require('../bootstrap');
require('../components/Header');

render(
    React.createElement(New, {apiurl: api}),
    document.getElementById('new')
);
