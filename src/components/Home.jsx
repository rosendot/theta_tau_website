import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css'

function Home() {
    return (
        <div className="ot-landing-container">
            <div className="ot-landing-cards-container">
                <div className="ot-landing-card">
                    <div id="A" className="ot-landing-card-gif">
                        <div className="ot-landing-card-content">
                            <Link to="/" className="hLink">Home & Rush</Link>
                        </div>
                    </div>
                </div>
                <div className="ot-landing-card">
                    <div id="B" className="ot-landing-card-gif">
                        <div className="ot-landing-card-content">
                            <Link to="/members" className="mLink">Meet the Actives & Alumni!</Link>
                        </div>
                    </div>
                </div>
                <div className="ot-landing-card">
                    <div id="C" className="ot-landing-card-gif">
                        <div className="ot-landing-card-content">
                            <Link to="/history" className="fLink">History, FAQ, <br />
                                &<br />
                                Alumni companies</Link>
                        </div>
                    </div>
                </div>
                <div className="ot-landing-card">
                    <div id="D" className="ot-landing-card-gif">
                        <div className="ot-landing-card-content">
                            <Link to="/contact" className="cLink">Contact us <br />
                                & <br />
                                Social Tree</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ot-top-banner-container">
                <div className="ot-top-banner-content">
                    <h1>THETA TAU - XI GAMMA</h1>
                    <h2>@ Texas A&M University</h2>
                    <ul>
                        <li><a href="#instagram">Insta Icon here w/ other socials</a></li>
                    </ul>
                </div>
            </div>

            <div className="ot-pillers-card-container">
                <div className="ot-pillers-card">
                    <div className="ot-pillers-card-content">
                        <h3>Brotherhood</h3>
                        <p>
                            Without brotherhood there is no fraternity. Through weekly events,
                            intramurals, field days, long study hours and more, we build lifelong
                            bonds amongst our members. As a national fraternity, you'll have
                            brothers across the country.
                        </p>
                    </div>
                </div>
                <div className="ot-pillers-card">
                    <div className="ot-pillers-card-content">
                        <h3>Brotherhood</h3>
                        <p>
                            Without brotherhood there is no fraternity. Through weekly events,
                            intramurals, field days, long study hours and more, we build
                            lifelong bonds amongst our members. As a national fraternity, you'll
                            have brothers across the country.
                        </p>
                    </div>
                </div>
                <div className="ot-pillers-card">
                    <div className="ot-pillers-card-content">
                        <h3>Brotherhood</h3>
                        <p>
                            Without brotherhood there is no fraternity. Through weekly events,
                            intramurals, field days, long study hours and more, we build
                            lifelong bonds amongst our members. As a national fraternity, you'll
                            have brothers across the country.
                        </p>
                    </div>
                </div>
            </div>

            <div className="ot-purpose-container">
                <div className="ot-purpose-content">
                    <h2>Why are we on campus?</h2>
                    <p>
                        We strive to develop and maintain a high standard of professional
                        interest among its members and to unite them in a strong bond of
                        fraternal fellowship.
                    </p>
                    <p>
                        Xi Gamma is about building a career you can be proud of and making
                        lifelong friends along the way. We push and support each other to
                        become the best that we can be.
                    </p>
                </div>
            </div>

            <div className="ot-footer">
                <p>Footer Stuff</p>
            </div>
        </div>
    );
}

export default Home;