import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Searh Your Favourite Food</h2>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/restaurant'>Restaurant</Link>

        </div>
    );
};

export default Header;