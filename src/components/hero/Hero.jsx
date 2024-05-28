

import React from 'react';
import './Hero.css';
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
const Hero = () => {
    return (
        <section id={'hero'} className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Haolin Liu
                    </h1>
                    <div className="hero-description">
                        Major in Computer Science in University of California, Riverside

                        <div className={'links'}>
                            <a target={'_blank'} href={'https://www.linkedin.com/in/haolin-liu-1596272b0/'}>
                                <img src={LinkedIn} width={50}/>
                            </a>

                            <a target={'_blank'} href={'https://github.com/terrylhl?tab=repositories'}>
                                <img src={Github} width={50}/>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Hero;
