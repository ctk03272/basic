import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import MainLayout from "./layouts/MainLayout";
import Main from "./components/main";
import Test from "./components/test/text";

function App() {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/test" element={<Test/>}/>
                </Routes>
            </MainLayout>
        </Router>

    );
}

export default App;
