import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import Loader from 'react-loaders';
import kfsdbimg from '../../assets/images/kfs_db.png';
// import stockimg from '../../assets/images/stock_analysis.png';
import portfolioimg from '../../assets/images/portfolio_img.png';

const Projects = () => {
    const [letterClass] = useState('text-animate');
    const projects = [
        // {
        //     title: 'Stock Analysis AI Agent - ONGOING',
        //     description: 'Collaborated with ChmlTech Ltd. to work on a project that uses AI to analyze stock data and predict future stock prices.',
        //     screenshot: stockimg,
        //     github: 'https://github.com/admiraldre/stock-analysis-ai-agent',
        //     youtube: 'https://www.youtube.com/watch?v=yourvideoid',
        //     technologies: ['CrewAI', 'LangChain', 'Python', 'LangSmith']
        // },
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
            date: 'Jun 2024 - Nov 2024',
            description: 'Worked with KFS to revamp the MovieMart online library. The project involved migrating the existing library to a new platform and adding new features.',
            screenshot: kfsdbimg,
            github: 'https://github.com/admiraldre/kfs-moviemart-database',
            youtube: 'https://www.youtube.com/watch?v=yourvideoid',
            technologies: ['Python', 'SQL', 'ETL Pipeline Development', 'PHP', 'HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Drone Camera Toolbox',
            date: 'Sept 2024 - Current',
            description: 'Developed as part of our 5th Year Capstone Project - Computer Vision Drone. The toolbox is used to process images and videos captured by the drone camera.',
            // screenshot: ,
            github: 'https://github.com/admiraldre/dronecamtoolbox',
            technologies: ['Python', 'OpenCV', 'Kalibr', 'ROS']
        },
        {
            title: 'Portfolio Website',
            description: 'Developed a portfolio website to showcase my projects and skills.',
            screenshot: portfolioimg,
            github: 'https://github.com/admiraldre/avivar-portfolio-web',
            technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Sass']
        },
        {
            title: 'Cybersecurity Threat Classifier',
            date: 'Oct 2024 - Nov 2024',
            description: 'Developed a portfolio website to showcase my projects and skills.',
            screenshot: portfolioimg,
            github: 'https://github.com/admiraldre/avivar-portfolio-web',
            technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Sass']
        },
        {
            title: 'OnigiriVault',
            date: 'Oct 2024 - Nov 2024',
            description: 'Developed a portfolio website to showcase my projects and skills.',
            screenshot: portfolioimg,
            github: 'https://github.com/admiraldre/avivar-portfolio-web',
            technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Sass']
        },
        {
            title: 'VitalWatch',
            date: 'Oct 2024 - Nov 2024',
            description: 'Developed a portfolio website to showcase my projects and skills.',
            screenshot: portfolioimg,
            github: 'https://github.com/admiraldre/avivar-portfolio-web',
            technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Sass']
        },
        {
            title: 'InstruTracker',
            date: 'Oct 2024 - Nov 2024',
            description: 'Developed a portfolio website to showcase my projects and skills.',
            screenshot: portfolioimg,
            github: 'https://github.com/admiraldre/avivar-portfolio-web',
            technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express.js', 'MongoDB']
        },

        // add more projects here
    ];
    return (
        <>
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                    <div className='project-grid'>
                        {projects.map((project, index) => (
                            <div className="project-card" key={index}>
                                <h2>{project.title}</h2>
                                <img src={project.screenshot} alt={project.title} className="project-screenshot" />
                                <p>{project.date}</p>
                                <p>{project.description}</p>
                                <p>Technologies used:</p>
                                <ul className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <li key={techIndex}>{tech}</li>
                                    ))}
                                </ul>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="button github-button">
                                        GitHub
                                    </a>
                                    {project.youtube && ( // Conditional rendering for the YouTube button
                                        <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="button youtube-button">
                                            YouTube
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Projects;