import React from 'react';
import '../../styles/internship.css'
import I1 from '../../assets/intern1.png'
import I2 from '../../assets/intern2.png'
import I3 from '../../assets/intern3.png'
import I4 from '../../assets/intern4.png'
import I5 from '../../assets/intern5.png'
function Internship(props) {
    return (
        <section className="section section-internship">
            <h2 className="internship-heading f-48 fw-500 text-black text-center">
                How does the <span className="fw-700 text-pink"> Internship Program works ?</span>
            </h2>
            <div className="internship-cards">
                <div className="internship-card internship-card-1">
                    <div className="internship-card-background"></div>
                    <div className="internship-card-inner">
                        <img src={I1} alt="Sharp Language" className="internship-card-icon" />
                        <p className="internship-card-text">Learn from our structured pre recorded courses made by experts to meet industry needs</p>
                    </div>
                </div>
                <div className="internship-card internship-card-2">
                    <div className="internship-card-background"></div>
                    <div className="internship-card-inner">
                        <img src={I2} alt="People" className="internship-card-icon" />
                        <p className="internship-card-text text-white">1:1 live doubt solving support available throughout the day to clear your doubts instantly </p>
                    </div>
                </div>
                <div className="internship-card internship-card-3">
                    <div className="internship-card-background"></div>
                    <div className="internship-card-inner">
                        <img src={I3} alt="Mentorship" className="internship-card-icon" />
                        <p className="internship-card-text">Personal mentors to guide and help you throughout your journey as a friend</p>
                    </div>
                </div>
                <div className="internship-card internship-card-4">
                    <div className="internship-card-background"></div>
                    <div className="internship-card-inner">
                        <img src={I4} alt="Skill" className="internship-card-icon" />
                        <p className="internship-card-text">Build major projects which makes your resume stand apart </p>
                    </div>
                </div>
                <div className="internship-card internship-card-5">
                    <div className="internship-card-background"></div>
                    <div className="internship-card-inner">
                        <img src={I5} alt="Internship" className="internship-card-icon" />
                        <p className="internship-card-text">Get guaranteed paid internships after completion of the program along with course completion certificates</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Internship;