import React from 'react';
import Navbar from '../Components/Navbar';

// will need to use useEffect here to make call to api to update/display link history

const History = () => {
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
          <tr>
            <th scope="row">1</th>
            <td>7/18/19</td>
            <td>
              <a className="url" href="facebook.com">
                https://www.facebook.com/
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>7/17/19</td>
            <td>
              <a className="url" href="facebook.com">
                https://www.facebook.com/
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>7/16/19</td>
            <td>
              <a className="url" href="facebook.com">
                https://www.facebook.com/
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;
