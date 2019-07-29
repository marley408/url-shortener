import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import LongUrl from '../Components/LongUrl';
import Greeting from '../Components/Greeting';

const Home = () => {
  const [isLongUrlShowing, setState] = useState(true);

  return (
    <div>
      <Navbar />
      <Greeting />
      <LongUrl
        isLongUrlShowing={isLongUrlShowing}
        toggleUrlBox={() => setState(!isLongUrlShowing)}
      />
    </div>
  );
};

export default Home;

/* <div className="App">
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
      </div> */
