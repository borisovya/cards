import React from 'react';
import './App.css';
import { HashRouter} from "react-router-dom";
import Header from "./header/Header";
import Pages from "./routes/Pages";


const App = () => {
    return (
        <div className="App">
            <HashRouter>

                <Header/>
                <Pages />

            </HashRouter>
        </div>
    )
}

export default App;
