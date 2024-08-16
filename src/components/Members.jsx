import React from 'react';
import './css/Members.css'
import adamPicture from './images/IMG_1226.jpeg'
import backPicture from './images/IMG_1395.jpeg'
import arrowPicture from './images/next.png'

function Members() {
    return (
        <div className="members-page">
            <div className="members">
                <div className="eboard-members">
                    <h2>Eboard: Spring 2024</h2>
                    <div className="gallery-wrapper">
                        <img src={arrowPicture} alt="Previous" className="gallery-nav" id="backBtn" />
                        <div className="gallery">
                            <div className="card">
                                <div className="card-flipper">
                                    <div className="card-front">
                                        <img src={adamPicture} alt="Adam Vick" />
                                        <div className="card-front-content">
                                            <p>Name: Adam Vick</p>
                                            <p>Fraternity Position: Regent</p>
                                            <p>Major: Computer Engineering</p>
                                            <p>Class: '24</p>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <img src={backPicture} alt="Adam Vick Back" />
                                        <div className="card-back-content">
                                            <p>Pin #: 290</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add more card elements for other e-board members */}
                        </div>
                        <img src={arrowPicture} alt="Next" className="gallery-nav" id="nextBtn" />
                    </div>
                </div>

                <div className="active-members">
                    <div className="pledge-semester-fall-2019">
                        <h2>Actives: Pledge Semester Fall 2019</h2>
                        <div class="gallery-wrapper">
                            <img src={arrowPicture} id="backBtn" />
                            <div class="gallery">
                                <div class="card">
                                    <div class="card-flipper">
                                        <div class="card-front">
                                            <img src="" />
                                            <div class="card-front-content">
                                                <p>name: xx</p>
                                                <p>fraternity positon: xx</p>
                                                <p>major: xx</p>
                                                <p>class: xx</p>
                                            </div>
                                        </div>
                                        <div class="card-back">
                                            <img src="" />
                                            <div class="card-back-content">
                                                <p>xx</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={arrowPicture} id="nextBtn" />
                        </div>
                    </div>
                </div>

                <div className="alumni-members">
                    <div className="pledge-semester-fall-xxxx">
                        <h2>Alumni: Pledge Semester Fall XXXX</h2>
                        <div class="gallery-wrapper">
                            <img src={arrowPicture} id="backBtn" />
                            <div class="gallery">
                                <div class="card">
                                    <div class="card-flipper">
                                        <div class="card-front">
                                            <img src="" />
                                            <div class="card-front-content">
                                                <p>name: xx</p>
                                                <p>fraternity positon: xx</p>
                                                <p>major: xx</p>
                                                <p>class: xx</p>
                                            </div>
                                        </div>
                                        <div class="card-back">
                                            <img src="" />
                                            <div class="card-back-content">
                                                <p>xx</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={arrowPicture} id="nextBtn" />
                        </div>                    </div>
                </div>
            </div>
        </div>
    );
}

export default Members;