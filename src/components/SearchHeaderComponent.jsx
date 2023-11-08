import React, { useState, useEffect } from "react";
import style from "../styles/searchHeaderComponent.module.css";

function SearchHeaderComponent(props) {
  return (
    <div className={style.container}>
      <div className={style.header}>Filter by title / Order Id</div>
      <input
        className={style.searchInput}
        placeholder="Start typing to search"
        onChange={(e) => props.setSearchInput(e.target.value)}
        value={props.searchInput}
      />
    </div>
  );
}

export default SearchHeaderComponent;
