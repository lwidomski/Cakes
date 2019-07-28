import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js'
import axios from 'axios';


export default class Cakes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiurl: props.apiurl,
            cakesData:[],
        }

        this.renderThumbnail = this.renderThumbnail.bind(this);
        this.renderAdd = this.renderAdd.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    // when component mounts, this is the first function that gets called
    componentDidMount(){
        //first we obtain data about our cakes
        axios.get(this.state.apiurl+`/cakes`)
            .then(response => {
                // console.log(response.data);
                // we save the data into our state variable
                this.setState({
                    cakesData: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // render a react component
    renderThumbnail(index, cake){
        return(
            <Thumbnail cake={cake} key={'thumbnail'+index}/> //react component
        );
    }

    // render extra component for the array
    renderAdd(){
        return(
            <div className='col-6 col-sm-4 col-md-3 col-lg-2 square thumbnail-add' onClick={this.redirect} key='thumbnailadd'>
                <div className='title'>add a cake</div>
            </div>
        );
    }

    redirect(){
        window.location.href = "/cakes/new";
    }

    render() {

        let thumbnails = [];

        // I prefer for loops for their memory efficiency
        for(let i = 0; i < this.state.cakesData.length; i++){ // loop through all cakes obtained from the API
            thumbnails.push(this.renderThumbnail(i, this.state.cakesData[i])); // for each render a Thumbnail react component
        }
        thumbnails.push(this.renderAdd()); // render 'add a cake' button


        return (
            <div>
                <div className='cakes'>{thumbnails}</div>
            </div>
        );
    }
}
