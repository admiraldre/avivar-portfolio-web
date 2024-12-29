import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import Loader from 'react-loaders';

const Projects = () => {
    const [letterClass] = useState('text-animate');
    const projects = [
        {
            title: 'Stock Analysis AI Agent',
            description: 'Collaborated with ChmlTech Ltd. to work on a project that uses AI to analyze stock data and predict future stock prices.',
            screenshot: 'path_to_screenshot_1.jpg',
            github: 'https://github.com/admiraldre/stock-analysis-ai-agent',
            youtube: 'https://www.youtube.com/watch?v=yourvideoid'
        },
        {
            title: 'Project 2',
            description: 'Description of project 2.',
            screenshot: 'path_to_screenshot_2.jpg',
            github: 'https://github.com/yourusername/project2',
            youtube: 'https://www.youtube.com/watch?v=yourvideoid'
        },
        {
            title: 'Project 3',
            description: 'Description of project 3.',
            screenshot: 'path_to_screenshot_3.jpg',
            github: 'https://github.com/yourusername/project3',
            youtube: 'https://www.youtube.com/watch?v=yourvideoid'
        },
        // Add more projects here...
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
                    <div>
                        {projects.map((project, index) => (
                            <div className='project-card' key={index}>
                                <h2>{project.title}</h2>
                                <img src={project.screenshot} alt={project.title} className="project-screenshot" />
                                <p>{project.description}</p>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="button github-button">
                                        GitHub
                                    </a>
                                    <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="button youtube-button">
                                        YouTube
                                    </a>
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