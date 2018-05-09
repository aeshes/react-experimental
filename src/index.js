import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function tick() {
    const element = (
        <div id="clock">
            <p className="date">{new Date().toLocaleDateString()}</p>
            <p className="time">{new Date().toLocaleTimeString()}</p>
            <p className="text">DIGITAL CLOCK with ReactJS</p>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);