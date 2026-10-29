
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './component/Home';
import Registration from './component/Registration';
import Login from './component/Login';
import Shopping from './component/Shopping';

function App() {
    const [rdata, setRData] = useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/registration"
                    element={<Registration regData={setRData} />}
                />

                <Route
                    path="/login"
                    element={<Login logdata={rdata} />}
                />

                <Route
                    path="/shopping"
                    element={<Shopping />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

