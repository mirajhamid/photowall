import React, { Component } from 'react';

//passed a single post to show photo details
class Photo extends Component {
    render() {
        return (<div className='figure'>{<p>{this.props.post.description}</p>}</div>);
    }
}

export default Photo;