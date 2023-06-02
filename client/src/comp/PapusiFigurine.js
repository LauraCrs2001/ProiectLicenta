import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PapusiFigurine() {
  const [figurines, setFigurines] = useState([]);

  useEffect(() => {
    // Fetch items from the API endpoint
    axios.get('/api/figurine')
      .then((response) => {
        setFigurines(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <div id='home-header'>
      <div className='prodFete'>
          <h1>
            Figurine Anime
          </h1>
          {Array.isArray(figurines) && figurines.length > 0 ? (
            <ul className='produse-toate'>
              {figurines.map((Figurine) => (
                <li key={Figurine._id} className='produse'>
                  <img src={Figurine.img} alt={Figurine.nume} />
                  <div className='descriere-mica-produs'>
                    <h2>{Figurine.nume}</h2>
                    <div className='star'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                    </div>
                    <h3>{Figurine.pret} {Figurine.moneda}</h3>
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

export default PapusiFigurine;