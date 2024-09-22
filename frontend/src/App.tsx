import { useState } from 'react';

import './App.css';
import { Greet } from "../wailsjs/go/main/App";
import React from 'react';

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);
    const updateResultText = (result) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div id="App">
            <h1 className=' text-9xl text-white'>HEllO From Baackend!</h1>
        </div>
    )
}

export default App
