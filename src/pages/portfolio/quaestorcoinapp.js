import React from 'react'

function Quaestorcoinapp() {
  return (
    <div className='parent-portfolio'>
          <div className="site-main">
        <div className="site-main-inner">
            <div className="main-section project-section">
                <h1 className="main-title">Quaestor Coin Desktop App</h1>
                <h2 className="project-subtitle">A cryptocurrency based desktop wallet</h2>

                <div className="project-descriptions">

                    <div className="project-description project-general_description">
                        <p><em>The Quaestor coin is a blockchain based solution, Its main focus is to encourage the
                                widespread use of cryptocurrencies, Its designed to transfer digital currency.</em></p>

                        <p>An application that runs stand-alone in a desktop or laptop computer.
                            <br/> Questor coin is the safest and most popular wallet for investing and storing
                            cryptocurrencies and easily exchange crypto-to-crypto within your Blockchain Wallet.
                            <br/> Questor coin gives you full control, back up of your funds, and protect them from
                            unauthorized access.
                        </p>

                        <ul>
                            <li>Create a new wallet</li>
                            <li>Restore a wallet from seed/master private key</li>
                            <li>Password enrypted data</li>
                            <li>Send coins to others by manually/QR code</li>
                            <li>Realtime data handling</li>
                            <li>Transactions History/Status</li>
                            <li>Create new address</li>
                            <li>Addresses details</li>
                            <li>Create/update/delete/import/export of contacts</li>
                            <li>Setting up of a masternode</li>
                            <li>Messages signature & verification</li>
                            <li>Automatically application updates</li>
                        </ul>

                    </div>



                    <div className="project-description project-tech_description">

                        <h3>Tech wrap-up</h3>
                        <br/>
                        <ul>
                            <li>Done Solely</li>
                            <li>Done in ElectronJs</li>
                            <li>Uses Angular to design frontend</li>
                            <li>Backend written in NodeJs</li>
                            <li>Uses electron store file system</li>
                            <li>Created cloned version of bitcore to create customized addresses</li>
                            <li>Real time data handling using sockets</li>

                        </ul>


                        <h5 className="technologies-title">Technologies used</h5>

                        <ul className="tech-tags">


                            <li><a href='https://www.electronjs.org/' rel="nofollow noreferrer" target='_blank'>ElectronJs</a></li>
                                <li><a href='https://nodejs.org/en/' rel="nofollow noreferrer" target='_blank'>Nodejs</a>
                            </li>
                            <li><a href="https://angular.io/" rel="nofollow noreferrer" target='_blank'>Angular</a></li>

                            <li><a href="https://www.npmjs.com/package/electron-packager" rel="nofollow noreferrer"
                                    target='_blank'>Electron Packager</a>
                            </li>

                            <li><a href="https://www.npmjs.com/package/electron-builder" rel="nofollow noreferrer"
                                    target='_blank'>Electron Builder</a>
                            </li>

                            <li><a href="https://www.npmjs.com/package/electron-store?activeTab=dependents"
                                    rel="nofollow noreferrer" target='_blank'>Electron Store</a>
                            </li>

                            <li><a href="https://www.npmjs.com/package/quaestor"
                                rel="nofollow noreferrer" target='_blank'>Questor</a>
                        </li>
                        <li>
                            <a href="https://www.npmjs.com/package/bitcore-mnemonic">Bitcore-mnemonic</a>
                        </li>

                        </ul>

                    </div>

                </div>


                <a href="https://quaestor.io/wallet" target='_blank' className="button button-red" rel="noreferrer">
                    <i className="fa fa-external-link"></i>
                    View online
                </a>



                <div className="project-images">
                    <div className="">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin2.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin3.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin4.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin5.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin6.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin7.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin8.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin9.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin10.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin11.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin12.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin13.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin14.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin15.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin16.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin17.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin18.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin19.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin20.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin21.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin22.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin23.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin24.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin25.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin26.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin27.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin28.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin29.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin30.PNG`} alt="Questor-Coin" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/images/questorcoin31.PNG`} alt="Questor-Coin" />
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    </div>
    </div>
  )
}

export default Quaestorcoinapp