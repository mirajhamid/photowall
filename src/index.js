import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const items = ['item one', 'item two', 'item three', 'item four'];
const items2 = ['item 1', 'item 2', 'item 3', 'item 4'];
const header = 'This is my header';
const root = ReactDOM.createRoot(document.getElementById('root'));


class List extends Component {
    render() {
        // a component should return ()
        return (<ol>{this.props.items.map((item, index) => <li key={index}>{item}</li>)}</ol>);
    }
}

class Title extends Component {
    render() {
        return (<h1>{this.props.text}</h1>);
    }
}

class Main extends Component {
    render() {
        return <div>
            <Title text={header}/>
            <List items={items}/>
            <List items={items2}/>
        </div>;
    }
}

root.render(<Main/>);