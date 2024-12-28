import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import Loader from 'react-loaders';

const Projects = () => {
    const [letterClass] = useState('text-animate');
    return(
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
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
}

export default Projects;