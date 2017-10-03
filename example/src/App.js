import React, {Component} from 'react';
import './App.css';
import Genoa from "../../src/components/Genoa/Genoa";

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
