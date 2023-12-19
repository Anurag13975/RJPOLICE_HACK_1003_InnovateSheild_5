import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const HomePageComponent = () => {
  return (
    <div>
      <br></br>
      <h3>Don't get Hooked by a Phish again ! 👮‍♂️</h3>
      <p className="homepagepara">
        Don't get caught in a phishing trap. Happens 2.6 million times a year,
        but with our app, you can protect yourself.
      </p>
      <img
        className="homepageimg"
        src="https://phishr.vercel.app/static/media/Phishing-account.829592d40e29d8dc5753.gif"
        alt="this is an gif"
      />

      <div>
        <div>
          <Form.Control
            className="homepageinputbox"
            type="text"
            placeholder="Enter website address or URL(eg- www.google.com)"
          />
        </div>
        <Button variant="warning">Scan URL</Button>
      </div>
    </div>
  );
};

export default HomePageComponent;
