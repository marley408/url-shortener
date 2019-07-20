import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import LongUrl from '../Components/LongUrl';
import ShortUrl from '../Components/ShortUrl';

const Home = () => {
  const [isLongUrlShowing, setState] = useState(true);

  const renderUrlBox = () => {
    if (isLongUrlShowing) {
      return <LongUrl toggleUrlBox={() => setState(!isLongUrlShowing)} />;
    } else {
      return <ShortUrl toggleUrlBox={() => setState(!isLongUrlShowing)} />;
    }
  };

  return (
    <>
      <Navbar />
      {renderUrlBox()}
      {/* <div className="App">
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
        <div className="new-url">
          <div className="display-section">Here's your new url</div>
          <button className="copy-button" type="submit">
            Go back
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Home;
