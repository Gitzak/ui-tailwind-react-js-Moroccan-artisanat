import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />{" "}
                <Route path="/blog/:slug" element={<BlogPost />} />{" "}
            </Routes>
        </Router>
    );
}

export default App;
