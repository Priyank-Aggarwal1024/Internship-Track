import React from 'react';
import './layout.css'
import Navbar from './home/Navbar';
import Hero from './home/Hero';
import Guarantee from './home/Guarantee';
import OneGuarantee from './home/OneGuarantee';
import Highlights from './home/Highlights';
import Internship from './home/Internship';
import Roadmap from './home/Roadmap';
import Skill from './home/Skill';
import Testimonials from './home/Testimonials';
import Best from './home/Best';
import Faq from './home/Faq';
import Footer from './home/Footer';
function Layout(props) {
    return (
        <div className='layout'>
            <Navbar />
            <Hero />
            <Guarantee />
            <OneGuarantee />
            <Highlights />
            <Internship />
            <Roadmap />
            <Skill />
            <Testimonials />
            <Best />
            <Faq />
            <Footer />
        </div>
    );
}

export default Layout;