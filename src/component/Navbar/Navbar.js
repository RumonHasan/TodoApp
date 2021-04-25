import React from 'react'
import { useGlobalContext } from '../../context/mainContext';
import style from './style.css';

const Navbar = () => {
    const { menu, showSign, signState } = useGlobalContext();

    return (
        <section className = 'navbar-container'>
            <ul className='navbar-section'>
                {menu.map((item, index)=>{
                    const { label } = item;
                    const handleClick = ()=>{
                        if(label === 'Sign In'){
                            showSign();
                        }
                    }
                    return(
                        <article className='menu-items' key={index}>
                            <li className='item' onClick={handleClick}>{label}</li>
                        </article>
                    )
                })}
            </ul>
        </section>
    )
}
export default Navbar;
