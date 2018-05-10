import React from 'react';
import ReactDOM from 'react-dom';
import './clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div id="clock">
                <p className="date">{this.state.date.toLocaleDateString()}</p>
                <p className="time">{this.state.date.toLocaleTimeString()}</p>
                <p className="text">DIGITAL CLOCK with ReactJS</p>
            </div>
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}

export default Clock;