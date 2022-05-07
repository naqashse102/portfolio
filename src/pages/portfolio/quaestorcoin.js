import React from 'react'

function Quaestorcoin() {
  return (
    <div className='parent-portfolio'>
         <div className="site-main">
        <div className="site-main-inner">
            <div className="main-section project-section">
                <h1 className="main-title">Quaestor Coin</h1>
                <h2 className="project-subtitle">A cryptocurrency based web wallet</h2>

                <div className="project-descriptions">

                    <div className="project-description project-general_description">
                        <p><em>The Quaestor coin is a blockchain based solution, Its main focus is to encourage the
                                widespread use of cryptocurrencies, Its designed to securely transfer digital currency.</em></p>

                        <p>An application that runs on web browser.
                            <br/> Questor coin is the safest and most popular wallet for investing and storing
                            cryptocurrencies and easily exchange crypto-to-crypto within your Blockchain Wallet.
                            <br/> Questor coin gives you full control, back up of your funds, and protect them from
                            unauthorized access.
                        </p>

                        <ul>
                            <li>Create a new wallet</li>
                            <li>Restore a wallet from seed/master private key</li>
                            <li>Send coins to others by manually</li>
                            <li>Realtime data handling</li>
                            <li>Transactions History/Status</li>
                            <li>Create new address</li>
                            <li>Addresses details</li>
                            <li>Setting up of a masternode</li>
                        </ul>

                    </div>



                    <div className="project-description project-tech_description">

                        <h3>Tech wrap-up</h3>
                        <ul>
                            <li>Done frontend solely</li>
                            <li>Uses Angular to design frontend</li>
                            <li>Web Sockets</li>
                            <li>Backend written in NodeJs</li>
                        </ul>


                        <h5 className="technologies-title">Technologies used</h5>

                        <ul className="tech-tags">


                            <li><a href='https://nodejs.org/en/' rel='nofollow' target='_blank'>Nodejs</a>
                            </li>
                            <li><a href="https://angular.io/" rel='nofollow' target='_blank'>Angular</a></li>

                            <li><a href="https://www.npmjs.com/package/quaestor" rel='nofollow'
                                    target='_blank'>Questor</a>
                            </li>
                            <li>
                                <a href="https://socket.io/">Socket</a>
                            </li>
                            <li>
                                <a href="https://www.npmjs.com/package/bitcore-mnemonic">Bitcore-mnemonic</a>
                            </li>

                        </ul>

                    </div>

                </div>


                <a href="http://quaestorcoin.com/#/wallet" target='_blank' className="button button-red">
                    <i className="fa fa-external-link"></i>
                    View online
                </a>


                <div className="project-images">
                    <img src={`${process.env.PUBLIC_URL}/images/quaestorcoinweb5.png`} alt="quaestorcoin-Pro" />
                    <img src={`${process.env.PUBLIC_URL}/images/quaestorcoinweb4.png`} alt="quaestorcoin-Pro" />
                    <img src={`${process.env.PUBLIC_URL}/images/quaestorcoinweb3.png`} alt="quaestorcoin-Pro" />
                    <img src={`${process.env.PUBLIC_URL}/images/quaestorcoinweb2.png`} alt="quaestorcoin-Pro" />
                    <img src={`${process.env.PUBLIC_URL}/images/quaestorcoinweb1.png`} alt="quaestorcoin-Pro" />
                </div>

            </div>

        </div>
    </div>
    </div>
  )
}

export default Quaestorcoin