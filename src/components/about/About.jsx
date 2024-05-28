
import React from 'react';
import './About.css';
import BackgroundIcon from '../../assets/background.png';
import InterestIcon from '../../assets/interests.png';
import GoalsIcon from '../../assets/goals.png';
const About = () => {
    return (
        <section className="about" id="about-me">
            <div className="about-content">
                <h2 className="about-title">About Me</h2>
                <div className="about-card">
                    <ul className="about-list">
                        <li className="about-item">
                            <img src={BackgroundIcon} alt="Background Icon" className="about-icon" />
                            <div className="about-text">
                                <h3>Background</h3>
                                <p>I am Haolin Liu, a student with a background in University of California, Riverside. I am 4th year student major in computer science</p>
                            </div>
                        </li>
                        <li className="about-item">
                            <img src={InterestIcon} alt="Interests Icon" className="about-icon" />
                            <div className="about-text">
                                <h3>Interests</h3>
                                <p>I am passionate about coding and finance and enjoy playing golf in my free time.</p>
                            </div>
                        </li>
                        <li className="about-item">
                            <img src={GoalsIcon} alt="Goals Icon" className="about-icon" />
                            <div className="about-text">
                                <h3>Career Goals</h3>
                                <p>My career goal is to be either a golfer or a risk anaylatic. I strive to continuously improve my skills and knowledge. I dont have my resume ready so i just link our project description as it</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">View My Resume</a>
            </div>
        </section>
    );
};

export default About;
