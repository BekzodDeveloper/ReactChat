import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="app-body">
                <NavBar/>
                <Profile/>
            </div>
        </div>
    );
}



export default App;
