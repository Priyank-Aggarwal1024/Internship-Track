import React from 'react';
import '../../styles/hero.css'
import ApplyBtn from '../../components/reusable/ApplyBtn';
function Hero(props) {
    return (
        <section className="int-track-section int-track-hero-section">

            <div className="int-track-hero-left">
                <div className="int-track-hero-left-top">
                    <div className="int-track-hero-left-iit int-track-text-pink">An IIT Delhi Alumni Initiative</div>
                    <h1 className="int-track-main-heading int-track-wood-smoke-950 int-track-fw-600">
                        Learn Full Stack Web Development with <span className="int-track-text-light-pink int-track-fw-700"> Guaranteed Internship</span>
                    </h1>
                </div>
                <div className="int-track-hero-left-bottomm">
                    <div className="int-track-hero-left-bottom-card">
                        <div className="int-track-hlbc-card int-track-upskill">
                            <div className="int-track-hlbc-card-left">
                                <svg className='int-track-hero-left-svg' int-track-xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.625 18.6328C21.1406 18.8906 21.6055 19.207 22.0195 19.582C22.4336 19.957 22.7852 20.375 23.0742 20.8359C23.3633 21.2969 23.5898 21.7969 23.7539 22.3359C23.918 22.875 24 23.4297 24 24H22.5C22.5 23.3828 22.3828 22.8008 22.1484 22.2539C21.9141 21.707 21.5938 21.2305 21.1875 20.8242C20.7812 20.418 20.3008 20.0938 19.7461 19.8516C19.1914 19.6094 18.6094 19.4922 18 19.5C17.375 19.5 16.793 19.6172 16.2539 19.8516C15.7148 20.0859 15.2383 20.4062 14.8242 20.8125C14.4102 21.2188 14.0859 21.6992 13.8516 22.2539C13.6172 22.8086 13.5 23.3906 13.5 24H12C12 23.4297 12.0781 22.875 12.2344 22.3359C12.3906 21.7969 12.6172 21.2969 12.9141 20.8359C13.2109 20.375 13.5664 19.957 13.9805 19.582C14.3945 19.207 14.8594 18.8906 15.375 18.6328C14.7891 18.2109 14.332 17.6836 14.0039 17.0508C13.6758 16.418 13.5078 15.7344 13.5 15C13.5 14.3828 13.6172 13.8008 13.8516 13.2539C14.0859 12.707 14.4062 12.2305 14.8125 11.8242C15.2188 11.418 15.6953 11.0938 16.2422 10.8516C16.7891 10.6094 17.375 10.4922 18 10.5C18.6172 10.5 19.1992 10.6172 19.7461 10.8516C20.293 11.0859 20.7695 11.4062 21.1758 11.8125C21.582 12.2188 21.9062 12.6992 22.1484 13.2539C22.3906 13.8086 22.5078 14.3906 22.5 15C22.5 15.7344 22.3359 16.418 22.0078 17.0508C21.6797 17.6836 21.2188 18.2109 20.625 18.6328ZM18 18C18.4141 18 18.8008 17.9219 19.1602 17.7656C19.5195 17.6094 19.8398 17.3945 20.1211 17.1211C20.4023 16.8477 20.6172 16.5312 20.7656 16.1719C20.9141 15.8125 20.9922 15.4219 21 15C21 14.5859 20.9219 14.1992 20.7656 13.8398C20.6094 13.4805 20.3945 13.1602 20.1211 12.8789C19.8477 12.5977 19.5312 12.3828 19.1719 12.2344C18.8125 12.0859 18.4219 12.0078 18 12C17.5859 12 17.1992 12.0781 16.8398 12.2344C16.4805 12.3906 16.1602 12.6055 15.8789 12.8789C15.5977 13.1523 15.3828 13.4688 15.2344 13.8281C15.0859 14.1875 15.0078 14.5781 15 15C15 15.4141 15.0781 15.8008 15.2344 16.1602C15.3906 16.5195 15.6055 16.8398 15.8789 17.1211C16.1523 17.4023 16.4688 17.6172 16.8281 17.7656C17.1875 17.9141 17.5781 17.9922 18 18ZM12 18.9375C11.75 19.2266 11.5234 19.5273 11.3203 19.8398C11.1172 20.1523 10.9375 20.4883 10.7812 20.8477C10.3672 20.418 9.86719 20.0859 9.28125 19.8516C8.69531 19.6172 8.10156 19.5 7.5 19.5H3V4.5H1.5V21H10.7227C10.6133 21.2422 10.5234 21.4883 10.4531 21.7383C10.3828 21.9883 10.3242 22.2422 10.2773 22.5H0V3H3V1.5H7.5C8.1875 1.5 8.84766 1.60547 9.48047 1.81641C10.1133 2.02734 10.7031 2.34375 11.25 2.76562C11.7891 2.34375 12.375 2.02734 13.0078 1.81641C13.6406 1.60547 14.3047 1.5 15 1.5H19.5V3H22.5V10.5C22.0469 10.0547 21.5469 9.68359 21 9.38672V4.5H19.5V8.82422C19.25 8.75391 19 8.70312 18.75 8.67188C18.5 8.64062 18.25 8.625 18 8.625V3H15C14.4531 3 13.9219 3.09375 13.4062 3.28125C12.8906 3.46875 12.4219 3.74609 12 4.11328V18.9375ZM10.5 18.7852V4.11328C10.0781 3.75391 9.60938 3.48047 9.09375 3.29297C8.57812 3.10547 8.04688 3.00781 7.5 3H4.5V18H7.5C8.02344 18 8.53906 18.0664 9.04688 18.1992C9.55469 18.332 10.0391 18.5273 10.5 18.7852Z" fill="url(#paint0_linear_23_996)" fillOpacity="0.87" />
                                    <defs>
                                        <linearGradient id="paint0_linear_23_996" x1="6.27311" y1="-2.10585" x2="26.5241" y2="0.0263515" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#800080" />
                                            <stop offset="1" stopColor="#FF864C" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span className="int-track-f-18 int-track-fw-700 int-track-text-pink">Upskill</span>
                            </div>
                            <div className="int-track-hlbc-card-right">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
                                    <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0L0 9Z" fill="url(#paint0_linear_23_999)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_23_999" x1="18.25" y1="7.92427" x2="18.2541" y2="9.46614" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#800080" />
                                            <stop offset="0.206321" stopColor="#7E267E" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="int-track-hlbc-card int-track-intern">
                            <div className="int-track-hlbc-card-left">

                                <svg className='int-track-hero-left-svg' int-track-xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 20H13V22H6C4.89 22 4 21.11 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H18C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4V12.54L18.5 11.72L18 12V4H13V12L10.5 9.75L8 12V4H6V20ZM24 17L18.5 14L13 17L18.5 20L24 17ZM15 19.09V21.09L18.5 23L22 21.09V19.09L18.5 21L15 19.09Z" fill="url(#paint0_linear_23_1003)" fillOpacity="0.87" />
                                    <defs>
                                        <linearGradient id="paint0_linear_23_1003" x1="9.22759" y1="-1.36546" x2="26.1411" y2="0.224535" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#800080" />
                                            <stop offset="1" stopColor="#FF864C" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span className="int-track-f-18 int-track-fw-700 int-track-text-pink">Intern</span>
                            </div>
                            <div className="int-track-hlbc-card-right">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
                                    <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0L0 9Z" fill="url(#paint0_linear_23_999)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_23_999" x1="18.25" y1="7.92427" x2="18.2541" y2="9.46614" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#800080" />
                                            <stop offset="0.206321" stopColor="#7E267E" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="int-track-hlbc-card int-track-job-ready">
                            <div className="int-track-hlbc-card-left">

                                <svg className='int-track-hero-left-svg' int-track-xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.5 7C17.5 4.2385 15.0375 2 12 2C8.9625 2 6.5 4.2385 6.5 7M5 15V22H19V15M3.5 8C3.5 7.73478 3.60536 7.48043 3.79289 7.29289C3.98043 7.10536 4.23478 7 4.5 7H19.5C19.7652 7 20.0196 7.10536 20.2071 7.29289C20.3946 7.48043 20.5 7.73478 20.5 8V14C20.5 14.2652 20.3946 14.5196 20.2071 14.7071C20.0196 14.8946 19.7652 15 19.5 15H15C14.7348 15 14.4804 14.8946 14.2929 14.7071C14.1054 14.5196 14 14.2652 14 14C14 13.7348 13.8946 13.4804 13.7071 13.2929C13.5196 13.1054 13.2652 13 13 13H11C10.7348 13 10.4804 13.1054 10.2929 13.2929C10.1054 13.4804 10 13.7348 10 14C10 14.2652 9.89464 14.5196 9.70711 14.7071C9.51957 14.8946 9.26522 15 9 15H4.5C4.23478 15 3.98043 14.8946 3.79289 14.7071C3.60536 14.5196 3.5 14.2652 3.5 14V8Z" stroke="url(#paint0_linear_23_1009)" strokeOpacity="0.87" strokeWidth="1.91667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 13H14V16H10V13Z" stroke="url(#paint1_linear_23_1009)" strokeOpacity="0.87" strokeWidth="1.91667" strokeLinecap="round" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_23_1009" x1="7.94346" y1="-1.2052" x2="22.3456" y2="0.00316354" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#800080" />
                                            <stop offset="1" stopColor="#FF864C" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_23_1009" x1="11.0455" y1="12.5192" x2="14.4" y2="12.9607" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#800080" />
                                            <stop offset="1" stopColor="#FF864C" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span className="int-track-f-18 int-track-fw-700 int-track-text-pink">Job Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
                <ApplyBtn classes="" />

            </div>
            <div className="int-track-hero-right">
                <div className="int-track-hero-right-design int-track-large-hero-design">
                    <svg xmlns="http://www.w3.org/2000/svg" width="638" height="738" viewBox="0 0 638 738" fill="none">
                        <g opacity="0.7">
                            <path d="M211.604 -534.999C141.268 -447.911 86.4593 -349.691 50.3084 -245.946C14.1575 -142.202 -2.62803 -34.9648 0.910044 69.6418C4.4481 174.248 28.2407 274.176 70.9291 363.719C113.618 453.263 174.366 530.668 249.706 591.516C325.046 652.364 413.502 695.462 510.023 718.351C606.545 741.24 709.242 743.47 812.25 724.916C915.259 706.361 1016.56 667.384 1110.38 610.21C1204.19 553.037 1288.68 478.786 1359.01 391.698L785.308 -71.6508L211.604 -534.999Z" fill="url(#paint0_linear_23_934)" fillOpacity="0.3" />
                            <path d="M226.389 -523.059C157.865 -438.215 104.469 -342.526 69.2498 -241.455C34.0304 -140.384 17.6775 -35.9105 21.1244 66.0004C24.5713 167.911 47.7507 265.264 89.339 352.499C130.927 439.735 190.11 515.146 263.509 574.425C336.907 633.705 423.084 675.693 517.118 697.992C611.152 720.291 711.202 722.464 811.556 704.388C911.91 686.311 1010.6 648.339 1102 592.638C1193.4 536.938 1275.7 464.601 1344.23 379.757L785.308 -71.6508L226.389 -523.059Z" fill="url(#paint1_linear_23_934)" fillOpacity="0.3" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_23_934" x1="249.706" y1="591.516" x2="492.572" y2="338.014" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#800080" />
                                <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_23_934" x1="249.706" y1="591.516" x2="492.572" y2="338.014" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#800080" />
                                <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="int-track-hero-right-design int-track-small-hero-design">
                    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="577" viewBox="0 0 256 577" fill="none">
                        <g opacity="0.7">
                            <path d="M256.483 0.460217C213.823 12.283 173.594 31.2591 138.095 56.3052C102.595 81.3512 72.5201 111.977 49.5866 146.433C26.653 180.889 11.3101 218.502 4.43385 257.123C-2.44242 295.744 -0.717359 334.617 9.51052 371.522C19.7384 408.428 38.2688 442.644 64.0437 472.216C89.8186 501.788 122.333 526.138 159.731 543.874C197.129 561.61 238.678 572.386 282.006 575.587C325.333 578.787 369.591 574.349 412.252 562.527L334.367 281.493L256.483 0.460217Z" fill="url(#paint0_linear_23_1903)" fillOpacity="0.3" />
                            <path d="M258.491 7.70234C216.929 19.2205 177.737 37.7076 143.153 62.1082C108.568 86.5089 79.2681 116.345 56.9256 149.914C34.583 183.482 19.6355 220.125 12.9364 257.751C6.23737 295.376 7.91797 333.248 17.8823 369.202C27.8466 405.157 45.8994 438.491 71.0101 467.301C96.1208 496.111 127.798 519.833 164.232 537.112C200.666 554.392 241.144 564.89 283.355 568.008C325.566 571.126 368.683 566.802 410.245 555.284L334.367 281.493L258.491 7.70234Z" fill="url(#paint1_linear_23_1903)" fillOpacity="0.3" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_23_1903" x1="9.51052" y1="371.522" x2="145.952" y2="345.881" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#800080" />
                                <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_23_1903" x1="9.51052" y1="371.522" x2="145.952" y2="345.881" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#800080" />
                                <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="int-track-hero-right-series-1 int-track-hero-right-series">
                    <div className="int-track-hero-right-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <path d="M39.2 9C41.5869 9 43.8761 9.94821 45.564 11.636C47.2518 13.3239 48.2 15.6131 48.2 18V43.2C48.2004 45.2748 47.484 47.286 46.172 48.8932C44.8599 50.5005 43.0329 51.605 41 52.02V39.6C41 36.2583 39.6725 33.0534 37.3095 30.6905C34.9466 28.3275 31.7417 27 28.4 27H14C12.0668 27 10.238 27.432 8.6 28.2132V18C8.6 15.6131 9.54821 13.3239 11.236 11.636C12.9239 9.94821 15.2131 9 17.6 9H39.2ZM51.8 38.0952V23.148L61.772 14.8212C62.166 14.4931 62.6452 14.2839 63.1537 14.2181C63.6622 14.1523 64.1789 14.2327 64.6434 14.4499C65.1079 14.667 65.501 15.0119 65.7766 15.4443C66.0523 15.8766 66.1991 16.3785 66.2 16.8912V44.496C66.1992 45.0111 66.051 45.5153 65.7729 45.949C65.4948 46.3826 65.0985 46.7277 64.6307 46.9434C64.1629 47.1591 63.6432 47.2365 63.1328 47.1665C62.6224 47.0964 62.1428 46.8818 61.7504 46.548L51.8 38.0952ZM5 39.6C5 37.2131 5.94821 34.9239 7.63604 33.236C9.32387 31.5482 11.6131 30.6 14 30.6H28.4C30.7869 30.6 33.0761 31.5482 34.764 33.236C36.4518 34.9239 37.4 37.2131 37.4 39.6V54C37.4 56.3869 36.4518 58.6761 34.764 60.364C33.0761 62.0518 30.7869 63 28.4 63H14C11.6131 63 9.32387 62.0518 7.63604 60.364C5.94821 58.6761 5 56.3869 5 54V39.6ZM19.472 39.7224C19.2388 39.5614 18.9675 39.4644 18.6852 39.441C18.4028 39.4176 18.1193 39.4687 17.8628 39.5892C17.6525 39.6818 17.4619 39.8137 17.3012 39.978C17.1335 40.147 17.001 40.3477 16.9114 40.5683C16.8218 40.7889 16.7769 41.0251 16.7792 41.2632V52.3332C16.7764 52.5719 16.8211 52.8088 16.9107 53.03C17.0003 53.2513 17.1331 53.4525 17.3012 53.622C17.4682 53.7838 17.6603 53.9175 17.87 54.018C18.2353 54.1854 18.6497 54.211 19.0328 54.09C19.1992 54.0363 19.3568 53.9587 19.5008 53.8596L27.7664 48.2184C28.0178 48.0526 28.2204 47.8227 28.3532 47.5524C28.4888 47.2797 28.5585 46.979 28.5567 46.6745C28.5548 46.37 28.4814 46.0702 28.3424 45.7992C28.1989 45.5335 27.991 45.3082 27.7376 45.144L19.472 39.7224Z" fill="url(#paint0_linear_23_964)" fillOpacity="0.87" />
                            <defs>
                                <linearGradient id="paint0_linear_23_964" x1="20.9964" y1="0.345961" x2="72.5637" y2="6.11474" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#800080" />
                                    <stop offset="1" stopColor="#FF864C" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className="int-track-hero-right-card-text int-track-f-16 int-track-fw-500 int-track-text-light-black">
                            <span className="int-track-fw-700">RECORDED LECTURES</span> with 1-1 Mentorship
                        </p>
                    </div>
                    <div className="int-track-hero-right-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <path d="M26.46 51L39 57.84V66H18C14.67 66 12 63.33 12 60V12C12 10.4087 12.6321 8.88258 13.7574 7.75736C14.8826 6.63214 16.4087 6 18 6H21V27L28.5 22.5L36 27V6H54C55.5913 6 57.1174 6.63214 58.2426 7.75736C59.3679 8.88258 60 10.4087 60 12V37.62L55.5 35.16L26.46 51ZM72 51L55.5 42L39 51L55.5 60L72 51ZM45 57.27V63.27L55.5 69L66 63.27V57.27L55.5 63L45 57.27Z" fill="url(#paint0_linear_23_969)" fillOpacity="0.87" />
                            <defs>
                                <linearGradient id="paint0_linear_23_969" x1="27.6828" y1="-4.09638" x2="78.4232" y2="0.673605" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#800080" />
                                    <stop offset="1" stopColor="#FF864C" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className="int-track-hero-right-card-text int-track-f-16 int-track-fw-500 int-track-text-light-black">
                            <span className="int-track-fw-700">Internship 100%</span> course completion

                        </p>
                    </div>
                </div>
                <div className="int-track-hero-right-series-2 int-track-hero-right-series">
                    <div className="int-track-hero-right-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <g clipPath="url(#clip0_23_975)">
                                <path d="M66.2422 25.6181C64.212 26.5555 61.9974 27.0258 59.7615 26.9945C57.5255 26.9632 55.325 26.431 53.3219 25.4371C51.3187 24.4432 49.5638 23.0128 48.1864 21.2513C46.8089 19.4898 45.8438 17.4418 45.3622 15.2581C42.4265 13.9066 39.234 13.204 36.0022 13.1981C30.4119 13.173 25.0075 15.2044 20.8178 18.9056C16.6282 22.6068 13.9458 27.7194 13.2812 33.2701C12.6167 38.8209 14.0165 44.4221 17.2141 49.0077C20.4117 53.5933 25.1839 56.843 30.6222 58.1381L30.0022 61.2581C23.8375 59.7555 18.4351 56.0505 14.8126 50.841C11.1902 45.6315 9.5978 39.2771 10.3355 32.975C11.0731 26.6728 14.0899 20.858 18.8175 16.6258C23.5451 12.3937 29.6571 10.0364 36.0022 9.99812C39.083 9.99801 42.1386 10.5536 45.0222 11.6381C45.0702 9.60594 45.533 7.60501 46.3822 5.75812C39.5148 3.38354 32.0451 3.40768 25.1932 5.8266C18.3412 8.24552 12.512 12.9163 8.65738 19.076C4.80281 25.2358 3.15073 32.5205 3.97097 39.7404C4.79122 46.9603 8.03531 53.6888 13.1734 58.8269C18.3115 63.965 25.04 67.2091 32.2599 68.0293C39.4798 68.8496 46.7645 67.1975 52.9243 63.3429C59.084 59.4884 63.7548 53.6591 66.1737 46.8071C68.5926 39.9552 68.6168 32.4855 66.2422 25.6181ZM48.4022 46.3581C48.2569 46.578 48.0696 46.7669 47.851 46.9142C47.6324 47.0614 47.3869 47.164 47.1286 47.216C46.8703 47.2681 46.6042 47.2685 46.3457 47.2174C46.0871 47.1663 45.8413 47.0646 45.6222 46.9181L33.8222 38.9181V21.4981C33.8222 20.9677 34.0329 20.459 34.408 20.0839C34.783 19.7088 35.2918 19.4981 35.8222 19.4981C36.3526 19.4981 36.8613 19.7088 37.2364 20.0839C37.6115 20.459 37.8222 20.9677 37.8222 21.4981V36.7981L47.8222 43.5781C48.0436 43.7218 48.2345 43.908 48.3836 44.1258C48.5328 44.3437 48.6373 44.5889 48.6912 44.8473C48.7452 45.1058 48.7474 45.3723 48.6978 45.6316C48.6482 45.8909 48.5477 46.1378 48.4022 46.3581Z" fill="url(#paint0_linear_23_975)" fillOpacity="0.87" />
                                <path d="M60 21.9988C65.5228 21.9988 70 17.5216 70 11.9988C70 6.47593 65.5228 1.99878 60 1.99878C54.4772 1.99878 50 6.47593 50 11.9988C50 17.5216 54.4772 21.9988 60 21.9988Z" fill="url(#paint1_linear_23_975)" fillOpacity="0.87" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_23_975" x1="20.5567" y1="-6.30048" x2="74.8341" y2="-0.942871" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#800080" />
                                    <stop offset="1" stopColor="#FF864C" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_23_975" x1="55.2276" y1="-1.20642" x2="72.1259" y2="0.461576" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#800080" />
                                    <stop offset="1" stopColor="#FF864C" />
                                </linearGradient>
                                <clipPath id="clip0_23_975">
                                    <rect width="72" height="72" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="int-track-hero-right-card-text int-track-f-16 int-track-fw-500 int-track-text-light-black">
                            <span className="int-track-fw-700">4-6 months Course Duration</span>{" "}dedication
                            10-15 hours/week
                        </p>
                    </div>
                    <div className="int-track-hero-right-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="73" height="72" viewBox="0 0 73 72" fill="none">
                            <path d="M36.5 66C53.069 66 66.5 52.569 66.5 36C66.5 19.431 53.069 6 36.5 6C19.931 6 6.5 19.431 6.5 36C6.5 52.569 19.931 66 36.5 66ZM41 24C41.984 25.308 42.689 26.838 43.025 28.5H48.5V33H43.025C42.5058 35.5408 41.1249 37.8243 39.116 39.4643C37.107 41.1042 34.5933 42 32 42H31.43L42.59 53.16L39.41 56.34L24.5 41.43V37.5H32C33.3962 37.5004 34.7582 37.0679 35.8983 36.2619C37.0384 35.456 37.9006 34.3164 38.366 33H24.5V28.5H38.366C37.9002 27.1839 37.038 26.0445 35.8979 25.2386C34.7579 24.4327 33.3961 24 32 24H24.5V19.5H48.5V24H41Z" fill="url(#paint0_linear_23_982)" fillOpacity="0.87" />
                            <defs>
                                <linearGradient id="paint0_linear_23_982" x1="22.1828" y1="-3.6156" x2="72.8777" y2="1.38839" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#800080" />
                                    <stop offset="1" stopColor="#FF864C" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className="int-track-hero-right-card-text int-track-f-16 int-track-fw-500 int-track-text-light-black">
                            <span className="int-track-fw-700">₹ 2,999/- </span>Life time course
                            access
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;