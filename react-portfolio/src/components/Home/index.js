import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import selfphoto from '../../assets/images/self_photo.png';

const Home = () => {
    const [letterClass] = useState('text-animate');
    const nameArray = [' ', 'A', 'n', 'd', 'r', 'e', 'i'];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '"'];

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>"H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18} />
                    </h1>
                    <h2>Fullstack Development / AI & ML Engineering / One Piece Fan</h2>
                    <div className='button-group'>
                        <Link to='/contact' className='flat-button'>Contact Me!</Link>
                        <a className='flat-button resume-button' href='https://drive.google.com/file/d/1nM_9JizGlNExe4ns5PnDejqoIR_MM38X/view?usp=sharing' target='_blank' rel='noopener noreferrer'>My Resume</a>
                    </div>
                </div>
                <div className='self-photo-cont'>
                    <img src={selfphoto} alt='self' className='self-photo' />
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Home;