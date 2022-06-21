import React, { Component } from 'react';
import Photo from './Photo';
import '../styles/stylesheet.css'

//Passing set of post from Main Componenet
class Photowall extends Component {
    render() {

        return (<div className='photoGrid'>{this.props.posts.map((post, index) => <Photo post={post} key={index}/>)}</div>);
    }
}

export default Photowall;