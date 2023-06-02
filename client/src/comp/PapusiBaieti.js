import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PapusiBaieti() {
  const [baietis, setBaietis] = useState([]);

  useEffect(() => {
    // Fetch items from the API endpoint
    axios.get('/api/baieti')
      .then((response) => {
        setBaietis(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <div id='home-header'>
      <div className='prodFete'>
          <h1>
            Păpuși destinate baietilor
          </h1>
          {Array.isArray(baietis) && baietis.length > 0 ? (
            <ul className='produse-toate'>
              {baietis.map((Baieti) => (
                <li key={Baieti._id} className='produse'>
                  <img src={Baieti.img} alt={Baieti.nume} />
                  <div className='descriere-mica-produs'>
                    <h2>{Baieti.nume}</h2>
                    <div className='star'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                    </div>
                    <h3>{Baieti.pret} {Baieti.moneda}</h3>
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

export default PapusiBaieti;