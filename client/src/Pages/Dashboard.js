import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="App">
        <form className="input-form">
          <input
            className="input-bar"
            type="text"
            placeholder="Paste link here"
          />
          <button className="shorten-button" type="submit">
            Shorten
          </button>
        </form>
        {/* <div className="new-url">
          <div className="display-section">Here's your new url</div>
          <button className="copy-button" type="submit">
            Shorten
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
