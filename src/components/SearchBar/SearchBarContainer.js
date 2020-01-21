import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = props => {
  const [input, setInput] = useState("");
  

  const handleChange = e => {
    setInput(e.target.value);  
    if (e.target.value===""){
      setInput("")
  }
  };

  useEffect(() => {
    const results = props.data.filter( person =>
      person.username.toLowerCase().includes(input)
    );
    props.setData(results);
  }, [input]);


  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram" />
      </div>

      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
          value={input}
          name="input"
          onChange={handleChange}
        />
      </form>

      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
