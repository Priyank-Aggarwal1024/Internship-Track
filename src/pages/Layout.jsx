import React, { useState } from 'react';
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
import VideoReview from './home/VideoReview';
function Layout(props) {
    const [wid, setWid] = useState(window.innerWidth);
    window.addEventListener('resize', (e) => {
        if (window.innerWidth < 880 && wid >= 880) {
            setWid(window.innerWidth)
        }
        else if (window.innerWidth >= 880 && wid < 880) {
            setWid(window.innerWidth)
        }
    })
    return (
        <div className='int-track-layout'>
            <Navbar />
            <Hero />
            <Guarantee />
            <OneGuarantee />
            <Highlights />
            <Internship />
            <Roadmap />
            {
                wid < 880 ? <Testimonials /> : null
            }
            <Skill />
            {
                wid >= 880 ? <Testimonials /> : null
            }
            <VideoReview />
            <Best />
            <Faq />
            <Footer />
        </div>
    );
}

export default Layout;