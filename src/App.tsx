import React from 'react';
import './assets/css/solar.css';
import { Home } from './pages/home/Home';
import { SiteRecord } from './pages/site-record/SiteRecord';

const App: React.FC = () => {
    return (
        <>
            <div className="solar-syst">
                <div className="sun"></div>
                <div className="mercury"></div>
                <div className="venus"></div>
                <div className="earth"></div>
                <div className="mars"></div>
                <div className="jupiter"></div>
                <div className="saturn"></div>
                <div className="uranus"></div>
                <div className="neptune"></div>
                <div className="pluto"></div>
                <div className="asteroids-belt"></div>
            </div>
            <Home />
            <SiteRecord />
        </>
    );
};

export default App;
