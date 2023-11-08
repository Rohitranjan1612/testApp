import React, { useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";

function ChatBodyComponent(props) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px"
      }}
    >
      <input
        style={{
          backgroundColor: "#fff",
          border: "none",
        }}
        placeholder="Type a message"
      />
      <AiOutlineSend />
    </div>
  );
}

export default ChatBodyComponent;
