import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container" style={{ marginTop: 40 }}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;