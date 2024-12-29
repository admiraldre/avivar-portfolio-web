import React from 'react';
import './index.scss';

const timelineElements = [
    {
        id: 1,
        date: 'January 2023',
        title: 'Project A',
        description: 'Description for Project A.',
    },
    {
        id: 2,
        date: 'March 2023',
        title: 'Project B',
        description: 'Description for Project B.',
    },
    {
        id: 3,
        date: 'June 2023',
        title: 'Project C',
        description: 'Description for Project C.',
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
                        <p>{element.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;