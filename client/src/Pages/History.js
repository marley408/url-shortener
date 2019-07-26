import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { set } from 'mongoose';

// will need to use useEffect here to make call to api to update/display link history

const History = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const res = await fetch('http://localhost:5000/api/user/history');
      const data = await res.json();

      setUrls(data);
    };

    fetchUrls();
  }, []);

  return (
    <div>
      <Navbar />
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date Created</th>
            <th scope="col">Url</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{url.date}</td>
                <td>
                  <a className="url" href={url.shortUrl}>
                    {url.shortUrl}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default History;
