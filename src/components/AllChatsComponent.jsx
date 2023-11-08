import React, { useState, useEffect } from "react";
import style from "../styles/allChatsComponent.module.css";
import ChatlistComponent from "./ChatlistComponent";
import SearchHeaderComponent from "./SearchHeaderComponent";

function AllChatsComponent(props) {
  return (
    <div
      style={{
        flex: 1,
        overflow: "scroll",
      }}
    >
      <SearchHeaderComponent
        setSearchInput={props.setSearchInput}
        searchInput={props.searchInput}
      />
      {props.allChatsData
        .filter((e) =>
          props.searchInput
            ? e.title.includes(props.searchInput) ||
              e.orderId.includes(props.searchInput)
            : true
        )
        .map((data) => (
          <ChatlistComponent
            data={data}
            key={data.id}
            setChatMessageId={props.setChatMessageId}
            chatMessageId={props.chatMessageId}
          />
        ))}
    </div>
  );
}

export default AllChatsComponent;
