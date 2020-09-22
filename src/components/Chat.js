import React, { useEffect, useState } from 'react'
import './Chat.css';
import { useParams } from 'react-router-dom';
import db from "../firebase";

// Material UI Icons
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

function Chat() {
    // roomId is matching the route parameter in App.js under the Route path
    const { roomId } = useParams();
    // Stores the details in the rooms
    const [roomDetails, setRoomDetails] = useState(null)

    useEffect(() => {
        // only run this code if the roomId exist
        if(roomId) {
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot => (
                // sets the setRoomDetails with the data(field) that is in the individual room in db
                setRoomDetails(snapshot.data())
            ))
        }
        // roomId is the dependency bc we need to update it every time it changes
    }, [roomId])


    return (
        <div className="chat">
            <div className="chat__header">

                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name}</strong>
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
