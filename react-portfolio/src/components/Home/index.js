import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ','A', 'n', 'd', 'r', 'e', 'i'];
    const jobArray = ['d', 'a', 't', 'a', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                    </h1>
                    <h2>Data Engineer / AI & ML Engineer / One Piece Fan</h2>
                    <Link to='/contact' className='flat-button'>Contact Me!</Link>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Home;