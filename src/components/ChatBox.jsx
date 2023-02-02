import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "./Header";
import Sender from "./Sender";
import MessageShow from "./MessageShow";
import "./profile.css";

function ChatBox(){
    return(
        <Box className="chat-box-container">
            <Container style={{backgroundColor:"#1e1e1e"}}>
                <Header />
                <MessageShow />
                <Sender />
            </Container>
        </Box>
    )
}


export default ChatBox;