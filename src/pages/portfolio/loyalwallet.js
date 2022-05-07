import React from 'react'

function Loyalwallet() {
  return (
    <div className='parent-portfolio'>
         <div className="site-main">
        <div className="site-main-inner">
            <div className="main-section project-section">
                <h1 className="main-title">Loyal Wallet</h1>
                <h2 className="project-subtitle">A cryptocurrency based wallet</h2>

                <div className="project-descriptions">

                    <div className="project-description project-general_description">
                        <p><em>A wallet based on the process of reward points in cryptocurrency</em></p>

                        <p>LoyalCoin is a virtual currency that is based on blockchain technology like Bitcoin and Ether.<br/> LoyalCoin offers a customer loyalty-oriented digital asset that is replacing and enhancing traditional rewards point systems.</p>


                        <ul>
                            <li>Back-end server, written down in nodejs - which handles API requests from wallet</li>
                        </ul>

                    </div>



                    <div className="project-description project-tech_description">

                        <h3>Tech wrap-up</h3>

                        <h4>Back-end Server</h4>
                        <ul>
                            <li>Implemented in Nodejs & Expressjs</li>
                            <li>Written test case/database migrations using sequelize</li>
                            <li>Uses JWT based authentication/authorization</li>
                            <li>Integration of AWS-S3 bucket</li>
                            <li>Uses MqSQL</li>

                        </ul>


                        <h5 className="technologies-title">Technologies used</h5>

                        <ul className="tech-tags">


                            <li><a href='https://nodejs.org/en/' rel='nofollow' target='_blank'>Nodejs</a>
                            </li>

                            <li><a href="https://sequelize.org/" rel='nofollow' target='_blank'>Sequelize ORM</a></li>

                            <li><a href="https://jwt.io/" rel='nofollow' target='_blank'>JWT</a></li>

                            <li><a href="https://www.mysql.com/" rel='nofollow' target='_blank'>MySQL</a>
                            </li>

                            <li><a href="https://expressjs.com/" rel='nofollow' target='_blank'>ExpressJs</a>
                            </li>

                            <li><a href="https://www.npmjs.com/package/aws-sdk" rel='nofollow' target='_blank'>AWS
                                    SDK</a>
                            </li>

                        </ul>

                    </div>

                </div>


                <a href="https://loyalwallet.io/loyalwallet/" className="button button-red">
                    <i className="fa fa-external-link"></i>
                    View online
                </a>



                <div className="project-images">

                    <img src={`${process.env.PUBLIC_URL}/images/loyalwallet-p1.png`} alt="loyalwallet-Pro" />

                    <img src={`${process.env.PUBLIC_URL}/images/loyalwallet-p2.png`} alt="loyalwallet-Pro" />

                    <img src={`${process.env.PUBLIC_URL}/images/loyalwallet-p3.png`} alt="loyalwallet-Pro" />

                </div>

            </div>

        </div>
    </div>
    </div>
  )
}

export default Loyalwallet