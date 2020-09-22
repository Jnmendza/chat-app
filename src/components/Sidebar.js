import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

// Firebase
import db from '../firebase'

// Material UI icon imports
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create'
import InsertComment from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [channels, setChannels] = useState([])
    const [{ user }] = useStateValue();

    useEffect(() => {
        // Run this code once when the sidebar component loads.
        // Go inside database (db) and into the collections in () specify which collection
        // Snapshot basically takes a live picture and whenever it changes it gets updated (real time)
        db.collection('rooms').onSnapshot(snapshot => (
            // Go thru every snapshot of the rooms and map thru them
            setChannels(
                // the () after => means its returning what you're asking for
                snapshot.docs.map(doc => ({
                    // In return we want an object mirroring the schema built in firebase
                    id: doc.id,
                    // data gets back everything inside of the doc. The door into the fields
                    name: doc.data().name
                }))
            )
        ));
    }, []);

    return (
        <div className="sidebar">

            <div className="sidebar__header">

                <div className="sidebar__info">
                    <h2>Chat App</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            {/*By clicking any SidebarOption component that does NOT have an ID as a prop OR
            the addChannelOption then the selectChannel function under the else statement will run from SidebarOption comp */}
            <SidebarOption Icon={InsertComment} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            {/*By just adding the prop addChannelOption, its stating if it is there do whatever you define
            in the SidebarOption component's onClick, in this case it's the addChannel function */}
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>
            {/* Connect to Database and list all the possible channels available
            Similar to what is in the useEffect but this is to render it on the client side */}
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar