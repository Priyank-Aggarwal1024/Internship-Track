import React from 'react';
import '../../styles/best.css'
import Best1 from '../../assets/best1.png'
import Best2 from '../../assets/best2.png'
function Best(props) {
    return (
        <section className="section section-best">
            <h2 className="best-heading fw-500 f-48 text-black text-center">
                Why are we <span className="text-pink fw-700">the Best?</span>
            </h2>
            <div className="best-image large-best-image">
                <img src={Best1} alt="Why are we the best analytics" />
            </div>
            <div className="best-image small-best-image">
                <img src={Best2} alt="Why are we the best analytics" />
            </div>
        </section>
    );
}

export default Best;