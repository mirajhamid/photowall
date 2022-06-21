import React from 'react';

//## class Component
// class Title extends Component {
//     render() {
//         return (<h1>{this.props.text}</h1>);
//     }
// }

//## functional Component
function Title(props) {

    return (<h1>{props.text}</h1>);

}

export default Title;