import React from 'react';
import style from './spinner.module.css';

const spinner = () => {
    return (
        <div className={style.loader}>Loading...</div>
    );
}

export default spinner;