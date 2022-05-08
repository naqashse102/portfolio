import React from 'react'
import { Link } from 'react-router-dom'

function Cv() {
    return (
        <div className='cv'> <div className="cv-page h-resume">
            <div className="cv-page-inner">
                <div className="cv-section cv-header p-contact h-card">
                    <div className="cv-header-avatar cv-header-avatar-circle">
                        <img src={`${process.env.PUBLIC_URL}/images/ProfilePhoto.jpg`} alt="profilephoto" />
                    </div>
                    <div className="cv-header-text">
                        <h1 className="cv-header-name p-name">
                            Naqash Ahmad
                        </h1>
                        <h2 className="cv-header-subname p-title">Full-Stack Software Engineer</h2>
                        <div className="cv-header-lead p-note">
                            4+ years of successful experience in front-end and back-end.<br />
                            Highly motivated and organized individual to learn, grow while honing my skills and gaining
                            invaluable experience.<br />
                        </div>
                    </div>
                    <div className="cv-header-meta">
                        <div className="cv-header-meta-right">

                            <div className="cv-header-meta-row">
                                <Link to="/" rel="me" className="u-url">naqashse102</Link>
                            </div>
                            <div className="cv-header-meta-row">
                                <a href="mailto:naqash.ahmad@outlook.com" className="u-email"><span>naqash.ahmad@outlook.com</span></a>
                            </div>
                            <div className="cv-header-meta-row">
                                <a href="https://pk.linkedin.com/in/naqashse102">linkedin.com/in/naqashse102</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="cv-section">
                    <h3 className="cv-section-title">Skills</h3>
                    <div className="cv-section-content cv-section-content--indented">
                        <ul style={{marginTop: '0px'}}>
                            <li>
                                <strong>Web Technologies:</strong> HTML, CSS, Less, Sass, jQuery, Ajax, JSON, Bootstrap,
                                Flexbox
                            </li>
                            <li>
                                <strong>Libraries & Frameworks:</strong> React, Angular 8/+, Node, Flutter, Electron, Loopback,
                                Express, Knex.js, Sequelize.js, Firebase,
                                Mongoose, Socket.io, Dashcore-lib, Bitcore, Bcrypt.js, JWT.
                            </li>
                            <li>
                                <strong>Debugging Tool:</strong> Postman, IE Developer Toolbar, Chrome Developer Tools.
                            </li>
                            <li>
                                <strong>Version Control:</strong> GIT, Bit bucket, Heroku.
                            </li>
                            <li>
                                <strong>Database:</strong> MySQL, SQLite, MongoDB, Nedb, Redis.
                            </li>
                            <li>
                                <strong>Project Management Tools:</strong> JIRA, Trello, Slack.
                            </li>
                            <li>
                                <strong>DevOps:</strong> AWS EC2, SSH.
                            </li>
                            <li>
                                <strong>Open to evolving in: Flutter, Dart, Java, Python and many else.</strong>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="cv-section">
                    <h3 className="cv-section-title">Experience</h3>
                    <div className="cv-section-content">
                        <div className="cv-timeline">
                            <div className="cv-timeline-row p-experience h-event">
                                <div className="cv-timeline-side">
                                    <div className="cv-timeline-company">Smart IS</div>
                                    <div className="cv-timeline-date">Jul 2019 - (Continue)</div>
                                    <a href="https://www.smart-is.com/" target="_blank"
                                        className="cv-timeline-website" rel="noreferrer">smart-is.com</a>
                                </div>
                                <div className="cv-timeline-body p-summary">
                                    <h4 className="cv-timeline-position p-name">
                                        Full Stack Engineer
                                    </h4>
                                    <p>
                                        Built and maintained a workforce management platform,
                                        that helps companies to increase productivity & profits.
                                    </p>
                                    <ul>
                                        <li>
                                            Created a native mobile apps. (in Flutter)
                                        </li>
                                        <li>
                                            Created a responsive front-end web app. (in Angular, React, Nodejs)
                                        </li>
                                        <li>
                                            Developed unit and end-to-end tests for both front-end and
                                            back-end.
                                        </li>
                                        <li>
                                            Convinced the upper management to let the team use best available tools.
                                        </li>
                                        <li>
                                            Revised, modularized and updated old code bases to modern development standards,
                                            reducing operating costs and improving functionality.
                                        </li>
                                        <li>
                                            Contributed ideas and suggestions in team meetings and delivered updates on
                                            deadlines, designs and enhancements.
                                        </li>
                                    </ul>
                                    <p>
                                        Built a cross-platform mobile application (in Flutter) that allows user to
                                        book and manage different type of services (food, barber, saloon etc) using signle
                                        app.
                                    </p>
                                    <ul>
                                        <li>
                                            Actively helped manage, estimate and scope out the project.
                                        </li>
                                        <li>
                                            Developed unit and end-to-end tests for both front-end and
                                            back-end.
                                        </li>
                                        <li>
                                            Contributed ideas and suggestions in team meetings and delivered updates on
                                            deadlines, designs and enhancements.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="cv-timeline-row p-experience h-event">
                                <div className="cv-timeline-side">
                                    <div className="cv-timeline-company">Ideofuzoin</div>
                                    <div className="cv-timeline-date">Mar 2018 - Jun 2019</div>

                                    <a href="https://ideofuzion.com/" target="_blank"
                                        className="cv-timeline-website" rel="noreferrer">ideofuzion.com</a>

                                </div>
                                <div className="cv-timeline-body p-summary">
                                    <h4 className="cv-timeline-position p-name">
                                        Mean Stack Developer
                                    </h4>
                                    <ul>
                                        <li>
                                            Created multiple web applications using Angular, React, Nodejs, Koa, Express,
                                            Socket.io, participating in the whole
                                            process of their development: product design and estimation,
                                            code design and development, DevOps, UI/UX design, product
                                            launch and maintenance.
                                        </li>
                                        <li>
                                            Creatd desktop application for operating systems using Electron, Socket.io,
                                            including
                                            Windows, MacOS and Linux.
                                        </li>
                                        <li>
                                            Developed unit and end-to-end tests for both front-end and back-end.
                                        </li>
                                        <li>
                                            Collaborated with other developers to identify and alleviate number of bugs and
                                            errors in applications. Conducted unit testing to deliver optimal browser
                                            functionality
                                        </li>
                                        <li>
                                            Designed and executed security measures such as encryption and memory leaks.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="cv-section">
                    <h3 className="cv-section-title">Education</h3>
                    <div className="cv-section-content">
                        <div className="cv-timeline">
                            <div className="cv-timeline-row p-education h-event">
                                <div className="cv-timeline-side">
                                    <div className="cv-timeline-company">
                                        International Islamic University Islamabad
                                    </div>
                                    <div className="cv-timeline-date">2013 - 2018</div>
                                    <a href="https://iiu.edu.pk/default.htm" target="_blank"
                                        className="cv-timeline-website" rel="noreferrer">iiu.edu.pk</a>
                                </div>
                                <div className="cv-timeline-body p-summary">
                                    <div className="cv-timeline-position p-name">Bachelors in Software Engineering</div>
                                    <ul>
                                        <li>
                                            Organizer Software competition in ASCII 2016 at International Islamic University
                                            Islamabad. </li>
                                        <li>
                                            Got CGPA: 3.5 / 4.00
                                        </li>
                                        <li>
                                            Co-created the admission module for International Islamic University Islamabad.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="cv-section">
                    <h3 className="cv-section-title">Other perks</h3>
                    <div className="cv-section-content cv-section-content--indented">
                        <ul>
                            <li>
                                Traversing & Adventuring
                            </li>
                            <li>
                                Sports (Cricket)
                            </li>
                            <li>
                                Speaks native Punjabi, fluent urdu, conversational English.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Cv