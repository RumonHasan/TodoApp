import React from 'react'
import { useGlobalContext } from '../../context/mainContext';
import { FaSignInAlt, FaTimes } from 'react-icons/fa';
import style from './style.css';

const SignInModal = () => {
    const { signState, closeSign } = useGlobalContext();

    // function for closing sign
    const closeSignHandler = (e)=>{
        if(e.target.classList.contains('sign-section')){
            closeSign();
        }   
    }

    // function for sign in
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
    <section className={`${signState ? 'sign-section show': 'sign-section'}`} onClick={closeSignHandler}>
        <div className='sign-modal'>
            <div className='sign-headers'>
                <button className='signclose-btn' type='submit' onClick={closeSign}><FaTimes/></button>
            </div>
            <form onSubmit={handleSubmit}>
                <button className='signin-btn'><FaSignInAlt className='signin-icon'/>Sign In</button>
            </form>
        </div>
    </section>
    )
}

export default SignInModal;