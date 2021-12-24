import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from './Home.jsx';
import Clarin from './Clarin.jsx';
import Infobae from './Infobae.jsx';
import LaNacion from './LaNacion.jsx';

const Webpages = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={Home()} />
                <Route path="/clarin" element={Clarin()} />
                <Route path="/infobae" element={Infobae()} />
                <Route path="/lanacion" element={LaNacion()} />
            </Routes>
        </Router>
    );
};
export default Webpages;
