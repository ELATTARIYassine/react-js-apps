import React, {useState} from 'react'
import classes from './NavBar.module.css';

const Navbar = () => {
    const submitSearch = (event) => {
        event.preventDefault();
        alert('searched');
    }

    const [search, setsearch] = useState(false);

    const openSearch = () => {
        setsearch(true);
    }

    const searchClasse = search ? [classes.SearchInput, classes.SearchInputActive].join(' ') : classes.SearchInput;

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
                <form onSubmit={submitSearch}>
                    <input className={searchClasse} type="text" placeholder="Search" />
                    <img className={classes.SearchIcon} onClick={openSearch} src={require('../../assets/icons/search.png')} alt=""/>
                </form>
            </div>
        </div>
    );
}
 
export default Navbar;