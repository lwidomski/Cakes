import React, { Component } from 'react';
import { render } from 'react-dom';
import Cakes from "../components/Cakes";

require('../bootstrap');
require('../components/Header');

render(
    React.createElement(Cakes, {apiurl: api}),
    document.getElementById('cakes')
);