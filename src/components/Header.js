import React from 'react'
import './Header.css'

import { Avatar } from '@material-ui/core'

// Material UI Icons
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ user }] = useStateValue()

    return (
        <div className="header">
            {/* Left side of the header */}
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
            </div>
            {/* Search input of the header */}
            <div className="header__search">
                <SearchIcon />
                <input placeholder="search"></input>
            </div>

            {/* Right side of the header */}
            <div className="header__right">
                <HelpOutlineIcon />
            </div>

        </div>
    )
}

export default Header
