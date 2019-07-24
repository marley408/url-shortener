import React from 'react';

const ShortUrl = props => {
  const { toggleUrlBox, shortUrl } = props;

  const backBtn = () => {
    // back button will need to render a blank long url input form
  };

  return (
    <div className="container">
      <div className="new-url">
        <div className="display-section">
          <span>{shortUrl}</span>
        </div>
        <button onClick={toggleUrlBox} className="back-button">
          Go back
        </button>
      </div>
    </div>
  );
};

export default ShortUrl;
