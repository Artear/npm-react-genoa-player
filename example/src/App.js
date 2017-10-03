import React, {Component} from 'react';
import './App.css';
import * as Genoa from "react-genoa-player";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Genoa playerId={1234} videoId={1123} host="https://domain.com"/>
            </div>
        );
    }
}

export default App;
