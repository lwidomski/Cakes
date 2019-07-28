import React, { Component } from 'react';

export default class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cakeData:props.cake,
        }

        this.redirect = this.redirect.bind(this);
    }

    redirect(){
        window.location.href = "/cake/"+this.state.cakeData.id;
    }

    render() {
        let style = {};
        style = {
            backgroundImage: "url('"+this.state.cakeData.imageUrl+"')"
        }

        return (
            <div className='col-6 col-sm-4 col-md-3 col-lg-2 square thumbnail' style={style} onClick={this.redirect}>
                <div className='title'>{this.state.cakeData.name}</div>
            </div>
        );
    }
}
