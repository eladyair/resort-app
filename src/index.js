import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Context
import { RoomProvider } from './context/room/room.context';

// Styles
import './index.css';

// Components
import App from './App';

ReactDOM.render(
    <RoomProvider>
        <Router>
            <App />
        </Router>
    </RoomProvider>,
    document.getElementById('root')
);
