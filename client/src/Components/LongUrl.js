import React, { useState, useContext } from 'react';
import ShortUrl from './ShortUrl';
import { UserContext } from './UserContext';

const LongUrl = ({ toggleUrlBox, isLongUrlShowing }) => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const context = useContext(UserContext);

  // connect to api
  const shortenBtn = e => {
    // if input form is blank when submit is clicked
    if (url === '') {
      return;
    } else {
      fetch(`/api/url/shorten?userId=${context.id}`, {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          longUrl: url
        })
      })
        .then(res => res.json())
        .then(data => {
          setUrl('');
          toggleUrlBox(!isLongUrlShowing);
          setShortUrl(data.shortUrl);
        });

      // render shortUrl component
      // clear long url input form - useEffect()
      // .then();
    }
  };

  if (shortUrl !== '' && !isLongUrlShowing) {
    return <ShortUrl toggleUrlBox={toggleUrlBox} shortUrl={shortUrl} />;
  }

  return (
    <div className="container">
      <form
        onSubmit={e => {
          e.preventDefault();
          shortenBtn();
        }}
        className="input-form"
      >
        <input
          className="input-bar"
          type="text"
          value={url}
          placeholder="Paste link here"
          onChange={e => {
            setUrl(e.target.value);
          }}
        />
        <button className="shorten-button" type="submit">
          Shorten
        </button>
      </form>
    </div>
  );
};

export default LongUrl;
