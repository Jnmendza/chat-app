import React from 'react';
import './SidebarOption.css';
import { useHistory } from 'react-router-dom';
import db from '../firebase';

function SidebarOption({ Icon, title, id,  addChannelOption }) {
    // keeps track of your web page history like the <- and -> of browser
    const history = useHistory();

    // Whenever you click on the channel in the sidebar, if you get an ID from the selected channel
    // place that id at the end of the path
    const selectChannel = () => {
        if(id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title)
        }
    }

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')

        if(channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }


    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel } >
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
