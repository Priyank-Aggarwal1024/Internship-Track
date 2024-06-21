import React from 'react';
import '../../styles/highlight.css'
import I1 from '../../assets/high1.png'
import I2 from '../../assets/high2.png'
import I3 from '../../assets/high3.png'
import I4 from '../../assets/high4.png'
import I5 from '../../assets/high5.png'
import I6 from '../../assets/high6.png'
function Highlights(props) {
    return (
        <section className="int-track-section int-track-section-highlight">
            <h2 className="int-track-highlight-heading int-track-f-48 int-track-fw-500 int-track-text-black int-track-text-center">
                Key <span className="int-track-fw-700 int-track-text-pink"> Highlights</span>
            </h2>
            <div className="int-track-highlight-cards">
                <div className="int-track-highlight-card">
                    <div className="int-track-highlight-card-inner">
                        <div className="int-track-highlight-card-icon">
                            <img src={I1} alt="Placement
                        Assistance" />
                        </div>
                        <p className="int-track-highlight-card-text">Placement
                            Assistance</p>
                    </div>
                </div>
                <div className="int-track-highlight-card">
                    <div className="int-track-highlight-card-inner">
                        <div className="int-track-highlight-card-icon">
                            <img src={I2} alt="Guranteed Certification" />
                        </div>
                        <p className="int-track-highlight-card-text">Guranteed Certification</p>
                    </div>
                </div>
                <div className="int-track-highlight-card">
                    <div className="int-track-highlight-card-inner">
                        <div className="int-track-highlight-card-icon">
                            <img src={I3} alt="Guranteed Internship" />
                        </div>
                        <p className="int-track-highlight-card-text">Guranteed Internship</p>
                    </div>
                </div>
                <div className="int-track-highlight-card">
                    <div className="int-track-highlight-card-inner">
                        <div className="int-track-highlight-card-icon">
                            <img src={I4} alt="Personal Mentor" />
                        </div>
                        <p className="int-track-highlight-card-text">Personal Mentor</p>
                    </div>
                </div>
                <div className="int-track-highlight-card">
                    <div className="int-track-highlight-card-inner">
                        <div className="int-track-highlight-card-icon">
                            <img src={I5} alt="Industry Standard Projects" />
                        </div>
                        <p className="int-track-highlight-card-text">Industry Standard Projects</p>
                    </div>
                </div>
                <div className="int-track-highlight-card">
                    <div className="int-track-highlight-card-inner">
                        <div className="int-track-highlight-card-icon">
                            <img src={I6} alt="24x7 Support Over Chat" />
                        </div>
                        <p className="int-track-highlight-card-text">24x7 Support
                            Over Chat</p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Highlights;