import React from "react";

import "./Searchbox.css";

const Searchbox = ({ handleSearchChange, search }) => {
  return (
    <form className="searchbox">
      <input
        type="text"
        value={search}
        placeholder="Name of city or village"
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default Searchbox;
