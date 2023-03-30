import './styles.css';
import React, { useState, useEffect } from 'react';
import api from '../../services/api'

function Qrcode ({name, linkedin, github}) {
  const [qrCodeImage, setQRCodeImage] = useState('');

  const registerUser = async () => {
    try {
      const response = await api.post('/register', {
        name: name,
        linkedin: linkedin,
        github: github
      },  { responseType: 'arraybuffer' });
      const base64 = btoa(
        new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      setQRCodeImage(`data:image/svg+xml;base64,${base64}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser();
  };

  return (       
    <div className="container">
      <h1>Hello, my name is {name}</h1>
      <h2>Scam me</h2>   
      <form onSubmit={handleSubmit}>
        <button type="submit">Generate QR Code</button>
      </form>
      {qrCodeImage && <img src={qrCodeImage} alt="QR Code" />}    
    </div>
  );
}

export default Qrcode;


