import React, { Component } from 'react';
import { render } from 'react-dom';
import Cake from "../components/Cake";

require('../bootstrap');
require('../components/Header');

render(
    React.createElement(Cake, {apiurl: api, id: id}),
    document.getElementById('cake')
);
