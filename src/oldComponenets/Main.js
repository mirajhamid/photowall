import React, { Component } from 'react';
import Title from './Title';
import List from './List';

const items = ['item one', 'item two', 'item three', 'item four'];
const items2 = ['item 1', 'item 2', 'item 3', 'item 4'];
const header = 'This is my header';

class Main extends Component {
    render() {
        return <div>
            <Title text={header}/>
            <List items={items}/>
            <List items={items2}/>
        </div>;
    }
}

export default Main;