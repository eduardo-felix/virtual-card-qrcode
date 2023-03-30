import './styles.css';
import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { BrowserRouter as Router, Navigate } from "react-router-dom";

function Generator({
name,
setName,
linkedin,
setLinkedin,
github,
setGithub,
redirectTo,
setRedirectTo
}) 
{
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
        setRedirectTo(name);
      };
      
  
    //   if (redirectTo) {
    //     return <Navigate to={`/qrcode/${redirectTo}`}/>;
    //   }
      

    return (    
    
      <div className="container">
      <h1>QR Code Image Generator</h1>      
      <form  id='form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name={name}
          value={name}
          onChange={handleNameChange}          
          setName={setName}
          setRedirectTo={setRedirectTo}
          redirectTo={redirectTo}
          required
        />
        <label htmlFor="linkedin">LinkedIn URL:</label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          value={linkedin}
          onChange={handleLinkedinChange}
          setLinkedin={setLinkedin}
          required
        />
        <label htmlFor="github">GitHub URL:</label>
        <input
          type="url"
          id="github"
          name="github"
          value={github}
          onChange={handleGithubChange}
          setGithub={setGithub}
          required
        />
        <button type="submit" > Generate Code</button>
      </form>      
    </div>
    
  );
}

export default Generator;
