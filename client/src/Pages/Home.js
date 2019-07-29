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
