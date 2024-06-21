import React from 'react';
import '../../styles/guarantee.css'
import GuaranteeImg from '../../assets/guarantee.png'
import ApplyBtn from '../../components/reusable/ApplyBtn';
import Comp1 from '../../assets/download 1.png'
import Comp10 from '../../assets/download 10.png'
import Comp2 from '../../assets/download 2.png'
import Comp3 from '../../assets/download 3.png'
import Comp4 from '../../assets/download 4.png'
import Comp5 from '../../assets/download 5.png'
import Comp6 from '../../assets/download 6.png'
import Comp7 from '../../assets/download 7.png'
import Comp8 from '../../assets/download 8.png'
import Comp9 from '../../assets/download 9.png'
import Marquee from 'react-fast-marquee'
function Guarantee(props) {
    return (
        <>
            <section className="int-track-section int-track-guarantee-section">
                <div className="int-track-guarantee-div">
                    <img src={GuaranteeImg} alt="Guarantee Internship" />
                    <div className="int-track-guarantee-right">
                        <h2 className="int-track-section-heading int-track-guarantee-heading int-track-f-48 int-track-fw-400">India’s 1st Stipend Guranteed <span className="int-track-fw-700">Internship Programme</span></h2>
                        <ApplyBtn classes={""} />
                    </div>
                </div>
            </section>
            <div className="int-track-company-div">
                <h2 className="int-track-company-heading int-track-f-48 int-track-fw-500 int-track-text-black int-track-text-center">
                    Companies hiring <span className="int-track-fw-700 int-track-text-pink">for web developer</span>
                </h2>
                <Marquee>
                    <div className="int-track-company-hiring-box">
                        <img src={Comp3} alt="Google" />
                    </div>
                    <div className="int-track-company-hiring-box">
                        <img src={Comp7} alt="Microsoft" />
                    </div>
                    <div className="int-track-company-hiring-box">
                        <img src={Comp8} alt="Ola" />
                    </div>
                    <div className="int-track-company-hiring-box">
                        <img src={Comp5} alt="Flipkart" />
                    </div>
                    <div className="int-track-company-hiring-box">
                        <img src={Comp6} alt="Myntra" />
                    </div>

                    <div className="int-track-company-hiring-box">
                        <img src={Comp2} alt="Intuit" />
                    </div>
                    <div className="int-track-company-hiring-box">
                        <img src={Comp4} alt="Amazon" />
                    </div>
                    <div className="int-track-company-hiring-box">
                        <img src={Comp10} alt="Accenture" />
                    </div>
                    <div className="int-track-company-hiring-box">
                        <img src={Comp1} alt="IBM" />
                    </div>
                    <div className="int-track-company-hiring-box">
                        <img src={Comp9} alt="Virtusa" />
                    </div>
                </Marquee>
            </div>
        </>
    );
}

export default Guarantee;