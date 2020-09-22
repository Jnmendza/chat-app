import React, { useEffect, useState } from 'react'
import './Chat.css';
import { useParams } from 'react-router-dom';
import db from "../firebase";

import Message from './Message'

// Material UI Icons
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

function Chat() {
    // roomId is matching the route parameter in App.js under the Route path
    const { roomId } = useParams();
    // Stores the details in the rooms
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        // only run this code if the roomId exist
        if(roomId) {
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot => (
                // sets the setRoomDetails with the data(field) that is in the individual room in db
                setRoomDetails(snapshot.data())
            ))
        }

        // now get the collection of messages if the room has any msgs in asc order by time stamp
        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => setRoomMessages(
                snapshot.docs.map(doc => doc.data())
            )
        )

        // roomId is the dependency bc we need to update it every time it changes
    }, [roomId])

    console.log("MESSAGES >>>", roomMessages)
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
            {/* map thru every msg, deconstruct it and pass the props */}
            <div className="chat__messages">
                {roomMessages.map(({message, timestamp, user, userImage}) => (
                    <Message 
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat
