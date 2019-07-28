import React, { Component } from 'react';
import axios from "axios";

export default class Cake extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            apiurl: props.apiurl,
            cakeData:[],
        }

    }

    //when component mounts, this is the first function that gets called
    componentDidMount(){
        //first we obtain data about our cake
        axios.get(this.state.apiurl+`/cakes/`+this.state.id)
            .then(response => {
                console.log(response.data);
                // we save the data into our state variable
                this.setState({
                    cakeData: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        let style = {};
        style = {
            backgroundImage: "url('"+this.state.cakeData.imageUrl+"')"
        }

        let divWidth = 'col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3';

        return (
            <div id="cakeData">
                <div className='gap'></div>
                <h2>{this.state.cakeData.name}</h2>
                <div id='back' className={divWidth}><a href="/">back</a></div>
                <div className='gap'></div>
                <div className='gap'></div>
                <div id='cakeImage' style={style}></div>
                <h3>Yum factor:</h3>
                <div id='yums'>
                    <div className={this.state.cakeData.yumFactor >= 1? 'yum active': 'yum'}>1</div>
                    <div className={this.state.cakeData.yumFactor >= 2? 'yum active': 'yum'}>2</div>
                    <div className={this.state.cakeData.yumFactor >= 3? 'yum active': 'yum'}>3</div>
                    <div className={this.state.cakeData.yumFactor >= 4? 'yum active': 'yum'}>4</div>
                    <div className={this.state.cakeData.yumFactor >= 5? 'yum active': 'yum'}>5</div>
                </div>
                <div className='gap'></div>
                <h3>Comments:</h3>
                <div className={'comment ' + divWidth}>{this.state.cakeData.comment}</div>
            </div>
        );
    }
}