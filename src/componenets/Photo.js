import React from 'react';

//passed a single post to show photo details
// class Photo extends Component {
//     render() {
//         const post = this.props.post;
//         return (<figure className="figure">
//             <img className="photo" src={post.imageLink} alt={post.description}/>
//             <figCaption><p>{post.description}</p></figCaption>
//             <div className="button-container">
//                 <button className="button">Remove</button>
//             </div>
//         </figure>);
//     }
// }

function Photo(props) {

    const post = props.post;
    return (<figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description}/>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
            <button className="button" onClick={() => {props.onRemovePhoto(post)}}>Remove</button>
        </div>
    </figure>);

}

export default Photo;