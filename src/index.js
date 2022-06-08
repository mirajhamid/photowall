import React from 'react';
import ReactDOM from 'react-dom/client';

const items = ['item one', 'item two', 'item three', 'item four'];
const root = ReactDOM.createRoot(document.getElementById('root'));

//lesson 01
// const element = React.createElement('ol', null,
//     React.createElement('li', null, items[0]),
//     React.createElement('li', null, items[1]),
//     React.createElement('li', null, items[2]),
// );

//lesson 02
// const element = React.createElement('ol', null,
//     items.map(item => React.createElement('li', null, item)),
// );

//lesson 03
const element = React.createElement('ol', null,
    items.map((item, index) => React.createElement('li', { key: index }, item)),
);

root.render(element);