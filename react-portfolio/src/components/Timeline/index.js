import React from 'react';
import './index.scss';

const timelineElements = [
    {
        date: 'April 2016',
        title: 'Moved to Canada',
        location: '',
        description: '',
    },
    {
        date: 'Sept 2020',
        title: 'Started Software Engineering at Thompson Rivers University',
        location: 'Kamloops, BC',
        description: 'Relevant Coursework: Data Structures, Algorithms, Software Development, Web Development, Database Management, Operating Systems, Computer Networks, Machine Learning, Artificial Intelligence, Software Testing, Software Architecture, Software Project Management',
    },
    {
        date: 'May 2023 - Dec 2023',
        title: 'Engineering Project Assistant at Houle Electric',
        location: 'Fort St. John, BC',
        description: 'Worked on BC Hydro\'s Site C Clean Energy Project',
    },
    {
        date: 'Jan 2024 - Apr 2024',
        title: 'Data Analyst at Thompson Rivers University',
        location: 'Kamloops, BC',
        description: 'involved in Data Analysis with TRU Employee Purchasing Card Transaction Database for the Fiscal Year 2024 Q4.',
    },
    {
        date: 'Jun 2024 - Dec 2024',
        title: 'Full-stack Database Developer at Kamloops Film Society',
        location: 'Kamloops, BC',
        description: 'Lead the development of a new database system for the Kamloops Film Society.',
    },
    {
        date: 'Dec 2024 - Present',
        title: 'AI/ML Engineer Intern via Riipen Level UP',
        location: 'Remote, Canada',
        description: `
            Machine Learning Engineer Intern at AIModels: Creating solutions on Predictive Maintenance for Data Centers.<br />
            AI Engineer Intern at ChmlTech Ltd.: Developing a Stock Analysis Tool using CrewAI and LangChain.<br />
            AI Engineer Intern at ECOBASED.AI: Developed an AI-powered Regenerative Impact Estimator Tool that evaluates the economic, environmental, and social benefits of transitioning to regenerative projects.
        `,
    },
];

const Timeline = () => {
    return (
        <div className="timeline">
            <h2>My Timeline</h2>
            {timelineElements.map((element) => (
                <div className="timeline-item" key={element.id}>
                    <div className="timeline-date">{element.date}</div>
                    <div className="timeline-content">
                        <h3>{element.title}</h3>
                        <h4>{element.location}</h4>
                        <p dangerouslySetInnerHTML={{ __html: element.description }}></p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;