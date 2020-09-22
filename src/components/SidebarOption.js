import React from 'react'
import './SidebarOption.css'

function SidebarOption({ Icon, title }) {
    return (
        <div className="sidebarOption">
            {/* If there is an Icon, then render the Icon */}
            { Icon && <Icon className="sidebarOption__icon" /> }
            {/* Also render out an h3 with title in it */}
            { Icon ? (
                <h3 className="sidebarOption__channel">{title}</h3>
            ) : (
                <h3>
                 <span className="sidebarOption__hash"> # {title} </span>
                 </h3>
            ) }
        </div>
    )
}

export default SidebarOption
