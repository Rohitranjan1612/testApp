import moment from "moment";
import React from "react";
import style from "../styles/chatlistComponent.module.css";

function ChatlistComponent(props) {
  return (
    <div
      className={
        props.chatMessageId === props.data.id
          ? style.container2
          : style.container
      }
      onClick={() => props.setChatMessageId(props.data.id)}
    >
      <div className={style.subContainer}>
        <img src={props.data.imageURL} alt="-" className={style.image} />
        <div className={style.header}>
          {props.data.title} Order {props.data.orderId}
        </div>
      </div>
      <div className={style.timeStamp}>
        {moment(props.data.latestMessageTimestamp).format("DD/MM/YYYY")}
      </div>
    </div>
  );
}

export default ChatlistComponent;
