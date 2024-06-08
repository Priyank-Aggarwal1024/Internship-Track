import React from 'react';
import '../../styles/oneguarantee.css'
import GuaranteeCard from '../../assets/guaranteecard.png'
function OneGuarantee(props) {
    return (
        <section className="section ">
            <h2 className="og-heading f-48 fw-500 text-black ">
                Our <span className="fw-700 text-pink">for web developer</span>
            </h2>
            <div className="section-one-guarantee">
                <div className="og-left">
                    <div className="og-cards">
                        <div className="og-card-1">
                            <div className="og-card-icon">
                                <svg className='og-svg' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M45.8346 20.8335H4.16797V35.4168C4.16797 37.0744 4.82645 38.6641 5.99855 39.8362C7.17065 41.0083 8.76037 41.6668 10.418 41.6668H39.5846C41.2422 41.6668 42.832 41.0083 44.0041 39.8362C45.1762 38.6641 45.8346 37.0744 45.8346 35.4168V20.8335ZM22.0555 29.1668L22.3055 28.9147C22.6853 28.5221 22.8956 27.996 22.8913 27.4497C22.8869 26.9035 22.6682 26.3808 22.2822 25.9942C21.8962 25.6077 21.3738 25.3882 20.8276 25.3831C20.2813 25.378 19.7549 25.5876 19.3617 25.9668L15.5513 29.7772C15.1607 30.1679 14.9413 30.6977 14.9413 31.2502C14.9413 31.8026 15.1607 32.3324 15.5513 32.7231L19.3617 36.5314C19.5539 36.7304 19.7838 36.8891 20.038 36.9983C20.2921 37.1075 20.5655 37.1649 20.8421 37.1673C21.1188 37.1698 21.3931 37.117 21.6491 37.0123C21.9052 36.9075 22.1378 36.7528 22.3334 36.5572C22.529 36.3616 22.6837 36.129 22.7884 35.873C22.8932 35.6169 22.9459 35.3426 22.9435 35.066C22.9411 34.7894 22.8836 34.516 22.7744 34.2618C22.6652 34.0076 22.5065 33.7778 22.3076 33.5856L22.0555 33.3335H31.2513C31.8038 33.3335 32.3337 33.114 32.7244 32.7233C33.1151 32.3326 33.3346 31.8027 33.3346 31.2502C33.3346 30.6976 33.1151 30.1677 32.7244 29.777C32.3337 29.3863 31.8038 29.1668 31.2513 29.1668H22.0555ZM10.418 8.3335C8.76037 8.3335 7.17065 8.99198 5.99855 10.1641C4.82645 11.3362 4.16797 12.9259 4.16797 14.5835V16.6668H45.8346V14.5835C45.8346 12.9259 45.1762 11.3362 44.0041 10.1641C42.832 8.99198 41.2422 8.3335 39.5846 8.3335H10.418Z" fill="#F7F7F8" />
                                </svg>
                            </div>
                            <div className="og-card-text">
                                <div className="og-card-heading">
                                    100% Refund!
                                </div>
                                <p className="og-card-about">
                                    Complete the course and get a guaranteed internship, or receive a 100% refund
                                </p>
                            </div>
                        </div>
                        <div className="og-card-2">
                            <div className="og-card-icon">
                                <svg className='og-svg' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <g clipPath="url(#clip0_23_1456)">
                                        <path d="M45.9998 17.7902C44.5899 18.4412 43.052 18.7678 41.4993 18.7461C39.9465 18.7243 38.4184 18.3547 37.0273 17.6645C35.6362 16.9743 34.4176 15.981 33.461 14.7577C32.5044 13.5344 31.8343 12.1122 31.4998 10.5958C29.4611 9.65725 27.2441 9.16931 24.9998 9.16524C21.1176 9.14778 17.3646 10.5585 14.4551 13.1287C11.5456 15.699 9.68281 19.2494 9.22135 23.1041C8.75989 26.9588 9.73196 30.8486 11.9525 34.033C14.1731 37.2174 17.4871 39.4742 21.2637 40.3736L20.8331 42.5402C16.5521 41.4968 12.8004 38.9238 10.2848 35.3061C7.76922 31.6884 6.6634 27.2757 7.17567 22.8992C7.68794 18.5227 9.78293 14.4846 13.066 11.5456C16.349 8.60661 20.5935 6.96962 24.9998 6.94302C27.1392 6.94294 29.2612 7.32875 31.2637 8.08191C31.297 6.67067 31.6184 5.28113 32.2081 3.99857C27.4391 2.34956 22.2518 2.36632 17.4935 4.04613C12.7352 5.72593 8.68712 8.96951 6.01033 13.2471C3.33355 17.5247 2.18627 22.5835 2.75588 27.5974C3.3255 32.6112 5.57834 37.2838 9.14646 40.8519C12.7146 44.42 17.3871 46.6729 22.401 47.2425C27.4148 47.8121 32.4736 46.6648 36.7512 43.988C41.0288 41.3112 44.2724 37.2631 45.9522 32.5048C47.632 27.7465 47.6488 22.5593 45.9998 17.7902ZM33.6109 32.193C33.51 32.3457 33.3799 32.4769 33.2281 32.5792C33.0763 32.6814 32.9059 32.7526 32.7265 32.7888C32.5471 32.8249 32.3623 32.8252 32.1828 32.7897C32.0032 32.7542 31.8325 32.6836 31.6803 32.5819L23.4859 27.0263V14.9291C23.4859 14.5608 23.6322 14.2075 23.8927 13.947C24.1532 13.6866 24.5064 13.5402 24.8748 13.5402C25.2431 13.5402 25.5964 13.6866 25.8569 13.947C26.1173 14.2075 26.2637 14.5608 26.2637 14.9291V25.5541L33.2081 30.2625C33.3619 30.3623 33.4944 30.4915 33.598 30.6428C33.7016 30.7941 33.7742 30.9644 33.8116 31.1438C33.8491 31.3233 33.8506 31.5084 33.8162 31.6885C33.7817 31.8686 33.7119 32.04 33.6109 32.193Z" fill="#F7F7F8" />
                                        <path d="M41.6671 15.2771C45.5024 15.2771 48.6115 12.1679 48.6115 8.33263C48.6115 4.49732 45.5024 1.38818 41.6671 1.38818C37.8318 1.38818 34.7227 4.49732 34.7227 8.33263C34.7227 12.1679 37.8318 15.2771 41.6671 15.2771Z" fill="#F7F7F8" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_23_1456">
                                            <rect width="50" height="50" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="og-card-text">
                                <div className="og-card-heading">
                                    One Time Payment
                                </div>
                                <p className="og-card-about">
                                    One-time payment of ₹2,999 for course ownership and lifetime 1:1 career mentorship.
                                </p>
                            </div>
                        </div>
                        <div className="og-card-3">
                            <div className="og-card-icon">
                                <svg className='og-svg' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M33.8907 7.41348C30.15 1.88542 24.2271 1.16151 21.7333 1.49056C8.64076 2.47793 7.70558 15.3105 7.70558 17.2848C7.70558 18.8642 5.21175 24.5239 3.96484 27.1563C5.21175 27.1563 7.70558 27.3537 7.70558 28.1435V34.0664C7.70558 36.0407 7.70558 37.0278 10.5111 38.015C13.3167 39.0021 14.2519 38.015 15.187 39.0021C16.1222 39.9893 15.187 48.8737 16.1222 47.8865C17.0574 46.8994 26.4092 46.8994 31.0852 46.8994C30.337 44.5302 31.3969 37.3569 32.0203 34.0664C32.0203 32.0921 34.8259 27.1563 35.7611 24.1949C36.6963 21.2334 38.5666 14.3235 33.8907 7.41348Z" fill="#F7F7F8" stroke="#F7F7F8" strokeWidth="1.31747" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.5735 1.42383C19.076 1.50197 15.3393 2.38507 12.1623 4.79244C8.97713 7.206 6.39542 11.1245 6.17581 17.1547C4.6338 21.0405 2.80861 25.725 2.08173 27.5997C1.98635 27.8457 2.01773 28.1233 2.16557 28.3414C2.31341 28.5595 2.55862 28.6899 2.82076 28.6899H6.17071V35.9728C6.17071 36.0687 6.18782 36.1637 6.22123 36.2535C6.48203 36.9541 7.05607 37.9329 7.96824 38.6602C8.88904 39.3942 10.1585 39.8693 11.7253 39.5254H11.7303H11.7459H11.7615H11.7771H11.7926H11.8082H11.8237H11.8392H11.8546H11.8701H11.8856H11.901H11.9164H11.9318H11.9472H11.9625H11.9779H11.9932H12.0085H12.0238H12.0391H12.0543H12.0696H12.0848H12.1H12.1152H12.1304H12.1455H12.1607H12.1758H12.1909H12.206H12.221H12.2361H12.2511H12.2661H12.2811H12.2961H12.3111H12.326H12.341H12.3559H12.3708H12.3856H12.4005H12.4153H12.4302H12.445H12.4598H12.4745H12.4893H12.504H12.5187H12.5334H12.5481H12.5628H12.5774H12.592H12.6066H12.6212H12.6358H12.6503H12.6649H12.6794H12.6939H12.7084H12.7228H12.7373H12.7517H12.7661H12.7805H12.7949H12.8092H12.8235H12.8379H12.8522H12.8664H12.8807H12.8949H12.9091H12.9233H12.9375H12.9517H12.9658H12.98H12.9941H13.0082H13.0222H13.0363H13.0503H13.0643H13.0783H13.0923H13.1063H13.1202H13.1341H13.148H13.1619H13.1758H13.1896H13.2034H13.2172H13.231H13.2448H13.2585H13.2722H13.2859H13.2996H13.3133H13.3269H13.3406H13.3542H13.3678H13.3813H13.3949H13.4084H13.4219H13.4354H13.4489H13.4624H13.4758H13.4892H13.5026H13.516H13.5293H13.5427H13.556H13.5693H13.5825H13.5958H13.609H13.6222H13.6354H13.6486H13.6617H13.6749H13.688H13.7011H13.7142H13.7272H13.7402H13.7533H13.7662H13.7792H13.7922H13.8051H13.818H13.8309H13.8438H13.8566H13.8694H13.8822H13.895H13.9078H13.9205H13.9333H13.946H13.9586H13.9713H13.9839H13.9966H14.0092H14.0217H14.0343H14.0468H14.0594H14.0718H14.0843H14.0968H14.1092H14.1216H14.134H14.1464H14.1587H14.171H14.1833H14.1956H14.2079H14.2201H14.2324H14.2445H14.2567H14.2689H14.281H14.2931H14.3052H14.3173H14.3293H14.3414H14.3534H14.3653H14.3773H14.3892H14.4012H14.4131H14.4249H14.4368H14.4486H14.4604H14.4722H14.484H14.4957H14.5074H14.5191H14.5308H14.5425H14.5541H14.5657H14.5773H14.5889H14.6004H14.6119H14.6234H14.6349H14.6464H14.6578H14.6692H14.6806H14.692H14.7033H14.7146H14.7219V47.9629H15.9561V39.5254H15.9606H15.9688H15.977H15.9852H15.9934H16.0015H16.0096H16.0177H16.0257H16.0337H16.0417H16.0497H16.0576H16.0655H16.0734H16.0813H16.0891H16.0969H16.1047H16.1125H16.1202H16.1279H16.1356H16.1432H16.1509H16.1585H16.166H16.1736H16.1811H16.1886H16.1961H16.2035H16.2109H16.2183H16.2256H16.233H16.2403H16.2476H16.2548H16.262H16.2692H16.2764H16.2835H16.2907H16.2978H16.3048H16.3119H16.3189H16.3258H16.3328H16.3397H16.3466H16.3535H16.3603H16.3672H16.3739H16.3807H16.3874H16.3942H16.4008H16.4075H16.4141H16.4207H16.4273H16.4338H16.4403H16.4468H16.4533H16.4597H16.4661H16.4725H16.4789H16.4852H16.4915H16.4977H16.504H16.5102H16.5164H16.5225H16.5287H16.5348H16.5408H16.5469H16.5529H16.5589H16.5648H16.5708H16.5767H16.5825H16.5884H16.5942H16.6H16.6057H16.6115H16.6172H16.6229H16.6285H16.6341H16.6397H16.6453H16.6508H16.6563H16.6618H16.6672H16.6727H16.678H16.6834H16.6887H16.694H16.6993H16.7046H16.7098H16.715H16.7201H16.7253H16.7304H16.7354H16.7405H16.7455H16.7505H16.7554H16.7604H16.7653H16.7701H16.775H16.7798H16.7846H16.7893H16.7941H16.7987H16.8034H16.808H16.8127H16.8172H16.8218H16.8263H16.8308H16.8352H16.8397H16.8441H16.8484H16.8528H16.8571H16.8614H16.8656H16.8699H16.874H16.8782H16.8823H16.8864H16.8905H16.8946H16.8986H16.9026H16.9065H16.9104H16.9143H16.9182H16.922H16.9258V37.9268H16.922H16.9182H16.9143H16.9104H16.9065H16.9026H16.8986H16.8946H16.8905H16.8864H16.8823H16.8782H16.874H16.8699H16.8656H16.8614H16.8571H16.8528H16.8484H16.8441H16.8397H16.8352H16.8308H16.8263H16.8218H16.8172H16.8127H16.808H16.8034H16.7987H16.7941H16.7893H16.7846H16.7798H16.775H16.7701H16.7653H16.7604H16.7554H16.7505H16.7455H16.7405H16.7354H16.7304H16.7253H16.7201H16.715H16.7098H16.7046H16.6993H16.694H16.6887H16.6834H16.678H16.6727H16.6672H16.6618H16.6563H16.6508H16.6453H16.6397H16.6341H16.6285H16.6229H16.6172H16.6115H16.6057H16.6H16.5942H16.5884H16.5825H16.5767H16.5708H16.5648H16.5589H16.5529H16.5469H16.5408H16.5348H16.5287H16.5225H16.5164H16.5102H16.504H16.4977H16.4915H16.4852H16.4789H16.4725H16.4661H16.4597H16.4533H16.4468H16.4403H16.4338H16.4273H16.4207H16.4141H16.4075H16.4008H16.3942H16.3874H16.3807H16.3739H16.3672H16.3603H16.3535H16.3466H16.3397H16.3328H16.3258H16.3189H16.3119H16.3048H16.2978H16.2907H16.2835H16.2764H16.2692H16.262H16.2548H16.2476H16.2403H16.233H16.2256H16.2183H16.2109H16.2035H16.1961H16.1886H16.1811H16.1736H16.166H16.1585H16.1509H16.1432H16.1356H16.1279H16.1202H16.1125H16.1047H16.0969H16.0891H16.0813H16.0734H16.0655H16.0576H16.0497H16.0417H16.0337H16.0257H16.0177H16.0096H16.0015H15.9934H15.9852H15.977H15.9688H15.9606H15.9524H15.9441H15.9358H15.9274H15.9191H15.9107H15.9023H15.8939H15.8854H15.8769H15.8684H15.8599H15.8513H15.8427H15.8341H15.8255H15.8168H15.8081H15.7994H15.7907H15.7819H15.7731H15.7643H15.7555H15.7466H15.7377H15.7288H15.7198H15.7109H15.7019H15.6929H15.6838H15.6748H15.6657H15.6565H15.6474H15.6382H15.629H15.6198H15.6106H15.6013H15.592H15.5827H15.5734H15.564H15.5546H15.5452H15.5358H15.5263H15.5168H15.5073H15.4978H15.4882H15.4786H15.469H15.4594H15.4497H15.44H15.4303H15.4206H15.4108H15.4011H15.3913H15.3814H15.3716H15.3617H15.3518H15.3419H15.3319H15.3219H15.3119H15.3019H15.2919H15.2818H15.2717H15.2616H15.2515H15.2413H15.2311H15.2209H15.2107H15.2004H15.1901H15.1798H15.1695H15.1591H15.1487H15.1383H15.1279H15.1175H15.107H15.0965H15.086H15.0754H15.0649H15.0543H15.0437H15.033H15.0224H15.0117H15.001H14.9903H14.9795H14.9687H14.9579H14.9471H14.9363H14.9254H14.9145H14.9036H14.8927H14.8817H14.8707H14.8597H14.8487H14.8377H14.8266H14.8155H14.8044H14.7932H14.7821H14.7709H14.7597H14.7485H14.7372H14.7259H14.7146H14.7033H14.692H14.6806H14.6692H14.6578H14.6464H14.6349H14.6234H14.6119H14.6004H14.5889H14.5773H14.5657H14.5541H14.5425H14.5308H14.5191H14.5074H14.4957H14.484H14.4722H14.4604H14.4486H14.4368H14.4249H14.4131H14.4012H14.3892H14.3773H14.3653H14.3534H14.3414H14.3293H14.3173H14.3052H14.2931H14.281H14.2689H14.2567H14.2445H14.2324H14.2201H14.2079H14.1956H14.1833H14.171H14.1587H14.1464H14.134H14.1216H14.1092H14.0968H14.0843H14.0718H14.0594H14.0468H14.0343H14.0217H14.0092H13.9966H13.9839H13.9713H13.9586H13.946H13.9333H13.9205H13.9078H13.895H13.8822H13.8694H13.8566H13.8438H13.8309H13.818H13.8051H13.7922H13.7792H13.7662H13.7533H13.7402H13.7272H13.7142H13.7011H13.688H13.6749H13.6617H13.6486H13.6354H13.6222H13.609H13.5958H13.5825H13.5693H13.556H13.5427H13.5293H13.516H13.5026H13.4892H13.4758H13.4624H13.4489H13.4354H13.4219H13.4084H13.3949H13.3813H13.3678H13.3542H13.3406H13.3269H13.3133H13.2996H13.2859H13.2722H13.2585H13.2448H13.231H13.2172H13.2034H13.1896H13.1758H13.1619H13.148H13.1341H13.1202H13.1063H13.0923H13.0783H13.0643H13.0503H13.0363H13.0222H13.0082H12.9941H12.98H12.9658H12.9517H12.9375H12.9233H12.9091H12.8949H12.8807H12.8664H12.8522H12.8379H12.8235H12.8092H12.7949H12.7805H12.7661H12.7517H12.7373H12.7228H12.7084H12.6939H12.6794H12.6649H12.6503H12.6358H12.6212H12.6066H12.592H12.5774H12.5628H12.5481H12.5334H12.5187H12.504H12.4893H12.4745H12.4598H12.445H12.4302H12.4153H12.4005H12.3856H12.3708H12.3559H12.341H12.326H12.3111H12.2961H12.2811H12.2661H12.2511H12.2361H12.221H12.206H12.1909H12.1758H12.1607H12.1455H12.1304H12.1152H12.1H12.0848H12.0696H12.0543H12.0391H12.0238H12.0085H11.9932H11.9779H11.9625H11.9472H11.9318H11.9164H11.901H11.8856H11.8701H11.8546H11.8392H11.8237H11.8082H11.7926H11.7771H11.7615H11.7459H11.7303H11.7147H11.6991H11.6835H11.6678H11.6521H11.6364C11.5749 37.9268 11.5135 37.934 11.4536 37.9483C10.3837 38.2036 9.56976 37.8983 8.95292 37.4065C8.36325 36.9364 7.95954 36.2949 7.75753 35.8188V27.8906C7.75753 27.4491 7.40231 27.0912 6.96412 27.0912H3.98322C4.86956 24.8124 6.39384 20.9101 7.70078 17.6183C7.73527 17.5315 7.75435 17.4392 7.75717 17.3457C7.92598 11.7331 10.2802 8.21896 13.1161 6.07008C15.9852 3.89603 19.3892 3.09163 21.6228 3.02174L21.5735 1.42383Z" fill="#F7F7F8" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M29.0114 1.44615C26.561 1.58602 23.2258 2.40318 20.2274 4.45543C16.8412 6.77311 13.9176 10.6465 13.1836 16.7823L14.7595 16.9736C15.4365 11.3146 18.0978 7.846 21.1196 5.77768C23.9119 3.8665 27.0399 3.1345 29.2492 3.03462C31.481 3.16153 34.7221 3.98717 37.472 6.07027C40.3088 8.21915 42.6638 11.7333 42.8326 17.3458C42.8354 17.4393 42.8545 17.5316 42.889 17.6185C44.1964 20.9103 45.7211 24.8125 46.6077 27.0913H43.6259C43.1876 27.0913 42.8323 27.4492 42.8323 27.8907V35.8189C42.6302 36.295 42.2264 36.9365 41.6365 37.4066C41.0195 37.8983 40.2053 38.2036 39.1351 37.9483C39.0751 37.934 39.0138 37.9268 38.9522 37.9268H38.9365H38.9208H38.9051H38.8895H38.8738H38.8582H38.8426H38.827H38.8115H38.7959H38.7804H38.7649H38.7494H38.7339H38.7184H38.703H38.6875H38.6721H38.6567H38.6413H38.626H38.6106H38.5953H38.58H38.5647H38.5494H38.5341H38.5189H38.5037H38.4884H38.4733H38.4581H38.4429H38.4278H38.4126H38.3975H38.3825H38.3674H38.3523H38.3373H38.3223H38.3073H38.2923H38.2773H38.2624H38.2474H38.2325H38.2176H38.2027H38.1879H38.173H38.1582H38.1434H38.1286H38.1138H38.0991H38.0843H38.0696H38.0549H38.0402H38.0256H38.0109H37.9963H37.9817H37.9671H37.9525H37.9379H37.9234H37.9089H37.8944H37.8799H37.8654H37.851H37.8366H37.8221H37.8078H37.7934H37.779H37.7647H37.7504H37.7361H37.7218H37.7075H37.6933H37.6791H37.6649H37.6507H37.6365H37.6224H37.6082H37.5941H37.58H37.5659H37.5519H37.5378H37.5238H37.5098H37.4959H37.4819H37.4679H37.454H37.4401H37.4262H37.4124H37.3985H37.3847H37.3709H37.3571H37.3433H37.3296H37.3159H37.3021H37.2885H37.2748H37.2611H37.2475H37.2339H37.2203H37.2067H37.1932H37.1796H37.1661H37.1526H37.1391H37.1257H37.1122H37.0988H37.0854H37.0721H37.0587H37.0454H37.032H37.0187H37.0055H36.9922H36.979H36.9658H36.9526H36.9394H36.9262H36.9131H36.9H36.8869H36.8738H36.8607H36.8477H36.8347H36.8217H36.8087H36.7958H36.7828H36.7699H36.757H36.7442H36.7313H36.7185H36.7057H36.6929H36.6801H36.6674H36.6546H36.6419H36.6292H36.6166H36.6039H36.5913H36.5787H36.5661H36.5536H36.541H36.5285H36.516H36.5035H36.4911H36.4786H36.4662H36.4538H36.4415H36.4291H36.4168H36.4045H36.3922H36.3799H36.3677H36.3554H36.3433H36.3311H36.3189H36.3068H36.2947H36.2826H36.2705H36.2584H36.2464H36.2344H36.2224H36.2105H36.1985H36.1866H36.1747H36.1628H36.151H36.1391H36.1273H36.1155H36.1038H36.092H36.0803H36.0686H36.0569H36.0452H36.0336H36.022H36.0104H35.9988H35.9873H35.9758H35.9643H35.9528H35.9413H35.9299H35.9185H35.9071H35.8957H35.8844H35.873H35.8617H35.8504H35.8392H35.828H35.8167H35.8056H35.7944H35.7832H35.7721H35.761H35.75H35.7389H35.7279H35.7169H35.7059H35.6949H35.684H35.6731H35.6622H35.6513H35.6405H35.6296H35.6188H35.6081H35.5973H35.5866H35.5759H35.5652H35.5545H35.5439H35.5333H35.5227H35.5121H35.5016H35.491H35.4805H35.4701H35.4596H35.4492H35.4388H35.4284H35.418H35.4077H35.3974H35.3871H35.3768H35.3666H35.3564H35.3462H35.336H35.3259H35.3158H35.3057H35.2956H35.2855H35.2755H35.2655H35.2555H35.2456H35.2357H35.2258H35.2159H35.206H35.1962H35.1864H35.1766H35.1668H35.1571H35.1474H35.1377H35.128H35.1184H35.1088H35.0992H35.0896H35.0801H35.0706H35.0611H35.0516H35.0422H35.0328H35.0234H35.014H35.0047H34.9953H34.9861H34.9768H34.9675H34.9583H34.9491H34.94H34.9308H34.9217H34.9126H34.9035H34.8945H34.8855H34.8765H34.8675H34.8586H34.8496H34.8407H34.8319H34.823H34.8142H34.8054H34.7967H34.7879H34.7792H34.7705H34.7618H34.7532H34.7446H34.736H34.7274H34.7189H34.7104H34.7019H34.6934H34.685H34.6766H34.6682H34.6598H34.6515H34.6432H34.6349H34.6267H34.6184H34.6102H34.602H34.5939H34.5858H34.5777H34.5696H34.5616H34.5535H34.5455H34.5376H34.5296H34.5217H34.5138H34.5059H34.4981H34.4903H34.4825H34.4747H34.467H34.4593H34.4516H34.444H34.4363H34.4287H34.4212H34.4136H34.4061H34.3986H34.3911H34.3837H34.3763H34.3689H34.3615H34.3542H34.3469H34.3396H34.3324H34.3251H34.3179H34.3108H34.3036H34.2965H34.2894H34.2823H34.2753H34.2683H34.2613H34.2544H34.2474H34.2405H34.2337H34.2268H34.22H34.2132H34.2064H34.1997H34.193H34.1863H34.1796H34.173H34.1664H34.1598H34.1533H34.1468H34.1403H34.1338H34.1274H34.121H34.1146H34.1083H34.1019H34.0956H34.0894H34.0831H34.0769H34.0707H34.0646H34.0584H34.0523H34.0463H34.0402H34.0342H34.0282H34.0223H34.0163H34.0104H34.0045H33.9987H33.9929H33.9871H33.9813H33.9756H33.9699H33.9642H33.9586H33.9529H33.9473H33.9418H33.9362H33.9307H33.9253H33.9198H33.9144H33.909H33.9036H33.8983H33.893H33.8877H33.8825H33.8773H33.8721H33.8669H33.8618H33.8567H33.8516H33.8465H33.8415H33.8365H33.8316H33.8267H33.8218H33.8169H33.812H33.8072H33.8024H33.7977H33.793H33.7883H33.7836H33.779H33.7744H33.7698H33.7652H33.7607H33.7562H33.7518H33.7473H33.7429H33.7386H33.7342H33.7299H33.7256H33.7214H33.7171H33.7129H33.7088H33.7046H33.7005H33.6965H33.6924H33.6884H33.6844H33.6805H33.6765H33.6727H33.6688H33.665H33.6611V39.5255H33.665H33.6688H33.6727H33.6765H33.6805H33.6844H33.6884H33.6924H33.6965H33.7005H33.7046H33.7088H33.7129H33.7171H33.7214H33.7256H33.7299H33.7342H33.7386H33.7429H33.7473H33.7518H33.7562H33.7607H33.7652H33.7698H33.7744H33.779H33.7836H33.7883H33.793H33.7977H33.8024H33.8072H33.812H33.8169H33.8218H33.8267H33.8316H33.8365H33.8415H33.8465H33.8516H33.8567H33.8618H33.8669H33.8721H33.8773H33.8825H33.8877H33.893H33.8983H33.9036H33.909H33.9144H33.9198H33.9253H33.9307H33.9362H33.9418H33.9473H33.9529H33.9586H33.9642H33.9699H33.9756H33.9813H33.9871H33.9929H33.9987H34.0045H34.0104H34.0163H34.0223H34.0282H34.0342H34.0402H34.0463H34.0523H34.0584H34.0646H34.0707H34.0769H34.0831H34.0894H34.0956H34.1019H34.1083H34.1146H34.121H34.1274H34.1338H34.1403H34.1468H34.1533H34.1598H34.1664H34.173H34.1796H34.1863H34.193H34.1997H34.2064H34.2132H34.22H34.2268H34.2337H34.2405H34.2474H34.2544H34.2613H34.2683H34.2753H34.2823H34.2894H34.2965H34.3036H34.3108H34.3179H34.3251H34.3324H34.3396H34.3469H34.3542H34.3615H34.3689H34.3763H34.3837H34.3911H34.3986H34.4061H34.4136H34.4212H34.4287H34.4363H34.444H34.4516H34.4593H34.467H34.4747H34.4825H34.4903H34.4981H34.5059H34.5138H34.5217H34.5296H34.5376H34.5455H34.5535H34.5616H34.5696H34.5777H34.5858H34.5939H34.602H34.6102H34.6184H34.6267H34.6312V47.9629H35.8657V39.5255H35.873H35.8844H35.8957H35.9071H35.9185H35.9299H35.9413H35.9528H35.9643H35.9758H35.9873H35.9988H36.0104H36.022H36.0336H36.0452H36.0569H36.0686H36.0803H36.092H36.1038H36.1155H36.1273H36.1391H36.151H36.1628H36.1747H36.1866H36.1985H36.2105H36.2224H36.2344H36.2464H36.2584H36.2705H36.2826H36.2947H36.3068H36.3189H36.3311H36.3433H36.3554H36.3677H36.3799H36.3922H36.4045H36.4168H36.4291H36.4415H36.4538H36.4662H36.4786H36.4911H36.5035H36.516H36.5285H36.541H36.5536H36.5661H36.5787H36.5913H36.6039H36.6166H36.6292H36.6419H36.6546H36.6674H36.6801H36.6929H36.7057H36.7185H36.7313H36.7442H36.757H36.7699H36.7828H36.7958H36.8087H36.8217H36.8347H36.8477H36.8607H36.8738H36.8869H36.9H36.9131H36.9262H36.9394H36.9526H36.9658H36.979H36.9922H37.0055H37.0187H37.032H37.0454H37.0587H37.0721H37.0854H37.0988H37.1122H37.1257H37.1391H37.1526H37.1661H37.1796H37.1932H37.2067H37.2203H37.2339H37.2475H37.2611H37.2748H37.2885H37.3021H37.3159H37.3296H37.3433H37.3571H37.3709H37.3847H37.3985H37.4124H37.4262H37.4401H37.454H37.4679H37.4819H37.4959H37.5098H37.5238H37.5378H37.5519H37.5659H37.58H37.5941H37.6082H37.6224H37.6365H37.6507H37.6649H37.6791H37.6933H37.7075H37.7218H37.7361H37.7504H37.7647H37.779H37.7934H37.8078H37.8221H37.8366H37.851H37.8654H37.8799H37.8944H37.9089H37.9234H37.9379H37.9525H37.9671H37.9817H37.9963H38.0109H38.0256H38.0402H38.0549H38.0696H38.0843H38.0991H38.1138H38.1286H38.1434H38.1582H38.173H38.1879H38.2027H38.2176H38.2325H38.2474H38.2624H38.2773H38.2923H38.3073H38.3223H38.3373H38.3523H38.3674H38.3825H38.3975H38.4126H38.4278H38.4429H38.4581H38.4733H38.4884H38.5037H38.5189H38.5341H38.5494H38.5647H38.58H38.5953H38.6106H38.626H38.6413H38.6567H38.6721H38.6875H38.703H38.7184H38.7339H38.7494H38.7649H38.7804H38.7959H38.8115H38.827H38.8426H38.8582H38.8632C40.4305 39.8693 41.7004 39.3943 42.6215 38.6602C43.5339 37.933 44.1082 36.9542 44.369 36.2535C44.4024 36.1638 44.4196 36.0687 44.4196 35.9729V28.69H47.7705C48.0328 28.69 48.2781 28.5596 48.4259 28.3415C48.5738 28.1234 48.6052 27.8458 48.5098 27.5998C47.7827 25.7251 45.9569 21.0406 44.4145 17.1549C44.1948 11.1246 41.6123 7.20619 38.4261 4.79264C35.5862 2.64138 32.2992 1.70732 29.8493 1.47718L29.8496 1.42407C29.6599 1.42287 29.4626 1.42613 29.2586 1.43419C29.1752 1.42995 29.093 1.42657 29.012 1.42404L29.0114 1.44615ZM36.1989 19.1857C35.8245 22.5039 34.5923 25.4811 33.3185 28.5589C33.2069 28.8286 33.0949 29.099 32.9832 29.3705C31.612 32.7036 30.2855 36.1804 30.2855 40.1476V40.151V40.1544V40.158V40.1616V40.1654V40.1692V40.1731V40.1771V40.1812V40.1854V40.1896V40.194V40.1984V40.2029V40.2076V40.2123V40.217V40.2219V40.2269V40.2319V40.237V40.2423V40.2476V40.2529V40.2584V40.2639V40.2696V40.2753V40.2811V40.287V40.2929V40.299V40.3051V40.3113V40.3176V40.324V40.3304V40.3369V40.3435V40.3502V40.357V40.3638V40.3708V40.3778V40.3848V40.392V40.3992V40.4066V40.4139V40.4214V40.429V40.4366V40.4443V40.452V40.4599V40.4678V40.4758V40.4839V40.492V40.5002V40.5085V40.5169V40.5253V40.5339V40.5424V40.5511V40.5598V40.5686V40.5775V40.5864V40.5955V40.6045V40.6137V40.6229V40.6322V40.6416V40.651V40.6605V40.6701V40.6797V40.6894V40.6992V40.709V40.719V40.7289V40.739V40.7491V40.7593V40.7695V40.7798V40.7902V40.8006V40.8111V40.8217V40.8323V40.843V40.8538V40.8646V40.8755V40.8864V40.8974V40.9085V40.9196V40.9308V40.9421V40.9534V40.9648V40.9762V40.9877V40.9993V41.0109V41.0226V41.0343V41.0461V41.058V41.0699V41.0818V41.0939V41.1059V41.1181V41.1303V41.1425V41.1549V41.1672V41.1796V41.1921V41.2047V41.2172V41.2299V41.2426V41.2553V41.2681V41.281V41.2939V41.3069V41.3199V41.333V41.3461V41.3593V41.3725V41.3858V41.3991V41.4125V41.4259V41.4394V41.4529V41.4665V41.4801V41.4938V41.5075V41.5213V41.5351V41.5489V41.5629V41.5768V41.5908V41.6049V41.619V41.6331V41.6473V41.6616V41.6759V41.6902V41.7046V41.719V41.7334V41.748V41.7625V41.7771V41.7917V41.8064V41.8211V41.8359V41.8507V41.8656V41.8804V41.8954V41.9103V41.9254V41.9404V41.9555V41.9706V41.9858V42.001V42.0163V42.0316V42.0469V42.0622V42.0776V42.0931V42.1086V42.1241V42.1396V42.1552V42.1708V42.1865V42.2022V42.2179V42.2337V42.2495V42.2653V42.2812V42.2971V42.313V42.3289V42.345V42.361V42.377V42.3931V42.4093V42.4254V42.4416V42.4578V42.4741V42.4904V42.5067V42.523V42.5394V42.5558V42.5722V42.5887V42.6052V42.6217V42.6382V42.6548V42.6714V42.688V42.7047V42.7214V42.7381V42.7548V42.7715V42.7883V42.8051V42.822V42.8388V42.8557V42.8726V42.8895V42.9065V42.9234V42.9404V42.9575V42.9745V42.9916V43.0086V43.0258V43.0429V43.06V43.0772V43.0944V43.1116V43.1288V43.1461V43.1633V43.1806V43.1979V43.2152V43.2326V43.2499V43.2673V43.2847V43.3021V43.3195V43.337V43.3545V43.3719V43.3894V43.4069V43.4244V43.442V43.4595V43.4771V43.4947V43.5122V43.5299V43.5475V43.5651V43.5827V43.6004V43.6181V43.6357V43.6534V43.6711V43.6888V43.7066V43.7243V43.742V43.7598V43.7775V43.7953V43.8131V43.8309V43.8487V43.8665V43.8843V43.9021V43.9199V43.9377V43.9556V43.9734V43.9913V44.0091V44.027V44.0448V44.0627V44.0806V44.0985V44.1163V44.1342V44.1521V44.17V44.1879V44.2058V44.2237V44.2416V44.2595V44.2774V44.2953V44.3132V44.3311V44.349V44.367V44.3849V44.4028V44.4207V44.4386V44.4565V44.4744V44.4923V44.5102V44.5281V44.546V44.5639V44.5817V44.5996V44.6175V44.6354V44.6532V44.6711V44.689V44.7068V44.7247V44.7425V44.7604V44.7782V44.796V44.8138V44.8316V44.8494V44.8672V44.885V44.9028V44.9206V44.9383V44.9561V44.9738V44.9915V45.0093V45.027V45.0447V45.0624V45.08V45.0977V45.1154V45.133V45.1506V45.1683V45.1859V45.2035V45.221V45.2386V45.2561V45.2737V45.2912V45.3087V45.3262V45.3437V45.3611V45.3786V45.396V45.4134V45.4308V45.4482V45.4656V45.4829V45.5002V45.5175V45.5348V45.5521V45.5693V45.5866V45.6038V45.621V45.6381V45.6553V45.6724V45.6895V45.7066V45.7237V45.7407V45.7577V45.7747V45.7917V45.8087V45.8256V45.8425V45.8594V45.8762V45.8931V45.9099V45.9267V45.9434V45.9601V45.9768V45.9935V46.0102V46.0268V46.0434V46.06V46.0765V46.093V46.1095V46.126V46.1424V46.1588V46.1752V46.1916V46.2079V46.2242V46.2404V46.2566V46.2728V46.289V46.3051V46.3212V46.3373V46.3533V46.3693V46.3853V46.4012V46.4171V46.433V46.4488V46.4646V46.4804V46.4961V46.5118V46.5275V46.5431V46.5587V46.5743V46.5898V46.6052V46.6207V46.6361V46.6515V46.6668V46.6821V46.6973V46.7126V46.7277V46.7429V46.758V46.773V46.788V46.803V46.8179V46.8328V46.8477V46.8625V46.8773V46.892V46.9067V46.9213V46.9359V46.9505V46.965V46.9794V46.9939V47.0082V47.0226V47.0369V47.0511V47.0653V47.0795V47.0936V47.1076V47.1216V47.1356V47.1495V47.1634V47.1772V47.191V47.2047V47.2184V47.232V47.2456V47.2592V47.2726V47.2861V47.2994V47.3128V47.3261V47.3393V47.3525V47.3656V47.3787V47.3917V47.4047V47.4176V47.4304H31.8728V47.4176V47.4047V47.3917V47.3787V47.3656V47.3525V47.3393V47.3261V47.3128V47.2994V47.2861V47.2726V47.2592V47.2456V47.232V47.2184V47.2047V47.191V47.1772V47.1634V47.1495V47.1356V47.1216V47.1076V47.0936V47.0795V47.0653V47.0511V47.0369V47.0226V47.0082V46.9939V46.9794V46.965V46.9505V46.9359V46.9213V46.9067V46.892V46.8773V46.8625V46.8477V46.8328V46.8179V46.803V46.788V46.773V46.758V46.7429V46.7277V46.7126V46.6973V46.6821V46.6668V46.6515V46.6361V46.6207V46.6052V46.5898V46.5743V46.5587V46.5431V46.5275V46.5118V46.4961V46.4804V46.4646V46.4488V46.433V46.4171V46.4012V46.3853V46.3693V46.3533V46.3373V46.3212V46.3051V46.289V46.2728V46.2566V46.2404V46.2242V46.2079V46.1916V46.1752V46.1588V46.1424V46.126V46.1095V46.093V46.0765V46.06V46.0434V46.0268V46.0102V45.9935V45.9768V45.9601V45.9434V45.9267V45.9099V45.8931V45.8762V45.8594V45.8425V45.8256V45.8087V45.7917V45.7747V45.7577V45.7407V45.7237V45.7066V45.6895V45.6724V45.6553V45.6381V45.621V45.6038V45.5866V45.5693V45.5521V45.5348V45.5175V45.5002V45.4829V45.4656V45.4482V45.4308V45.4134V45.396V45.3786V45.3611V45.3437V45.3262V45.3087V45.2912V45.2737V45.2561V45.2386V45.221V45.2035V45.1859V45.1683V45.1506V45.133V45.1154V45.0977V45.08V45.0624V45.0447V45.027V45.0093V44.9915V44.9738V44.9561V44.9383V44.9206V44.9028V44.885V44.8672V44.8494V44.8316V44.8138V44.796V44.7782V44.7604V44.7425V44.7247V44.7068V44.689V44.6711V44.6532V44.6354V44.6175V44.5996V44.5817V44.5639V44.546V44.5281V44.5102V44.4923V44.4744V44.4565V44.4386V44.4207V44.4028V44.3849V44.367V44.349V44.3311V44.3132V44.2953V44.2774V44.2595V44.2416V44.2237V44.2058V44.1879V44.17V44.1521V44.1342V44.1163V44.0985V44.0806V44.0627V44.0448V44.027V44.0091V43.9913V43.9734V43.9556V43.9377V43.9199V43.9021V43.8843V43.8665V43.8487V43.8309V43.8131V43.7953V43.7775V43.7598V43.742V43.7243V43.7066V43.6888V43.6711V43.6534V43.6357V43.6181V43.6004V43.5827V43.5651V43.5475V43.5299V43.5122V43.4947V43.4771V43.4595V43.442V43.4244V43.4069V43.3894V43.3719V43.3545V43.337V43.3195V43.3021V43.2847V43.2673V43.2499V43.2326V43.2152V43.1979V43.1806V43.1633V43.1461V43.1288V43.1116V43.0944V43.0772V43.06V43.0429V43.0258V43.0086V42.9916V42.9745V42.9575V42.9404V42.9234V42.9065V42.8895V42.8726V42.8557V42.8388V42.822V42.8051V42.7883V42.7715V42.7548V42.7381V42.7214V42.7047V42.688V42.6714V42.6548V42.6382V42.6217V42.6052V42.5887V42.5722V42.5558V42.5394V42.523V42.5067V42.4904V42.4741V42.4578V42.4416V42.4254V42.4093V42.3931V42.377V42.361V42.345V42.3289V42.313V42.2971V42.2812V42.2653V42.2495V42.2337V42.2179V42.2022V42.1865V42.1708V42.1552V42.1396V42.1241V42.1086V42.0931V42.0776V42.0622V42.0469V42.0316V42.0163V42.001V41.9858V41.9706V41.9555V41.9404V41.9254V41.9103V41.8954V41.8804V41.8656V41.8507V41.8359V41.8211V41.8064V41.7917V41.7771V41.7625V41.748V41.7334V41.719V41.7046V41.6902V41.6759V41.6616V41.6473V41.6331V41.619V41.6049V41.5908V41.5768V41.5629V41.5489V41.5351V41.5213V41.5075V41.4938V41.4801V41.4665V41.4529V41.4394V41.4259V41.4125V41.3991V41.3858V41.3725V41.3593V41.3461V41.333V41.3199V41.3069V41.2939V41.281V41.2681V41.2553V41.2426V41.2299V41.2172V41.2047V41.1921V41.1796V41.1672V41.1549V41.1425V41.1303V41.1181V41.1059V41.0939V41.0818V41.0699V41.058V41.0461V41.0343V41.0226V41.0109V40.9993V40.9877V40.9762V40.9648V40.9534V40.9421V40.9308V40.9196V40.9085V40.8974V40.8864V40.8755V40.8646V40.8538V40.843V40.8323V40.8217V40.8111V40.8006V40.7902V40.7798V40.7695V40.7593V40.7491V40.739V40.7289V40.719V40.709V40.6992V40.6894V40.6797V40.6701V40.6605V40.651V40.6416V40.6322V40.6229V40.6137V40.6045V40.5955V40.5864V40.5775V40.5686V40.5598V40.5511V40.5424V40.5339V40.5253V40.5169V40.5085V40.5002V40.492V40.4839V40.4758V40.4678V40.4599V40.452V40.4443V40.4366V40.429V40.4214V40.4139V40.4066V40.3992V40.392V40.3848V40.3778V40.3708V40.3638V40.357V40.3502V40.3435V40.3369V40.3304V40.324V40.3176V40.3113V40.3051V40.299V40.2929V40.287V40.2811V40.2753V40.2696V40.2639V40.2584V40.2529V40.2476V40.2423V40.237V40.2319V40.2269V40.2219V40.217V40.2123V40.2076V40.2029V40.1984V40.194V40.1896V40.1854V40.1812V40.1771V40.1731V40.1692V40.1654V40.1616V40.158V40.1544V40.151V40.1476C31.8728 36.5301 33.078 33.3165 34.4496 29.9825C34.5637 29.7052 34.679 29.427 34.7948 29.1475L34.7949 29.1474C36.056 26.1043 37.375 22.9214 37.7761 19.3662L36.1989 19.1857Z" fill="#F7F7F8" />
                                    <path d="M28.1541 18.1604C28.1541 19.7386 26.9356 21.0181 25.4325 21.0181C23.9294 21.0181 22.7109 19.7386 22.7109 18.1604C22.7109 16.5822 23.9294 15.3027 25.4325 15.3027C26.9356 15.3027 28.1541 16.5822 28.1541 18.1604ZM23.7996 18.1604C23.7996 19.1073 24.5307 19.875 25.4325 19.875C26.3344 19.875 27.0655 19.1073 27.0655 18.1604C27.0655 17.2135 26.3344 16.4458 25.4325 16.4458C24.5307 16.4458 23.7996 17.2135 23.7996 18.1604Z" fill="#800180" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M26.8924 11.7131C26.428 10.3313 24.4378 10.3313 23.9735 11.7131C23.6792 12.5888 22.6612 13.003 21.8226 12.5881C20.4994 11.9335 19.0921 13.3157 19.7586 14.6153C20.181 15.4389 19.7593 16.4387 18.8677 16.7277C17.4608 17.1838 17.4608 19.1385 18.8677 19.5945C19.7593 19.8836 20.181 20.8834 19.7586 21.707C19.0921 23.0066 20.4994 24.3887 21.8226 23.7341C22.6612 23.3193 23.6792 23.7334 23.9735 24.6091C24.4378 25.9909 26.428 25.9909 26.8924 24.6091C27.1867 23.7334 28.2047 23.3193 29.0433 23.7341C30.3665 24.3887 31.7738 23.0066 31.1073 21.707C30.6849 20.8834 31.1065 19.8836 31.9982 19.5945C33.4051 19.1385 33.4051 17.1838 31.9982 16.7277C31.1065 16.4387 30.6849 15.4389 31.1073 14.6153C31.7738 13.3157 30.3665 11.9335 29.0433 12.5881C28.2047 13.003 27.1867 12.5888 26.8924 11.7131ZM25.4329 22.9571C28.1298 22.9571 30.3161 20.8099 30.3161 18.1611C30.3161 15.5124 28.1298 13.3652 25.4329 13.3652C22.736 13.3652 20.5497 15.5124 20.5497 18.1611C20.5497 20.8099 22.736 22.9571 25.4329 22.9571Z" fill="#800180" />
                                </svg>
                            </div>
                            <div className="og-card-text">
                                <div className="og-card-heading">
                                    Anyone can do it!
                                </div>
                                <p className="og-card-about">
                                    IT or Non-IT background? Companies are seeking the right skills for their teams
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="og-right">
                    <div className="guarantee-img-before"></div>
                    <img src={GuaranteeCard} alt="One Guarantee Card" className='guarantee-img' />
                    <div className="guarantee-img-after"></div>
                </div>
            </div>
        </section>
    );
}

export default OneGuarantee;