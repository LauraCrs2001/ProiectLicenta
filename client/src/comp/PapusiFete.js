import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PapusiFete() {
  const [fetes, setFetes] = useState([]);

  useEffect(() => {
    // Fetch items from the API endpoint
    axios.get('/api/fete')
      .then((response) => {
        setFetes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <div id='home-header'>
      <div className='prodFete'>
          <h1>
            Păpuși destinate fetelor
          </h1>
          {Array.isArray(fetes) && fetes.length > 0 ? (
            <ul className='produse-toate'>
              {fetes.map((Fete) => (
                <li key={Fete._id} className='produse'>
                  <img src={Fete.img} alt={Fete.nume} />
                  <div className='descriere-mica-produs'>
                    <h2>{Fete.nume}</h2>
                    <div className='star'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                    </div>
                    <h3>{Fete.pret} {Fete.moneda}</h3>
                  </div>
                  <a href='#'><i className='fa-solid fa-cart-shopping'></i></a>
                </li>
              ))}
            </ul>
          ) : (
            <h1>Error</h1>
          )}
      </div>
    </div>
  );
}

export default PapusiFete;