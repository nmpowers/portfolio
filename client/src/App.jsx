import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
// import Home from './pages/Home';
import About from './pages/About';
// import Projects from './pages/Projects';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/*<Route index element={<Home />} />*/}
                    <Route path="about" element={<About />} />
                    {/*<Route path="projects" element={<Projects />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
