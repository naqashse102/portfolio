import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div className="parent-home">
            <div className="site-main">
                <div className="site-main-inner">
                    <div className="home-section">
                        <div className="home-section-inner">
                            <div className="home-heading">
                                Hi, I'm Naqash,
                            </div>

                            <h2 className="home-subheading">
                                a javascript software engineer specialized in<br />
                                both <strong>front-end and back-end</strong>.
                            </h2>

                            <div className="home-buttons">
                                <Link to={'/portfolio'} className="button button-outline button-white" >Portfolio</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Main