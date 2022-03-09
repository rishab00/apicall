import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [val, setVal] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value; 
    setVal(data);
    onSearch(data);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search by Name"
        value={val}
        onChange={inputEvent}
      />
    </div>
  );
};

export default Search;
