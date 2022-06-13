import React from 'react';
import "./App.css";
import moment from 'moment'
const dateTime = new Date()

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for something extraordinary.</h1>
            <p>The website is under maintenance to be handsome on the day.</p>
          </div>
          {/* <a href="mailto:user@example.com">
            <div className="cta">Send us an email</div>
          </a> */}
        </div>
        <div className="header">
          <div className="logo">
            <p>{moment(dateTime).format('dddd')}</p>
          </div>
        </div>
        <div className="footer">
            <p>{moment(dateTime).format('l')}</p>
        </div>
      </div>
    );
  }
}

export default App;