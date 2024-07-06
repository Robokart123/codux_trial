import React from 'react';
import { MemoryRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';

import { FocusStyleManager } from '@blueprintjs/core';

import { HomePage } from './components/home-page/home-page';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { About } from './components/about/about';
import { Home } from './components/home/home';

FocusStyleManager.onlyShowFocusOnTabs();

function App() {
    return (
        <div className={styles.App}>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
