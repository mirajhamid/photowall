import React from 'react';
import Photo from './Photo';

//## class Component
//Passing set of post from Main Component
// class Photowall extends Component {
//     render() {
//
//         return (<div className='photoGrid'>{this.props.posts.map((post, index) => <Photo post={post} key={index}/>)}</div>);
//     }
// }

//## functional Component
function Photowall(props) {

        return (<div className='photoGrid'>{props.posts.map((post, index) => <Photo post={post} onRemovePhoto={props.onRemovePhoto} key={index}/>)}</div>);

}

export default Photowall;