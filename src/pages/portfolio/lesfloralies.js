import React from 'react'

function Lesfloralies() {
  return (
    <div className="parent-portfolio" >
        <div className="site-main">
        <div className="site-main-inner">
            <div className="main-section project-section">
                <h1 className="main-title">Les Floralies</h1>
                <h2 className="project-subtitle">Online POS based system</h2>

                <div className="project-descriptions">

                    <div className="project-description project-general_description">
                        <p><em>A online POS system that will ensure your flower
                                shop management and sales are blooming fantastic</em></p>


                        <p>LesFloralies aims to improve the floral industry and promote nature in terms of flowers by
                            providing pioneering designs and strategies. <br/> It offers a complete selection of
                            personal and corporate floral items suitable for any occasion and every sentiment.</p>

                        <p>Whole project includes:</p>

                        <ul>
                            <li>Responsive web application that can be used on multi type devices Mobile/Table/Desktop
                            </li>
                            <li>Create an order</li>
                            <li>Global setting of taxation/Discounts</li>
                            <li>Sale Reports Daily/Monthly/Weekly/Yearly</li>
                            <li>Order Traking/History</li>
                            <li>Invoice Emails</li>
                        </ul>

                    </div>



                    <div className="project-description project-tech_description">

                        <h3>Tech wrap-up</h3>

                        <h4>Front-end Application</h4>
                        <ul>
                            <li>Implemented the front-end using Angular framework</li>
                        </ul>




                        <h5 className="technologies-title">Technologies used</h5>

                        <ul className="tech-tags">

                            <li><a href='https://angular.io/' rel='nofollow' target='_blank'>Angular</a>
                            </li>

                            <li><a href="https://getbootstrap.com/" rel='nofollow' target='_blank'>BootStrap</a></li>

                            <li><a href="http://www.ecma-international.org/ecma-262/6.0/" rel='nofollow'
                                    target='_blank'>Javascript ES6</a></li>

                            <li><a href="javascript:void(0)" rel='nofollow' target='_blank'>CSS3</a>
                            </li>

                            <li><a href="javascript:void(0)" rel='nofollow' target='_blank'>HTML5</a>
                            </li>

                            <li><a href="https://jquery.com/" rel='nofollow' target='_blank'>JQuery</a>
                            </li>


                        </ul>

                    </div>

                </div>


                <a href="https://www.lesfloralies.ae/" className="button button-red">
                    <i className="fa fa-external-link"></i>
                    View online
                </a>



                <div className="project-images">

                    <img src={`${process.env.PUBLIC_URL}/images/lesfloralies.png`} alt="LesFloralies-Pro" />

                </div>

            </div>

        </div>
    </div>
    </div>
  )
}

export default Lesfloralies