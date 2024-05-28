import React from 'react';
import './EducationSkills.css';
import EducationIcon from '../../assets/graduate-hat.png';

const EducationSkills = () => {

    const educations = [
        {
            degree: 'Bachelor of Science in Computer Science',
            university: 'University of California, Riverside',
            duration: '2020 - 2024',
            coursework: 'Data Structures, Algorithms, Database Systems, Web Development'
        },
        {
            degree: 'High School Diploma',
            university: 'Valley Christian High School, Cerritos',
            duration: '2017 - 2020'
        }
    ];

    const skills = [
        {
            title: 'JavaScript',
            icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png'
        },
        {
            title: 'HTML',
            icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968267.png'
        },
        {
            title: 'CSS',
            icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968242.png'
        },
        {
            title: 'React',
            icon: 'https://cdn-icons-png.flaticon.com/128/753/753244.png'
        },
        {
            title: 'Node.js',
            icon: 'https://cdn-icons-png.flaticon.com/128/919/919825.png'
        },
        {
            title: 'Linux',
            icon: 'https://cdn-icons-png.flaticon.com/128/6124/6124995.png'
        }
    ]

    return (
        <section className="education-skills" id="education">
            <div className="education-skills-content">
                <div className="education">
                    <h3>Education</h3>
                    <ul className="education-list">
                        {educations.map(education => (
                            <li key={education.degree} className="education-item">
                                <h4>
                                    <img src={EducationIcon} width={40} alt={''}/>
                                    {education.degree}
                                </h4>
                                <p>
                                    {education.university} | {education.duration}
                                </p>
                                
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="skills">
                    <h3>Skills</h3>
                    <ul className={'skills-list'}>
                        {skills.map(skill => {
                            return (
                                <li key={skill.title}>
                                    <img src={skill.icon} alt={skill.title} width={40}/>
                                    <p>{skill.title}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default EducationSkills;
