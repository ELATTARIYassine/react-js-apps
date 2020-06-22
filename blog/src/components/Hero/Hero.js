import React from 'react';
import classes from './Hero.module.css';
import Card from '../UI/Card/Card';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

const hero = () => {
    return (
        <div>
            <Card>
                <div style={{padding: '50px 0'}}>
                    <Logo />
                </div>
                <NavBar />
            </Card>
        </div>
    );
}
 
export default hero;