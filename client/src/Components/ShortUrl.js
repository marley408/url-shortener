import React from 'react';

const ShortUrl = props => {
  const { toggleUrlBox } = props;

  return (
    <div className="container">
      <div className="new-url">
        <div className="display-section">Here's your new url</div>
        <button onClick={toggleUrlBox} className="back-button">
          Go back
        </button>
      </div>
    </div>
  );
};

export default ShortUrl;
