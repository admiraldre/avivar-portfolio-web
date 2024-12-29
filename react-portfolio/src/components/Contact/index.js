import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'; 

const Contact = () => {
    const [letterClass] = useState('text-animate');
    const refForm = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID, 
                process.env.REACT_APP_TEMPLATE_ID, 
                refForm.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
            )
            .then(
                () => {
                    alert('Email sent successfully!');
                    refForm.current.reset();
                    navigate('/');
                },
                () => {
                    alert('Email failed to send!');
                }
            )
    }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','M','e']} idx={15} />
                    </h1>
                    <p>Want to connect? Send me a message! I am always looking for connections and opportunities to network!</p>
                    <p>This message will be sent to vivardre@gmail.com</p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='Send Message'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
}

export default Contact;