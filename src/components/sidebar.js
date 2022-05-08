import React from 'react'

function Sidebar() {
    return (
        <aside className="site-sidebar">
            <div className="site-sidebar-inner h-card">
                <a href="/" rel="me" className="person u-url">
                    <div className="person-avatar u-photo">
                        <img src={`${process.env.PUBLIC_URL }/images/ProfilePhoto.jpg`} alt="" className="avatar" />
                    </div>
                    <div className="person-content">
                        <h1 className="person-title p-name">Naqash Ahmad</h1>
                        <h2 className="person-subtitle p-job-title p-note">full-stack software engineer</h2>
                    </div>
                </a>

                <nav className="block main-navigation">
                    <div className="navigation-extend-bar">
                        <div className="social-icons">
                            <a rel="me" href="mailto:naqash.ahmad@outlook.com"
                                className="button button-icon u-email" title="mail: naqash.ahmad@outlook.com">
                                <i className="fa fa-envelope"></i>
                            </a>

                            <a rel="me" href="https://www.linkedin.com/in/naqashse102" className="button button-icon"
                                title="linkedin: naqashse102">
                                <i className="fa fa-linkedin-square"></i>
                            </a>

                            <a rel="me" href="https://github.com/naqashse102" className="button button-icon"
                                title="github: naqashse102">
                                <i className="fa fa-github-square"></i>
                            </a>

                        </div>

                        {/* <a href="#" className="navigation-extend-button js-extend-main-navigation">
                            <i className="fa fa-bars"></i>
                        </a> */}
                    </div>

                    <div className="navigation-extendable">
                        <ul>
                            <li className=""><a href="/portfolio/">Portfolio</a></li>
                            <li className=""><a href="/cv/">My CV</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="block block-social">
                    <div className="block-title">Get in touch</div>
                    <div className="block-content">
                        <div className="social-icons">
                            <a rel="me" href="/cdn-cgi/l/email-protection#7b111a181e103b110f141655161e"
                                className="button button-icon u-email" title="mail: naqash.ahmad@outlook.com">
                                <i className="fa fa-envelope"></i>
                            </a>

                            <a rel="me" href="https://www.linkedin.com/in/naqashse102" className="button button-icon"
                                title="linkedin: naqashse102">
                                <i className="fa fa-linkedin-square"></i>
                            </a>

                            <a rel="me" href="https://github.com/naqashse102" className="button button-icon"
                                title="github: naqashse102">
                                <i className="fa fa-github-square"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar