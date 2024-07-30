import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Screens/Home';
import DriveWithUs from './Screens/DriveWithUs';
import RideWithUs from './Screens/RideWithUs';
import Charge from './Screens/LetsCharge';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drive" element={<DriveWithUs />} />
          <Route path="/ride" element={<RideWithUs />} />
          <Route path="/charge" element={<Charge />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
