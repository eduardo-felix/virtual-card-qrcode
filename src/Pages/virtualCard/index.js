import './styles.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

function VirtualCard() {
  const [user, setUser] = useState([])
  const [search, setSearch] = useState(false)
  const { name, id } = useParams()

  useEffect(() => {
      const getUser = async () => {
          try {
              const user = await api(`${id}/${name}`)

              setUser(user.data)
              setSearch(true)
              
              return
          } catch (error) {
              console.log(error)
          }
      }

      getUser()
  }, [search, id, name])

  return (       
      
    <div className="container">
    <h1>Hello, my name is {name}</h1>   
        
      <div className='buttons-container'>
      <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
          <button type="link" > LinkedIn</button>
      </a>      
      <a href={user.github} target="_blank" rel="noopener noreferrer">
          <button type="link" > GitHub</button>
      </a>
      </div>
        
  </div>
    
  );
}

export default VirtualCard;
