import './styles.css';
import React, { useState } from 'react';
import Generator from '../../Components/qrcodeGenerator';
import Qrcode from '../../Components/qrcode';


function Main() {
  let currentPath = window.location.pathname
  const [name, setName] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');  
  const [redirectTo, setRedirectTo] = useState("");  

    
  return (    
    <div className="container333">
      {currentPath === '/' && redirectTo === "" && 
        <Generator 
          name={name}
          setName={setName}
          linkedin={linkedin}
          setLinkedin={setLinkedin}
          github={github}
          setGithub={setGithub}
          setRedirectTo={setRedirectTo}          
          redirectTo={redirectTo}
        />
      }
      {redirectTo !== "" &&
        <Qrcode 
          name={name}
          linkedin={linkedin}
          github={github}
        />
      }
    </div>
  );
}

export default Main;
