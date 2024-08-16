import React from 'react';
import './css/Members.css';
import Carousel from './Carousel';
import eboardMembers from './storage/eboardMembers';
import activeMembers from './storage/activeMembers';
import alumniMembers from './storage/alumniMembers';

function Members() {
    return (
        <div className="members-page">
            <div className="members">
                <div className="eboard-members">
                    <h2>Eboard: Spring 2024</h2>
                    <Carousel members={eboardMembers} />
                </div>

                <div className="active-members">
                    <h2>Active Members</h2>
                    <Carousel members={activeMembers} />
                </div>

                <div className="alumni-members">
                    <h2>Alumni Members</h2>
                    <Carousel members={alumniMembers} />
                </div>
            </div>
        </div>
    );
}

export default Members;