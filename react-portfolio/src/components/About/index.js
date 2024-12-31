import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import Loader from 'react-loaders';
import Timeline from '../Timeline';

const About = () => {
    const [letterClass] = useState('text-animate');

    return (
        <>
            <div className="container about-page">
                {/* About Me Section */}
                <div className="about-me">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Hey👋! I'm Andrei Vivar, a passionate 5th Year Software Engineering Student at TRU with a strong foundation in AI/ML, full-stack development, and data engineering.
                    </p>
                    <p>
                        I’ve worked on exciting projects, from creating predictive maintenance tools for data centers to developing full-stack solutions for local organizations like the Kamloops Film Society.
                    </p>
                    <p>
                        Beyond my professional work, I enjoy exploring anime, building gaming apps, and experimenting with new technologies. I am always eager to learn and create impactful solutions for real-world challenges.
                    </p>
                    <p>
                        After graduation, I aspire to specialize in AI and data engineering roles, contributing to innovative, sustainable projects that make a difference.
                    </p>
                </div>

                {/* Skills Section */}
                <div className="skills-section">
                    <div className="stage-cube-cont">
                        <div className="cubespinner">
                            <div className="face1">
                                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                            </div>
                            <div className="face2">
                                <FontAwesomeIcon icon={faHtml5} color="#FF06529" />
                            </div>
                            <div className="face3">
                                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            </div>
                            <div className="face4">
                                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            </div>
                            <div className="face5">
                                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            </div>
                            <div className="face6">
                                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                            </div>
                        </div>
                    </div>
                    <div className="other-skills">
                        <div className="skill-box">Python</div>
                        <div className="skill-box">Node.js</div>
                        <div className="skill-box">AWS</div>
                        <div className="skill-box">Docker</div>
                        <div className="skill-box">SQL</div>
                        <div className="skill-box">Machine Learning</div>
                    </div>
                </div>

                {/* Timeline and Testimonials Section */}
                <div className="timeline-testimonials">
                    <div className="timeline-container">
                        <Timeline />
                    </div>
                    <div className="testimonials">
                        <h2>Testimonials</h2>
                        <p>“Andrei consistently delivers high-quality work and is a pleasure to collaborate with.” – Colleague</p>
                        <p>“His innovative approach to problem-solving is truly impressive.” – Project Manager</p>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default About;