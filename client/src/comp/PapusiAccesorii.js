import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PapusiAccesorii() {
  const [accesoriis, setAccesoriis] = useState([]);

  useEffect(() => {
    // Fetch items from the API endpoint
    axios.get('/api/accesorii')
      .then((response) => {
        setAccesoriis(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <div id='home-header'>
      <div className='prodFete'>
          <h1>
            Accesorii pentru jucarii
          </h1>
          {Array.isArray(accesoriis) && accesoriis.length > 0 ? (
            <ul className='produse-toate'>
              {accesoriis.map((Accesorii) => (
                <li key={Accesorii._id} className='produse'>
                  <img src={Accesorii.img} alt={Accesorii.nume} />
                  <div className='descriere-mica-produs'>
                    <h2>{Accesorii.nume}</h2>
                    <div className='star'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                    </div>
                    <h3>{Accesorii.pret} {Accesorii.moneda}</h3>
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

export default PapusiAccesorii;