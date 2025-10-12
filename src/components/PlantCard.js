// // // src/components/PlantCard.js
// // import React from 'react';
// // import './PlantCard.css';

// // const PlantCard = ({ plant }) => {
// //   return (
// //     <div className="plant-card">
// //       <img src={plant.image} alt={plant.name} className="plant-image" />
// //       <div className="plant-details">
// //         <h3>{plant.name}</h3>
// //         <p>{plant.description}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PlantCard;


// // src/components/PlantCard.js
// import React from 'react';
// import './PlantCard.css';

// const PlantCard = ({ plant }) => {
//   return (
//     <div className="plant-card">
//       <img src={plant.image} alt={plant.name} className="plant-image" />
//       <div className="plant-details">
//         <h3>{plant.name}</h3>
//         <p>{plant.description}</p>
//       </div>
//     </div>
//   );
// };

// export default PlantCard;


// PlantCard.js
import React from 'react';
import './PlantCard.css';

const PlantCard = ({ plant, onAdd, onRemove }) => {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <div className="plant-details">
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <p>{plant.environment}</p>
        {onAdd && <button onClick={() => onAdd(plant)}>Add to Garden</button>}
        {onRemove && <button onClick={() => onRemove(plant.id)}>Remove from Garden</button>}
      </div>
    </div>
  );
};

export default PlantCard;

