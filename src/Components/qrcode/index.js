import './styles.css';
import React, { useState, useEffect } from 'react';
import api from '../../services/api'

function Qrcode ({name, linkedin, github}) {

    const [qrCodeImage, setQRCodeImage] = useState('');

    useEffect(()=>{

      const registerUser = async () => {
        try {
          const response = await api.post('/register', {
            name: name,
            linkedin: linkedin,
            github: github
          });
          setQRCodeImage(response.data.qrcode);
        } catch (error) {
          
        }
      }
      registerUser();

    }, [name, linkedin, github]);

    const downloadQRCodeImage = () => {
      const link = document.createElement('a');
      link.href = qrCodeImage;
      link.download = 'qrcode.svg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

  return (       
      
      <div className="container">
          <div className="center-container">
              <h1 className='hello'>Hello, my name is {name} !</h1>
              <h2 className='scam'> Scam me </h2>   
              <img src={qrCodeImage} alt="QR Code" /> 
              <button onClick={downloadQRCodeImage}>Download QR Code</button>

          </div>   
      </div>
    
  );
}

export default Qrcode;

