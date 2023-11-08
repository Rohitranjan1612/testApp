import React, { useState, useEffect } from "react";
import style from "../styles/messageHeaderComponent.module.css";

function MessageHeaderComponent(props) {
  return (
    <div className={style.container}>
      <img src={props.data.imageURL} alt="-" className={style.image} />
      <div className={style.header}>{props.data.title}</div>
    </div>
  );
}

export default MessageHeaderComponent;
