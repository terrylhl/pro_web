import React from 'react';
import './Footer.css';


import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import Email from '../../assets/gmail.png';
const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <h2 className="footer-title">Contact Me</h2>
                    <div className="contact-links">
                        <a
                            href="https://www.linkedin.com/in/haolin-liu-1596272b0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                            aria-label="LinkedIn"
                        >
                            <img src={LinkedIn} width={50}/>
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/terrylhl?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                            aria-label="GitHub"
                        >
                            <img src={Github} width={50}/>
                            GitHub
                        </a>
                        <a
                            href="1145830606@qq.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                            aria-label="Email"
                        >
                            <img src={Email} width={50}/>
                            1145830606@qq.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;