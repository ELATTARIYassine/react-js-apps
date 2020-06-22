import React from 'react';
import style from './Header.module.css';

const header = () => {
    return (
        <header className={style.Header}>
            <nav className={style.HeaderMenu}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
            <div>
                Social media links.
            </div>
        </header>
    );
}
 
export default header;