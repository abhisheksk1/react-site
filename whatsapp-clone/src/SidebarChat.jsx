import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./SidebarChat.css";
import Subh from "./Image/Subh.jpg";
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({id, roomname, addNewChat}) {

    const [messages, setMessages]= useState(" ");

    useEffect(() => {
        if (id) {
            db.collection("rooms")
                .doc(id)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) => 
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
    }, [id])
    const createChat = () => {
        const roomName = prompt("Plz Enter name for chat");
        if(roomName){
            // some stuff
            db.collection('rooms').add({
                roomname: roomName,
            });
        } 
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar />
                <div className="sidebarChat_info">
                    <h2>{roomname}</h2>
                    <p>
                        {messages[0]?.message}
                    </p>
                </div> 
            </div>                                              
        </Link>
        
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
};

export default SidebarChat;
