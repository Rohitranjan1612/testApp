import React, { useState, useEffect } from "react";
import AllChatsComponent from "../components/AllChatsComponent";
import ChatMessageComponent from "../components/ChatMessageComponent";
import { allChats } from "../services";

function AllChats() {
  const [allChatsData, setAllChatsData] = useState([]);
  const [chatMessageId, setChatMessageId] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const fetchAllChats = async () => {
    const data = await allChats();
    // data.messageList = [{
    //   title: "12/01/2021",
    //   allmessage: []
    // }]
    setAllChatsData(data.data);
  };
  useEffect(() => {
    fetchAllChats();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        overflowY: "hidden"
      }}
    >
      <AllChatsComponent
        allChatsData={allChatsData}
        setChatMessageId={setChatMessageId}
        setSearchInput={setSearchInput}
        chatMessageId={chatMessageId}
        searchInput={searchInput}
      />
      {chatMessageId ? (
        <ChatMessageComponent
          data={allChatsData.filter((e) => e.id === chatMessageId)[0]}
        />
      ) : null}
    </div>
  );
}

export default AllChats;
