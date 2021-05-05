import React, {useState, useRef, useEffect} from 'react'
import { useGlobalContext } from '../../context/mainContext';
import style from './style.css';
import useInterval from '../../context/useInterval';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';

const Navbar = () => {
    const { menu, showSign, showTodoBox } = useGlobalContext();

    // retractable menu control
    const [arrow, setArrow] = useState(false);
    const handleArrow = ()=>{
        setArrow(!arrow);
    }
    // nav refs to act as marks
    const navbarRef = useRef(null);
    const navContainRef = useRef(null);

    useEffect(()=>{ // using useEffect to produce a sideeffect retractable menu
        const navHeight = navbarRef.current.getBoundingClientRect().height;
        if(arrow){
            navContainRef.current.style.height= '0px';
        }else{
            navContainRef.current.style.height = `${navHeight + 30}px`
        }
    });
    
    return (
    
        <section className = 'navbar-container' ref={navContainRef}>
            <div className='navbar-section' ref={navbarRef}>

                <div className='arrows' onClick={handleArrow}>
                    <button className='arrow-btn' onClick={()=>setArrow(!arrow)}>
                    {arrow ? 
                        <FaArrowDown className='arrow-up'/> 
                        : <FaArrowUp className='arrow-down'/> 
                    }
                    </button>
                </div>
                    {/* menu items traversed */}
                    {menu.map((item, index)=>{
                        const { label, icon } = item;
                        const handleClick = ()=>{
                            if(label === 'Sign In'){
                                showSign();
                            }
                            if(label === 'Add Todo'){
                                showTodoBox();
                            }
                        }
                        return(
                            <ul className='menu-items' key={index}>
                                <li className='item' onClick={handleClick}>{icon}</li>
                            </ul>
                        )
                    })}

            </div>
        </section>
    )
}
export default Navbar;
