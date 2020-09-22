import React from 'react'
import './Chat.css';
import { useParams } from 'react-router-dom';

// Material UI Icons
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

function Chat() {
    // roomId is matching the route parameter in App.js under the Route path
    const { roomId } = useParams();
    return (
        <div className="chat">
            <div className="chat__header">
            
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># general</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat
