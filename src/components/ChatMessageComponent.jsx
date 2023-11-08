import React, { useState, useEffect } from "react";
import MessageHeaderComponent from "./MessageHeaderComponent";
import ChatBodyComponent from "./ChatBodyComponent";
import ChatFooterComponent from "./ChatFooterComponent";

function ChatMessageComponent(props) {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#f1f3f6",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MessageHeaderComponent data={props.data} />
      <ChatBodyComponent />
      <ChatFooterComponent />
    </div>
  );
}

export default ChatMessageComponent;
