import React from 'react';
import './css/Members.css'
function Members() {
    return (
        <div className="members-page">
            <div className="members">
                <div className="eboard-members">
                    <h2>Eboard: Spring 2024</h2>
                    <div className="gallery-wrapper">
                        <img src="images/next.png" alt="Previous" className="gallery-nav" id="backBtn" />
                        <div className="gallery">
                            <div className="card">
                                <div className="card-flipper">
                                    <div className="card-front">
                                        <img src="images/img_1226.jpeg" alt="Adam Vick" />
                                        <div className="card-front-content">
                                            <p>Name: Adam Vick</p>
                                            <p>Fraternity Position: Regent</p>
                                            <p>Major: Computer Engineering</p>
                                            <p>Class: '24!</p>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <img src="images/img_1395.jpeg" alt="Adam Vick Back" />
                                        <div className="card-back-content">
                                            <p>Pin #: 290</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add more card elements for other e-board members */}
                        </div>
                        <img src="images/next.png" alt="Next" className="gallery-nav" id="nextBtn" />
                    </div>
                </div>

                <div className="active-members">
                    <div className="pledge-semester-fall-2019">
                        <h2>Actives: Pledge Semester Fall 2019</h2>
                        {/* Add gallery for active members similar to e-board members */}
                    </div>
                </div>

                <div className="alumni-members">
                    <div className="pledge-semester-fall-xxxx">
                        <h2>Alumni: Pledge Semester Fall XXXX</h2>
                        {/* Add gallery for alumni members similar to e-board members */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Members;