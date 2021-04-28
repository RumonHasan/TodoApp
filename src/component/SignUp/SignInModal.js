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
        <div className='sign-wrapper'>
                <div className= 'sign-headers'>
                    <p className = 'sign-title'>Todotastic</p>
                    <button className='close-btn' type='submit' onClick={closeSign}><FaTimes/></button>   
                </div>

                <form onSubmit={handleSubmit}>
                    <button className='signin-btn' type='submit'><FaSignInAlt/>Sign In</button>
                </form>
            </div>
    </section>
    )
}

export default SignInModal;
