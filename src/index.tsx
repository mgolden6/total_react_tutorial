import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './header';
import { CustomDate } from './custom-date';
import { FruitLoops } from './fruit-loops';

let fruit: Array<string> = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple"
]

ReactDOM.render(
    <div>
        <Header text="this is our header" />
        <CustomDate />
        <FruitLoops fruit={fruit} />
        <p>this is a paragraph</p>
        <a href="#">click me</a>
    </div>,
    document.querySelector('#root')
)