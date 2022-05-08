import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
    return (
        <div className='parent-portfolio'><div className="site-main">
            <div className="site-main-inner">
                <div className="main-section portfolio-section">
                    <h1 className="main-title">Portfolio</h1>

                    <p>See my works below. Unless explicitly stated otherwise, <strong> I was a part of teams that have
                        created these awesome projects.</strong></p>

                    <div className="timeline portfolio-timeline">
                        <ul>
                            <li className="timeline_element project">
                                <div className="timeline_element-date">
                                    <time className="timeline_element-date-text">2020 - 2021</time>
                                </div>

                                <div className="timeline_element-contents">
                                    <div className="project-text">
                                        <Link to={'/portfolio/gharse'}  className="project-link">
                                        <div className="project-title">Gharse</div>
                                            <div className="project-subtitle">On-Demand home services mobile app
                                                <strong>(Done Solely)</strong>
                                            </div>
                                        </Link>
                                        <div className="project-description">

                                            <p><em>GharSe offers a marketplace to help deliver quality home-based covid-protected barber services in Pakistan.
                                                It turns home-based barbers into micro-entrepreneurs by connecting them with local
                                                clientele.</em></p>

                                            <ul>
                                                <li>Done solely</li>
                                                <li>Uses flutter to design frontend</li>
                                                <li>Firebase</li>
                                                <li>Backend written in NodeJs</li>
                                            </ul>

                                        </div>
                                        
                                        <Link to={'/portfolio/gharse'}  className="project-readmore button button-red">More details</Link>

                                        <div className="project-technologies">
                                            <div className="technologies-title">Technologies</div>
                                            <ul className="tech-tags">
                                                <li><a href='https://flutter.dev/' rel="nofollow noreferrer"
                                                    target='_blank'>Flutter</a>
                                                </li>
                                                <li><a href="https://nodejs.org/en/" rel="nofollow noreferrer" target='_blank'>Nodejs</a>
                                                </li>

                                                <li><a href="https://firebase.google.com/" rel="nofollow noreferrer"
                                                    target='_blank'>Firebase</a>
                                                </li>
                                                <li><a href="https://stripe.com/" rel="nofollow noreferrer"
                                                    target='_blank'>Stripe</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="project-image">
                                    <Link to={'/portfolio/gharse'}  ><img src={`${process.env.PUBLIC_URL}/images/gharse.png`} alt="gharseapp" /></Link>

                                    </div>

                                </div>
                            </li>

                            <li className="timeline_element project">
                                <div className="timeline_element-date">
                                    <time className="timeline_element-date-text">2018 - 2019</time>
                                </div>

                                <div className="timeline_element-contents">
                                    <div className="project-text">
                                    <Link to={'/portfolio/quaestorcoin'}  className="project-link">
                                    <div className="project-title">Quaestor Coin</div>
                                            <div className="project-subtitle">A cryptocurrency based web wallet</div>
                                        </Link>


                                        <div className="project-description">

                                            <p><em>The Quaestor coin is a blockchain based solution, Its main focus is to
                                                encourage the widespread use of cryptocurrencies, Its designed to
                                                securely transfer digital currency.</em></p>

                                            <ul>
                                                <li>Done frontend solely</li>
                                                <li>Uses Angular to design frontend</li>
                                                <li>Web Sockets</li>
                                                <li>Backend written in NodeJs</li>
                                            </ul>

                                        </div>

                                        <Link to="/portfolio/quaestorcoin" className="project-readmore button button-red">
                                            More details
                                        </Link>

                                        <div className="project-technologies">
                                            <div className="technologies-title">Technologies</div>
                                            <ul className="tech-tags">
                                                <li><a href='https://nodejs.org/en/' rel="nofollow noreferrer"
                                                    target='_blank'>Nodejs</a>
                                                </li>
                                                <li><a href="https://angular.io/" rel="nofollow noreferrer" target='_blank'>Angular</a>
                                                </li>

                                                <li><a href="https://www.npmjs.com/package/quaestor" rel="nofollow noreferrer"
                                                    target='_blank'>Questor</a>
                                                </li>

                                                <li>
                                                    <a href="https://socket.io/">Socket</a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://www.npmjs.com/package/bitcore-mnemonic">Bitcore-mnemonic</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="project-image">
                                        <Link to="/portfolio/quaestorcoin">
                                            <img src={`${process.env.PUBLIC_URL}/images/questorcoinweb.png`} alt="loyalwallet" />
                                        </Link>
                                    </div>

                                </div>
                            </li>

                            <li className="timeline_element project">
                                <div className="timeline_element-date">
                                    <time className="timeline_element-date-text">2018 - 2019</time>
                                </div>

                                <div className="timeline_element-contents">
                                    <div className="project-text">
                                        <Link to="/portfolio/quaestorcoinapp" className="project-link">
                                            <div className="project-title">Quaestor Coin Desktop App</div>
                                            <div className="project-subtitle">A cryptocurrency based desktop wallet
                                                <strong>(Done Solely)</strong>
                                            </div>
                                        </Link>

                                        <div className="project-description">

                                            <p><em>The Quaestor coin is a blockchain based solution, Its main focus is to
                                                encourage the widespread use of cryptocurrencies, Its designed to
                                                transfer digital currency.</em></p>

                                            <ul>
                                                <li>Done Solely</li>
                                                <li>Done in ElectronJs</li>
                                                <li>Uses Angular to design frontend</li>
                                                <li>Backend written in NodeJs</li>
                                            </ul>

                                        </div>

                                        <Link to="/portfolio/quaestorcoinapp" className="project-readmore button button-red">
                                            More details
                                        </Link>

                                        <div className="project-technologies">
                                            <div className="technologies-title">Technologies</div>
                                            <ul className="tech-tags">
                                                <li><a href='https://www.electronjs.org/' rel="nofollow noreferrer"
                                                    target='_blank'>ElectronJs</a></li>
                                                <li><a href='https://nodejs.org/en/' rel="nofollow noreferrer"
                                                    target='_blank'>Nodejs</a>
                                                </li>
                                                <li><a href="https://angular.io/" rel="nofollow noreferrer" target='_blank'>Angular</a>
                                                </li>

                                                <li><a href="https://www.npmjs.com/package/electron-packager" rel="nofollow noreferrer"
                                                    target='_blank'>Electron Packager</a>
                                                </li>

                                                <li><a href="https://www.npmjs.com/package/electron-builder" rel="nofollow noreferrer"
                                                    target='_blank'>Electron Builder</a>
                                                </li>

                                                <li><a href="https://www.npmjs.com/package/electron-store?activeTab=dependents"
                                                    rel="nofollow noreferrer" target='_blank'>Electron Store</a>
                                                </li>

                                                <li><a href="https://www.npmjs.com/package/quaestor" rel="nofollow noreferrer"
                                                    target='_blank'>Questor</a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://www.npmjs.com/package/bitcore-mnemonic">Bitcore-mnemonic</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="project-image">
                                        <Link to="/portfolio/quaestorcoinapp">
                                            <img src={`${process.env.PUBLIC_URL}/images/questorcoin3.PNG`} alt="loyalwallet" />
                                        </Link>
                                    </div>

                                </div>
                            </li>

                            <li className="timeline_element project">
                                <div className="timeline_element-date">
                                    <time className="timeline_element-date-text">2018</time>
                                </div>

                                <div className="timeline_element-contents">
                                    <div className="project-text">
                                        <Link to="/portfolio/loyalwallet" className="project-link">
                                            <div className="project-title">Loyal Wallet</div>
                                            <div className="project-subtitle">A cryptocurrency based wallet</div>
                                        </Link>

                                        <div className="project-description">

                                            <p><em>A wallet based on the process of reward points in cryptocurrency</em></p>

                                            <ul>
                                                <li>Back-end server, written down in nodejs - which handles API requests
                                                    from wallet</li>
                                            </ul>

                                        </div>

                                        <Link to="/portfolio/loyalwallet" className="project-readmore button button-red">
                                            More details
                                        </Link>

                                        <div className="project-technologies">
                                            <div className="technologies-title">Technologies</div>
                                            <ul className="tech-tags">

                                                <li><a href='https://nodejs.org/en/' rel="nofollow noreferrer"
                                                    target='_blank'>Nodejs</a>
                                                </li>

                                                <li><a href="https://sequelize.org/" rel="nofollow noreferrer"
                                                    target='_blank'>Sequelize ORM</a></li>

                                                <li><a href="https://jwt.io/" rel="nofollow noreferrer" target='_blank'>JWT</a></li>

                                                <li><a href="https://www.mysql.com/" rel="nofollow noreferrer"
                                                    target='_blank'>MySQL</a>
                                                </li>

                                                <li><a href="https://expressjs.com/" rel="nofollow noreferrer"
                                                    target='_blank'>ExpressJs</a>
                                                </li>

                                                <li><a href="https://www.npmjs.com/package/aws-sdk" rel="nofollow noreferrer"
                                                    target='_blank'>AWS SDK</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>


                                    <div className="project-image">
                                        <Link to="/portfolio/loyalwallet/">
                                            <img src={`${process.env.PUBLIC_URL}/images/loyalwallet.png`} alt="loyalwallet" />
                                        </Link>
                                    </div>

                                </div>
                            </li>

                            <li className="timeline_element project">
                                <div className="timeline_element-date">
                                    <time className="timeline_element-date-text">2018</time>
                                </div>

                                <div className="timeline_element-contents">
                                    <div className="project-text">
                                        <Link to="/portfolio/lesfloralies" className="project-link">
                                            <div className="project-title">Les Floralies</div>
                                            <div className="project-subtitle">Online POS based system</div>
                                        </Link>

                                        <div className="project-description">

                                            <p><em>A online POS system that will ensure your flower
                                                shop management and sales are blooming fantastic</em></p>

                                            <ul>
                                                <li>Responsive web application that can be used on multi type devices
                                                    Mobile/Table/Desktop</li>
                                                <li>Create an order</li>
                                                <li>Global setting of taxation/Discounts</li>
                                            </ul>

                                        </div>

                                        <Link to="/portfolio/lesfloralies" className="project-readmore button button-red">
                                            More details
                                        </Link>

                                        <div className="project-technologies">
                                            <div className="technologies-title">Technologies</div>
                                            <ul className="tech-tags">

                                                <li><a href='https://angular.io/' rel="nofollow noreferrer" target='_blank'>Angular</a>
                                                </li>

                                                <li><a href="https://getbootstrap.com/" rel="nofollow noreferrer"
                                                    target='_blank'>BootStrap</a></li>

                                                <li><a href="http://www.ecma-international.org/ecma-262/6.0/" rel="nofollow noreferrer"
                                                    target='_blank'>Javascript ES6</a></li>

                                                <li><a href="https://www.css3.com/" rel="nofollow noreferrer" target='_blank'>CSS3</a>
                                                </li>

                                                <li><a href="https://html5.org/" rel="nofollow noreferrer" target='_blank'>HTML5</a>
                                                </li>

                                                <li><a href="https://jquery.com/" rel="nofollow noreferrer" target='_blank'>JQuery</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>


                                    <div className="project-image">
                                        <Link to="/portfolio/lesfloralies/">
                                            <img src={`${process.env.PUBLIC_URL}/images/lesfloralies.png`}alt="LesFloralies" />
                                        </Link>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Portfolio