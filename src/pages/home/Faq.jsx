import React, { useState } from 'react';
import '../../styles/faq.css'
import check from '../../assets/checked.png'
import uncheck from '../../assets/uncheck.png'
function Faq(props) {
    const [checkout, setCheckout] = useState([
        {
            checked: true,
            ques: "Why should I opt for Tutedude?",
            ans: "Tutedude provides you the professional curated content by Indian instructors along with live doubt solving and personal one to one mentorship which you won't find anywhere else. And amazingly, you learn for Free if you are enrolled under 100% Refund offer."
        },
        {
            checked: false,
            ques: "What is the validity of the courses and when can I watch them?",
            ans: "Tutedude provides you the professional curated content by Indian instructors along with live doubt solving and personal one to one mentorship which you won't find anywhere else. And amazingly, you learn for Free if you are enrolled under 100% Refund offer."
        },
        {
            checked: false,
            ques: "What is the validity of the courses and when can I watch them?",
            ans: "Tutedude provides you the professional curated content by Indian instructors along with live doubt solving and personal one to one mentorship which you won't find anywhere else. And amazingly, you learn for Free if you are enrolled under 100% Refund offer."
        },
        {
            checked: false,
            ques: "Why should I opt for Tutedude?",
            ans: "Tutedude provides you the professional curated content by Indian instructors along with live doubt solving and personal one to one mentorship which you won't find anywhere else. And amazingly, you learn for Free if you are enrolled under 100% Refund offer."
        }
    ])
    const [refund, setRefund] = useState([
        {
            checked: true,
            ques: "How will I know that 100% Refund offer has been applied ?",
            ans: "t commodo non. Convallis ultricies mattis bibendum quam. Purus vel velit turpis fringilla fringilla elit eget. Neque scelerisque sit vulputate dolor tellus. Nisi aliquam interdum condimentum quis est vitae iaculis sed. Quisque etiam turpis lorem sodales id. Donec famcus. Ut aliquam aen"
        },
        {
            checked: false,
            ques: "How will receive my 100% Refund amount ?",
            ans: "t commodo non. Convallis ultricies mattis bibendum quam. Purus vel velit turpis fringilla fringilla elit eget. Neque scelerisque sit vulputate dolor tellus. Nisi aliquam interdum condimentum quis est vitae iaculis sed. Quisque etiam turpis lorem sodales id. Donec famcus. Ut aliquam aen"
        },
        {
            checked: false,
            ques: "How can I access my Mentors?",
            ans: "t commodo non. Convallis ultricies mattis bibendum quam. Purus vel velit turpis fringilla fringilla elit eget. Neque scelerisque sit vulputate dolor tellus. Nisi aliquam interdum condimentum quis est vitae iaculis sed. Quisque etiam turpis lorem sodales id. Donec famcus. Ut aliquam aen"
        },
        {
            checked: false,
            ques: "Why don't you provide live classes and why should I prefer recorded lectures?",
            ans: "t commodo non. Convallis ultricies mattis bibendum quam. Purus vel velit turpis fringilla fringilla elit eget. Neque scelerisque sit vulputate dolor tellus. Nisi aliquam interdum condimentum quis est vitae iaculis sed. Quisque etiam turpis lorem sodales id. Donec famcus. Ut aliquam aen"
        },
    ])
    const checkoutCallback = (idx) => {
        const temp = checkout.map((item, index) => {
            if (index == idx) {
                item.checked = !item.checked;
            } else {
                item.checked = false
            }
            return item;
        });
        setCheckout(temp)

    }
    const refundCallback = (idx) => {
        const temp = refund.map((item, index) => {
            if (index == idx) {
                item.checked = !item.checked;
            } else {
                item.checked = false
            }
            return item;
        });
        setRefund(temp)

    }
    return (
        <section className="section section-faq">
            <h2 className="faq-heading fw-500 f-48 text-black text-center">
                Frequently Asked <span className="text-pink fw-700">Questions</span>
            </h2>
            <div className="faq">
                <div className="faq-left">
                    <h3 className="checkout-faq-heading">Check Out Our FAQs!</h3>
                    {
                        checkout.map((item, idx) => {
                            return (
                                <div className="faq-item" key={idx}>
                                    <input type="checkbox" value={item.checked} name={`checkout-${idx}`} className='checkbox' />
                                    <label className='ques' htmlFor={`checkout-${idx}`} onClick={() => checkoutCallback(idx)}>
                                        <p>{item.ques}</p>
                                        <div className="faq-icon">
                                            {
                                                item.checked ? <img src={check} alt="Check" /> : <img src={uncheck} alt="Check" />
                                            }
                                        </div>
                                    </label>
                                    <div className="ans" style={{ display: item.checked ? "block" : "none" }}>
                                        {
                                            item.ans
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="faq-right">
                    <h3 className="refund-faq-heading">
                        TuteDude and Refund
                    </h3>
                    {
                        refund.map((item, idx) => {
                            return (
                                <div className="faq-item" key={idx}>
                                    <input type="checkbox" value={item.checked} name={`checkout-${idx}`} className='checkbox' />
                                    <label className='ques' htmlFor={`checkout-${idx}`} onClick={() => refundCallback(idx)}>
                                        <p>{item.ques}</p>
                                        <div className="faq-icon">
                                            {
                                                item.checked ? <img src={check} alt="Check" /> : <img src={uncheck} alt="UnCheck" />
                                            }
                                        </div>
                                    </label>
                                    <div className="ans" style={{ display: item.checked ? "block" : "none" }}>
                                        {
                                            item.ans
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Faq;