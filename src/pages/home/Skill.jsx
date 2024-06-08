import React from 'react';
import '../../styles/skill.css'
const cards = [
    {
        icon: './public/skill1.png',
        text: 'HTML & CSS'
    },
    {
        icon: './public/skill2.png',
        text: 'Taliwind'
    },
    {
        icon: './public/skill3.png',
        text: 'React'
    },
    {
        icon: './public/skill4.png',
        text: 'Express.js'
    },
    {
        icon: './public/skill5.png',
        text: 'AI tools'
    },
    {
        icon: './public/skill6.png',
        text: 'ChatGPT'
    },
    {
        icon: './public/skill7.png',
        text: 'Redux'
    },
    {
        icon: './public/skill8.png',
        text: 'MongoDB'
    },
    {
        icon: './public/skill9.png',
        text: 'DSA'
    },
    {
        icon: './public/skill10.png',
        text: 'JavaScript'
    },
    {
        icon: './public/skill11.png',
        text: 'APIs'
    },
    {
        icon: './public/skill12.png',
        text: 'Node.js'
    },
]
const achivement = [
    {
        head: "7,000+",
        text: "Total Students"
    },
    {
        head: "23",
        text: "Total Courses"
    },
    {
        head: `4.6`,
        childern: <span className='f-20 achieve-sub'>(4.6)</span>,
        text: "Average Rating"
    },
    {
        head: "50,100+",
        text: "Total  Doubts Solved"
    },
    {
        head: "5 min",
        text: "Avgerage Response Time"
    },
    {
        head: "8,000+",
        text: "Awesome Projects made by Students"
    },
]
function Skill(props) {
    return (
        <section className="section section-skill">
            <div className="skill">

                <h2 className="skill-heading f-48 fw-500 text-black text-center">
                    <span className="fw-700 text-pink">Skills and tools </span>
                    {"you will learn"}
                </h2>
                <div className="skill-cards" >
                    {
                        cards.map((item, idx) => {
                            return (
                                <div className="skill-card" key={idx}>
                                    <div className="skill-card-inner">
                                        <div className="skill-card-icon">
                                            <img src={item.icon} alt={item.text} />
                                        </div>
                                        <div className="skill-card-text">
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="achivement">
                <h3 className="achivement-heading f-48 fw-500 text-white text-center">
                    {"Our "}
                    <span className="fw-700">Achievements</span>
                </h3>
                <div className="achivement-cards">
                    {
                        achivement.map((item, idx) => (
                            <div className="achivement-card" key={idx}>
                                <div className="achive-head">
                                    {item.head}
                                    {item.childern ? item.childern : null}
                                </div>
                                <div className="achive-text">
                                    {item.text}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Skill;