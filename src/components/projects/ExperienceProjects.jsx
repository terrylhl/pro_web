import React from 'react';
import './ExperienceProjects.css';

const ExperienceProjects = () => {
    const projectList = [
        {
            image: 'https://live.staticflickr.com/65535/50814331066_74f0aa3f4f_b.jpg',
            title: 'UCR.one',
            technologies: 'ReactJS, Node.js, Python',
            introduction: 'An application for UCR student to get more information in a convienent way include parking, direction.',
            githubLink: 'https://github.com/CS180-spring/cs180-21-gohighlander',
        },
        {
            image: 'https://miro.medium.com/v2/resize:fit:870/0*ojIU84VO1XMGIn6_.jpg',
            title: 'Compiler system',
            technologies: 'Rust',
            introduction: 'The project i currenly taking.',
            githubLink: 'https://github.com/UCR-CS-152/cs152-rustcompiler-s24-triplea',
        },
    ];
    return (
        <section className="projects" id="projects">
            <div className="projects-content">
                <h2 className="projects-title">Projects</h2>
                <div className="project-list">
                    {projectList.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
                                <p className="project-introduction">{project.introduction}</p>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-github-link">View on GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceProjects;
