import React, { Component } from 'react';

class List extends Component {
    render() {
        // a component should return ()
        return (<ol>{this.props.items.map((item, index) => <li key={index}>{item}</li>)}</ol>);
    }
}

export default List;