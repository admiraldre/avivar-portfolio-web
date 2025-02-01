import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import kfsdbimg from '../../assets/images/kfs_db.png';
import stockimg from '../../assets/images/stock_analysis.png';
import portfolioimg from '../../assets/images/portfolio_img.png';
import instrutrackerimg from '../../assets/images/instrutracker.png';
import cybersecimg from '../../assets/images/cyberimg.png';
import vwimg from '../../assets/images/vitalwatch.png';
import ovimg from '../../assets/images/ovimg.png';
import droneimg from '../../assets/images/drone.png';

const Projects = () => {
    const [letterClass] = useState('text-animate');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target;

                    if (entry.isIntersecting) {
                        target.classList.add('visible');
                    } else {
                        target.classList.remove('visible');
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    const projects = [
        {
            title: 'Stock Analysis AI Crew',
            description: "This project builds on CrewAI's Stock Analysis example to create an AI-powered stock analysis tool. By using open-source alternatives and integrating Local LLMs with Ollama Mistral embeddings, it offers scalable, flexible, and cost-effective processing of stock data for efficient query handling.",
            screenshot: stockimg,
            github: 'https://github.com/admiraldre/stock-analysis-ai-agent',
            youtube: 'https://www.youtube.com/watch?v=yourvideoid',
            technologies: ['CrewAI', 'LangChain', 'Python', 'LangSmith', 'Ollama Mistral']
        },
        // {
        //     title: 'Predictive Maintenenace System for Data Centers - ONGOING',
        //     description: 'Collaborated with ChmlTech Ltd. to work on a project that uses AI to analyze stock data and predict future stock prices.',
        //     screenshot: stockimg,
        //     github: 'https://github.com/admiraldre/stock-analysis-ai-agent',
        //     youtube: 'https://www.youtube.com/watch?v=yourvideoid',
        //     technologies: ['CrewAI', 'LangChain', 'Python', 'LangSmith']
        // },
        //     title: 'Predictive Maintenenace System for Data Centers - ONGOING',
        //     description: 'Collaborated with ChmlTech Ltd. to work on a project that uses AI to analyze stock data and predict future stock prices.',
        //     screenshot: stockimg,
        //     github: 'https://github.com/admiraldre/stock-analysis-ai-agent',
        //     youtube: 'https://www.youtube.com/watch?v=yourvideoid',
        //     technologies: ['CrewAI', 'LangChain', 'Python', 'LangSmith']
        // },
        {
            title: 'MovieMart Online Library',
            company: 'Kamloops Film Society',
            date: 'Jun 2024 - Nov 2024',
            description: 'Developed a lightweight ETL pipeline using TMDB API and Google Apps Script to automate data collection and transformation into a Google Sheet database, subsequently integrated with a WordPress website to dynamically populate custom post types.',
            screenshot: kfsdbimg,
            github: 'https://github.com/admiraldre/kfs-moviemart-database',
            youtube: 'https://www.youtube.com/watch?v=yourvideoid',
            technologies: ['Python', 'SQL', 'MySQL', 'ETL Pipeline Development', 'REST API', 'Git', 'Unix', 'PHP', 'HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Drone Camera Toolbox',
            company: 'Flying Autonomous Robotics Technology',
            date: 'Sept 2024 - Current',
            description: 'Developed as part of our 5th Year Capstone Project - Computer Vision Drone. The toolbox provides a docker environment for all tools needed to control the camera of the drone.',
            screenshot: droneimg,
            github: 'https://github.com/admiraldre/dronecamtoolbox',
            youtube: 'https://drive.google.com/file/d/1Qi1DpFFHuqvmLWB-q94KjqfiMWBuZ-tp/view?usp=sharing',
            technologies: ['Python', 'OpenCV', 'Kalibr', 'ROS', 'Docker', 'Git', 'Linux', 'Bash']
        },
        {
            title: 'Cybersecurity Threat Classifier',
            date: 'Oct 2024 - Nov 2024',
            description: 'This project implements a classification model using a neural network to predict attack categories from the "SENG 4610 Training Data" dataset. The workflow includes data preprocessing, feature engineering, model training, evaluation, and visualization.',
            screenshot: cybersecimg,
            github: 'https://github.com/admiraldre/ml-cybersecurity',
            youtube: 'https://youtu.be/E5UeaKbBrKw',
            technologies: ['Python', 'pandas', 'numpy', 'scikit-learn', 'TensorFlow', 'Matplotlib', 'Seaborn']
        },
        {
            title: 'VitalWatch',
            date: 'Sept 2024 - Nov 2024',
            description: 'The Heart Rate Monitor App is an Android application developed in Android Studio to track and manage heart rate data effectively. This app incorporates modern Software Design Patterns to ensure a robust, scalable, and maintainable architecture.',
            screenshot: vwimg,
            github: 'https://github.com/admiraldre/vitalwatch',
            youtube: 'https://youtu.be/ayDxfdFUevM',
            technologies: ['Java', 'Android Studio', 'Google Firebase', 'Google Fit API', 'Software Design Patterns', 'Git', 'GitHub']
        },
        {
            title: 'Portfolio Website',
            description: 'Developed a portfolio website to showcase my projects and skills.',
            screenshot: portfolioimg,
            github: 'https://github.com/admiraldre/avivar-portfolio-web',
            technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Netlify', 'Sass', 'GitHub', 'Git'],
        },
        {
            title: 'OnigiriVault',
            date: 'Oct 2024 - Nov 2024',
            description: 'OnigiriVault is an anime and manga recommender app that helps users track and recommend anime based on their preferences. It uses the Jikan API to fetch anime data from MyAnimeList, and it integrates several AWS services to manage user data, store preferences, and Personalize ML Model to generate recommendations.',
            screenshot: ovimg,
            github: 'https://github.com/admiraldre/onigirivault',
            youtube: 'https://youtu.be/2c7q1s4Jxv8',
            technologies: ['Python','Postman','AWS S3', 'AWS Cognito', 'AWS Lambda', 'AWS Step Functions', 'API Gateway', 'Amazon Xray', 'AWS SNS', 'AWS Personalize', 'Jikan API']
        },
        {
            title: 'InstruTracker',
            date: 'Feb 2024 - March 2024',
            description: 'Created a MERN stack web application for Music Practice Tracking that lets users log their practice sessions, set goals and collaborate with other musicians on the public forum. This project is inspired from apps such as Duolingo, to keep upcoming musicians accountable with their music practice journey.',
            screenshot: instrutrackerimg,
            github: 'https://github.com/admiraldre/instrutracker-webproject',
            youtube: 'https://youtu.be/U408EfEWUYk',
            technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express.js', 'MongoDB']
        },

        // add more projects here
    ];
    return (
        <>
            <div className="container projects-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                    <div className="project-grid">
                        {projects.map((project, index) => (
                            <div className="project-card hidden" key={index}>
                                <h2>{project.title}</h2>
                                <img
                                    src={project.screenshot}
                                    alt={project.title}
                                    className="project-screenshot"
                                />
                                <p><strong>{project.company}</strong></p>
                                <p><strong>{project.date}</strong></p>
                                <p>{project.description}</p>
                                <p><strong>Technologies used:</strong></p>
                                <ul className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <li key={techIndex}>{tech}</li>
                                    ))}
                                </ul>
                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button github-button"
                                    >
                                        GitHub
                                    </a>
                                    {project.youtube && (
                                        <a
                                            href={project.youtube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="button youtube-button"
                                        >
                                            YouTube
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='more-projects'>
                        <p>Want to see more of my projects? Check out my <a href='https://github.com/admiraldre' target='_blank' rel='noopener noreferrer'>Github</a></p>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Projects;