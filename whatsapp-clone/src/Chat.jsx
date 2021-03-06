import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Message, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import "./Chat.css";
import {useParams} from "react-router-dom";
import db from './firebase';
import userEvent from '@testing-library/user-event';
import firebase from "firebase";
import {useStateValue} from "./StateProvider"



function Chat() {
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().roomname)
            ))
            db.collection('rooms').doc(roomId)
                .collection("messages").orderBy
                ('timestamp', 'asc').onSnapshot(snapshot => (setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            roomName: user.displayName, 
            timestamp:  firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    };
    
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen {" "}
                        {new Date(
                            messages[messages.length-1]?.
                            timestamp?.toDate()
                        ).toUTCString()}
                    </p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                {messages.map(message => (
                    <p 
                        className={`chat_message ${ 
                            message.roomName === user.displayName
                            && 'chat_reciever'}`}
                    >
                        <span className="chat_name">
                            {message.roomName}
                        </span>
                        {message.message}
                        <span className="chat_timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
            </div>

            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        type="text" 
                        placeholder="Type a message"
                    />
                    <button onClick={sendMessage} type="submit">Send</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat;
