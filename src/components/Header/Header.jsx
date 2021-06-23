import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='nav'>
                <ul>
                    <li><a href='https://twitter.com/seymennklc'><i className='fab fa-twitter fa-lg' /></a></li>
                    <li><a href='https://www.instagram.com/seymennklc/'><i className='fab fa-instagram fa-lg' /></a></li>

                </ul>
            </div>
            <div className='mt-0 header__background'>
                <h1 className='mt-0 header'>Cats</h1>
            </div>
        </div>

    );
};

export default Header;
