import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Carousel = ({ members }) => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        updateVisibleCards(currentIndex);
    }, [currentIndex, members]);

    const updateVisibleCards = (centerIndex) => {
        const totalMembers = members.length;
        const newVisibleCards = [];
        for (let i = -2; i <= 2; i++) {
            const index = (centerIndex + i + totalMembers) % totalMembers;
            newVisibleCards.push({ ...members[index], displayIndex: i });
        }
        setVisibleCards(newVisibleCards);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
    };

    const getCardClassName = (displayIndex) => {
        switch (displayIndex) {
            case -2: return 'card-far-left';
            case -1: return 'card-left';
            case 0: return 'card-center';
            case 1: return 'card-right';
            case 2: return 'card-far-right';
            default: return '';
        }
    };

    const renderCardContent = (member) => {
        if (member.graduated) {
            // Alumni member
            return (
                <>
                    <div className="card-front">
                        <img src={member.frontImage} alt={member.name} />
                        <div className="card-front-content">
                            <p>Name: {member.name}</p>
                            <p>Major: {member.major}</p>
                            <p>Graduated: {member.graduated}</p>
                            <p>Pin #: {member.pinNumber}</p>
                        </div>
                    </div>
                    <div className="card-back">
                        <img src={member.backImage} alt={`${member.name} Back`} />
                        <div className="card-back-content">
                            <p>{member.backMessage}</p>
                        </div>
                    </div>
                </>
            );
        } else {
            // Eboard or active member
            return (
                <>
                    <div className="card-front">
                        <img src={member.frontImage} alt={member.name} />
                        <div className="card-front-content">
                            <p>Name: {member.name}</p>
                            {member.position && <p>Position: {member.position}</p>}
                            <p>Major: {member.major}</p>
                            <p>Class: {member.class}</p>
                        </div>
                    </div>
                    <div className="card-back">
                        <img src={member.backImage} alt={`${member.name} Back`} />
                        <div className="card-back-content">
                            <p>Pin #: {member.pinNumber}</p>
                        </div>
                    </div>
                </>
            );
        }
    };

    return (
        <div className="eboard-carousel">
            <IconButton onClick={prevSlide} className="carousel-nav prev">
                <ChevronLeft />
            </IconButton>
            <div className="carousel-content">
                {visibleCards.map((member) => (
                    <div key={member.id} className={`carousel-item ${getCardClassName(member.displayIndex)}`}>
                        <div className="card">
                            <div className="card-flipper">
                                {renderCardContent(member)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <IconButton onClick={nextSlide} className="carousel-nav next">
                <ChevronRight />
            </IconButton>
        </div>
    );
};

export default Carousel;