import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Styles
import './App.css';

// Page Components
import HomePage from './pages/home/home';
import RoomsPage from './pages/rooms/rooms';
import SingleRoomPage from './pages/single-room/single-room';
import ErrorPage from './pages/error/error';

// Components
import Navbar from './components/navbar/navbar';

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/rooms' component={RoomsPage} />
                <Route exact path='/rooms/:id' component={SingleRoomPage} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    );
}

export default App;
