import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import BoxesContainer from './BoxesContainer';

class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (<div>
            <h1>TEAM JIGGLY|PUFFFSS</h1>
            <BoxesContainer />
        </div>);

    }
}

// const App = () => {
//     return (<h1>hi</h1>);
// }



export default hot(module)(App);