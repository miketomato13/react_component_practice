import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.js';

class Navbar extends Component {
    render () {
        return (
            <nav>
            <ul>
                <li><a href='#about-me'>About Me</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact-me'>Contact</a></li>
            </ul>
            </nav>
        )
    }
}



export default Navbar;
