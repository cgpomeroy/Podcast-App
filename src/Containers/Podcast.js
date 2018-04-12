import React, { Component } from 'react';

class Podcast extends Component {
    render(){
        console.log(this.props.location.pathname.split("/")[2]);
        return "Hi there!";
    }
}

export default Podcast;