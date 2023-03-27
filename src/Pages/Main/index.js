import './styles.css';
import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

function Main() {
  const [name, setName] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLinkedinChange = (event) => {
    setLinkedin(event.target.value);
  };

  const handleGithubChange = (event) => {
    setGithub(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = `${name}`;
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="container">
      <h1>QR Code Image Generator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <label htmlFor="linkedin">LinkedIn URL:</label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          value={linkedin}
          onChange={handleLinkedinChange}
          required
        />
        <label htmlFor="github">GitHub URL:</label>
        <input
          type="url"
          id="github"
          name="github"
          value={github}
          onChange={handleGithubChange}
          required
        />
        <button type="submit">Generate Image</button>
      </form>
    </div>
  );
}

export default Main;
