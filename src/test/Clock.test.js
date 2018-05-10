import React from 'react';
import ReactDOM from 'react-dom';

import Clock from '../components/clock/Clock';


it("Render clock", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Clock />, div);
    ReactDOM.unmountComponentAtNode(div);
});