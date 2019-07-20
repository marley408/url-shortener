import React from 'react';

const LongUrl = ({ toggleUrlBox }) => {
  return (
    <div className="App">
      <form className="input-form">
        <input
          className="input-bar"
          type="text"
          placeholder="Paste link here"
        />
        <button onClick={toggleUrlBox} className="shorten-button" type="submit">
          Shorten
        </button>
      </form>
    </div>
  );
};

export default LongUrl;
