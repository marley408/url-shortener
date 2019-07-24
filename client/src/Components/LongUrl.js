import React, { useState } from 'react';

const LongUrl = ({ toggleUrlBox }) => {
  const [url, setUrl] = useState(null);

  // connect to api
  const shortenBtn = e => {
    // if input form is blank
    if (url === null) {
      alert('You need to enter a url');
    } else {
      e.preventDefault();
      fetch('http://localhost:5000/api/url/shorten', {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          longUrl: url
        })
      })
        // GET request
        .then()

        // render shortUrl component
        .then();
    }
  };

  return (
    <div className="container">
      <form className="input-form">
        <input
          className="input-bar"
          type="text"
          placeholder="Paste link here"
        />
        <button
          onChange={setUrl}
          onClick={toggleUrlBox}
          className="shorten-button"
          type="submit"
        >
          Shorten
        </button>
      </form>
    </div>
  );
};

export default LongUrl;
