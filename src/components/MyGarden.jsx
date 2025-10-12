// MyGarden.js
import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import PlantIdentifier from './PlantIdentifier';

const MyGarden = () => {
  const [gardenPlants, setGardenPlants] = useState([]);

  useEffect(() => {
    const savedGarden = JSON.parse(localStorage.getItem('myGardenPlants')) || [];
    setGardenPlants(savedGarden);
  }, []);

  const removeFromGarden = (id) => {
    const updated = gardenPlants.filter(plant => plant.id !== id);
    setGardenPlants(updated);
    localStorage.setItem('myGardenPlants', JSON.stringify(updated));
  };

  if (gardenPlants.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Your garden is empty. Add some plants from the library!</p>;
  }

  return (
    <div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '1.5rem', padding: '1rem' }}>
      {gardenPlants.map(plant => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onRemove={removeFromGarden}
        />
      ))}
    </div>
     <hr className="section-divider" />
    <div className="identifier-section">
        <h3 style={{textAlign:'center'}}>Identify a New Plant</h3>
        <PlantIdentifier />

      

      </div>
    </div>
  );
};

export default MyGarden;
