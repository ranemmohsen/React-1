import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import About from './About';
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './Contact'; // Import Contact
import Footer from './Footer'; // Import Footer
import './styles.css';

const App = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <Router>
            <div className="app ">
                <header className="header d-flex justify-content-between   ">
                    <h1 className='pe-5 text-white align-content-center ms-5 ps-5 ' >START FRAMEWORK</h1>
                    <nav className='navv d-flex  w-25 justify-content-end  me-5 pe-5'>
                        <Link
                            to="/"
                            onClick={() => handleLinkClick('about')}
                            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                        >
                            ABOUT
                        </Link>
                        <Link
                            to="/portfolio"
                            onClick={() => handleLinkClick('portfolio')}
                            className={`nav-link ${activeLink === 'portfolio' ? 'active' : ''}`}
                        >
                            PORTFOLIO
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => handleLinkClick('contact')}
                            className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                        >
                            CONTACT
                        </Link>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} /> {/* Add Contact Route */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;