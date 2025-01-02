import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faCloud, faScrewdriverWrench, faRobot, faMicrochip, faHexagonNodes } from '@fortawesome/free-solid-svg-icons';
import { faCss3, faGitAlt, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import Loader from 'react-loaders';
import Timeline from '../Timeline';
import aboutPhoto from '../../assets/images/about_photo.png';

const About = () => {
    const [letterClass] = useState('text-animate');
    const skillsData = {
        "Programming Languages": [
            "Python", "C++", "C", "Java", "JavaScript", "PHP"
        ],
        "Machine Learning": [
            "TensorFlow", "scikit-learn", "NumPy", "pandas", "PyTorch"
        ],
        "AI Technologies": [
            "Hugging Face (Transformers)", "LLMs (Large Language Models)", 
            "Ollama", "CrewAI", "LangChain", "LangSmith"
        ],
        "Databases": [
            "Postgres", "MySQL", "MongoDB"
        ],
        "Web Development": [
            "HTML", "CSS", "React", "Node.js"
        ],
        "Cloud Technologies": [
            "AWS", "GCP (Google Cloud Platform)"
        ],
        "Developer Tools": [
            "Git", "Docker", "Kubernetes"
        ],
        "Comp. Vision & Robotics": [
            "OpenCV", "ROS (Robot Operating System)"
        ]
    };

    const categoryIcons = {
        "Programming Languages": faCode,
        "Databases": faDatabase,
        "Machine Learning": faHexagonNodes,
        "Cloud Technologies": faCloud,
        "Developer Tools": faScrewdriverWrench,
        "Web Development": faReact,
        "AI Technologies": faMicrochip,
        "Comp. Vision & Robotics": faRobot
    };

    return (
        <>
            <div className="container about-page">
                {/* About Me Section */}
                <div className="about-me">
                    <div className="about-photo">
                        <img src={aboutPhoto} alt="Andrei Vivar" />
                    </div>

                    <div className='about-text'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                                idx={15}
                            />
                        </h1>
                        <div class="first-parag">
                            Hey 👋! I’m Andrei Vivar, a 5th-year Software Engineering student at Thompson Rivers University, and your friendly
                            neighborhood aspiring Data Engineer and AI/ML enthusiast. Thanks to my program at TRU, I’ve built a rock-solid
                            foundation in software engineering &#40;including debugging at 3 a.m.—a true rite of passage&#41;. These skills have
                            equipped me not just to survive the tech world, but to thrive and innovate within it.
                        </div>

                        <div class="second-parag">
                            My journey into tech has been quite the plot twist! 🚀 My first two co-op terms as an <strong>Engineering Project Assistant</strong> at Houle introduced me to real-world problem-solving, while my
                            third term as a <strong>Data Analyst</strong> at TRU sparked my love affair with data &#40;fun fact: I started out wanting to be a game designer...oh, how the tables turned&#41;. By my fourth term, I was
                            leading the charge at <strong>Kamloops Film Society</strong>, designing a database for their MovieMart collection.
                            And now? I’m juggling roles as an <strong>AI/ML Engineer Intern</strong> for not one, not two, but <strong>three companies</strong>—AIModels, ChmlTech, and Ecobased.AI—through Riipen. It’s like a tech sitcom,
                            and I’m the overbooked protagonist.
                        </div>

                        <div class="third-parag">
                            Outside of work, I’m living proof that tech nerds can have fun too. Back in 2020, I founded the <strong>TRUSU Anime Club</strong>, and guess what? It’s now thriving with over <strong>500 members</strong>.
                            &#40;Yes, I’m basically the Luffy of this pirate crew.&#41; Speaking of pirates, <strong>One Piece</strong> is my all-time
                            favorite anime. As for games, I’ve been playing them since I could hold a controller, and my all-time favorite
                            is <strong>Persona 5 Royal</strong>. I even try to gamify my life—because if you’re not earning XP, are you even
                            living?
                        </div>
                    </div>

                </div>

                {/* Skills Section */}
                <div className="skills-section">
                    <h2>MY SKILLS</h2>
                    <div className="skills-container">
                        <div className="skills-categories">
                            {Object.keys(skillsData).map(category => (
                                <div className="category" key={category}>
                                    <FontAwesomeIcon icon={categoryIcons[category]} className="category-icon" />
                                    <h4>{category}</h4>
                                    <div className="skill-boxes">
                                        {skillsData[category].map(skill => (
                                            <div className="skill-box" key={skill}>
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
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