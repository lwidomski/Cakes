import React, { Component } from 'react';
import axios from "axios";

export default class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiurl: props.apiurl,
            cakeData:[],
            name:'',
            url:'',
            yum:3,
            comment:'',
        }

        this.uploadCake = this.uploadCake.bind(this);
        // handle functions update state variables on key press
        this.handleName = this.handleName.bind(this);
        this.handleUrl = this.handleUrl.bind(this);
        this.handleYum = this.handleYum.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    // submit function
    uploadCake(){
        // these data I am posting to the API to be saved
        let products = {
            name: this.state.name,
            comment: this.state.comment,
            imageUrl: this.state.url,
            yumFactor: this.state.yum
        }
        axios.post(this.state.apiurl+`/cakes`, products)
            .then(response => {
                // console.log(response.data);
                window.location.href = "/"; //redirect back to home page if succeeded
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleName(e){
        this.setState({
            name: e.target.value
        })
    }

    handleUrl(e){
        this.setState({
            url: e.target.value
        })
    }

    handleYum(value){
        this.setState({
            yum: value
        })
    }

    handleComment(e){
        this.setState({
            comment: e.target.value
        })
    }

    render() {

        //if no URL is typed in then we hide the image preview (default)
        let style = {
            display: "none"
        };

        if(this.state.url != '')
        style = {
            backgroundImage: "url('"+this.state.url+"')"
        }

        // use this url for testing:
        // https://tastesbetterfromscratch.com/wp-content/uploads/2010/06/Hersheys-Perfectly-Chocolate-Chocolate-Cake-13-500x500.jpg

        // this style I will be using on multiple elements
        let divWidth = 'col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3';

        return (
            <div id="cakeData">
                <div className='gap'></div>
                <h2><strong>Add a new cake</strong></h2>
                <div id='back' className={divWidth}><a href="/">back</a></div>
                <div className='gap'></div>
                <div className='gap'></div>
                <div className={divWidth}>
                    <input placeholder="cake name" type="text" name="name" required onChange={this.handleName} />
                </div>
                <div className='gap'></div>
                <div className={divWidth}>
                    <input placeholder="cake image URL" type="text" name="cakeURL" required onChange={this.handleUrl} />
                </div>
                <div className='gap'></div>
                <h4>Image preview:</h4>
                <div className={divWidth} id='cakeImagePreview' style={style}></div>
                <div className='gap'></div>
                <h3>Choose Yum factor:</h3>
                <div id='yums'>
                    <div className={this.state.yum >= 1? 'yum pointer active': 'yum pointer'} onClick={this.handleYum.bind(this, 1)}>1</div>
                    <div className={this.state.yum >= 2? 'yum pointer active': 'yum pointer'} onClick={this.handleYum.bind(this, 2)}>2</div>
                    <div className={this.state.yum >= 3? 'yum pointer active': 'yum pointer'} onClick={this.handleYum.bind(this, 3)}>3</div>
                    <div className={this.state.yum >= 4? 'yum pointer active': 'yum pointer'} onClick={this.handleYum.bind(this, 4)}>4</div>
                    <div className={this.state.yum >= 5? 'yum pointer active': 'yum pointer'} onClick={this.handleYum.bind(this, 5)}>5</div>
                </div>
                <div className='gap'></div>
                <h3>Comment:</h3>
                <div className={divWidth}>
                    <textarea placeholder="comment" type="text" name="comment" onChange={this.handleComment} ></textarea>
                </div>
                <div className='gap'></div>
                <div className='submit' onClick={this.uploadCake}>Add</div>
            </div>
        );
    }
}