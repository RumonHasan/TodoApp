import React from 'react';
import {FaHome, FaPhone, FaSignInAlt, FaPlus } from 'react-icons/fa';
export const menuItem = [
    {
        label: 'Home',
        icon: <FaHome style={{color: '#EA4C46'}} size={40}/>
    },
    {
        label: 'Contact Us',
        icon: <FaPhone style={{color: '#2a9df4'}} size={40}/>
    },
    {
        label: 'Sign In',
        icon: <FaSignInAlt style={{color: 'ff9933'}} size={40}/>
    },
    {
        label: 'Add Todo',
        icon: <FaPlus style={{color: '#00cc00'}} size={40}/>
    }
]   