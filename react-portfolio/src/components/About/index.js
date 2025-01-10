import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faCloud, faScrewdriverWrench, faRobot, faMicrochip, faHexagonNodes, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import Loader from 'react-loaders';
// import Timeline from '../Timeline';
import aboutPhoto from '../../assets/images/about_photo.png';

const About = () => {
    const [letterClass] = useState('text-animate');
    const skillsData = {
        "Programming Languages": [
            "Python", "SQL", "JavaScript", "Java", "C++", "C"
        ],
        "Machine Learning": [
            "TensorFlow", "scikit-learn", "NumPy", "pandas", "PyTorch"
        ],
        "AI Technologies": [
            "Hugging Face (Transformers)", "LLMs (Large Language Models)",
            "Ollama", "CrewAI", "LangChain", "LangSmith"
        ],
        "Databases": [
            "Postgres", "MySQL", "MongoDB", "Firebase"
        ],
        "Web Development": [
            "HTML", "CSS", "React", "Node.js", "Express", "Flask"
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
        "Web Development": faWindowRestore,
        "AI Technologies": faMicrochip,
        "Comp. Vision & Robotics": faRobot
    };

    // const testimonials = {
    //     'Colette Abbott': 'We hired Andrei through the Canada Summer Jobs program to design and build an online database for our DVD rental collection and an online poster store. Andrei completed these projects on schedule and went over and above his job description helping our team with various tech challenges. He is an excellent communicator and problem-solver and was a pleasure to work with. I would highly recommend Andrei to future employers and look forward to seeing where his skills and can-do attitude take him!',
    //     'Alma Klarich': 'I hired Andrei as a student co-op in early 2024 to support our department with our data analytic capabilities. In the four-month term, I found Andrei to be very reliable and professional. He was willing to learn new things that were not always directly related to his studies, and in a profession that was unfamiliar to him (internal auditing). He has a very pleasant personality and attitude, combined with a sought-after technical skill set. I would not hesitate to recommend him to future employers. All the best to you, Andrei, as you take on new pursuits!'
    //     };

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
                            neighborhood aspiring Software Engineer and AI/ML enthusiast. Thanks to my program at TRU, I’ve built a rock-solid
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
                            Outside of work, I’m a living proof that tech nerds can have fun too. Back in 2020, I founded the <strong>TRUSU Anime Club</strong>, and guess what? It’s now thriving with over <strong>500 members</strong>.
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

                {/* Timeline and Testimonials Section
                <div className="timeline-testimonials">
                    <div className="timeline-container">
                        <Timeline />
                    </div>
                    <div className="testimonials">
                        <h2>Testimonials</h2>
                        
                    </div>
                </div> */}
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default About;