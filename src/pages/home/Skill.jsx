import React from 'react';
import '../../styles/skill.css'
const cards = [
    {
        icon: './skill1.png',
        text: 'HTML & CSS'
    },
    {
        icon: './skill2.png',
        text: 'Taliwind'
    },
    {
        icon: './skill3.png',
        text: 'React'
    },
    {
        icon: './skill4.png',
        text: 'Express.js'
    },
    {
        icon: './skill5.png',
        text: 'AI tools'
    },
    {
        icon: './skill6.png',
        text: 'ChatGPT'
    },
    {
        icon: './skill7.png',
        text: 'Redux'
    },
    {
        icon: './skill8.png',
        text: 'MongoDB'
    },
    {
        icon: './skill9.png',
        text: 'DSA'
    },
    {
        icon: './skill10.png',
        text: 'JavaScript'
    },
    {
        icon: './skill11.png',
        text: 'APIs'
    },
    {
        icon: './skill12.png',
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
        <section className="int-track-section int-track-section-skill">
            <div className="int-track-skill">

                <h2 className="int-track-skill-heading int-track-f-48 int-track-fw-500 int-track-text-black int-track-text-center">
                    <span className="int-track-fw-700 int-track-text-pink">Skills and tools </span>
                    {"you will learn"}
                </h2>
                <div className="int-track-skill-cards" >
                    {
                        cards.map((item, idx) => {
                            return (
                                <div className="int-track-skill-card" key={idx}>
                                    <div className="int-track-skill-card-inner">
                                        <div className="int-track-skill-card-icon">
                                            <img src={item.icon} alt={item.text} />
                                        </div>
                                        <div className="int-track-skill-card-text">
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="int-track-achivement">
                <h3 className="int-track-achivement-heading int-track-f-48 int-track-fw-500 int-track-text-white int-track-text-center">
                    {"Our "}
                    <span className="int-track-fw-700">Achievements</span>
                </h3>
                <div className="int-track-achivement-cards">
                    {
                        achivement.map((item, idx) => (
                            <div className="int-track-achivement-card" key={idx}>
                                <div className="int-track-achive-head">
                                    {item.head}
                                    {item.childern ? item.childern : null}
                                </div>
                                <div className="int-track-achive-text">
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