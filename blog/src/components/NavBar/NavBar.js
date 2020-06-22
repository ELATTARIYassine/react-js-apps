import React from 'react'
import classes from './NavBar.module.css';

const navbar = () => {
    return ( 
        <div className={classes.NavBar}>
            <ul className={classes.NavBarMenu}>
                <li>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Posts</a>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
            <div className={classes.Search}>
                <input type="text" placeholder="Search" />
                <img src={require('../../assets/icons/search.png')} alt=""/>
            </div>
        </div>
    );
}
 
export default navbar;