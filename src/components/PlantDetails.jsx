import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PlantDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // suggestion passed via state
  const suggestion = location.state?.suggestion;

  if (!suggestion) {
    return (
      <div>
        <h2>No plant selected</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const details = suggestion.plant_details || {};

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1>{suggestion.plant_name}</h1>
      <p><strong>Confidence:</strong> {(suggestion.probability * 100).toFixed(1)}%</p>
      <p><strong>Description:</strong> {details.wiki_description?.value || 'No description available.'}</p>
      {details.common_names && details.common_names.length > 0 && (
        <p><strong>Common Names:</strong> {details.common_names.join(', ')}</p>
      )}
      {details.taxonomy && (
        <div>
          <h3>Taxonomy</h3>
          <ul>
            <li><strong>Kingdom:</strong> {details.taxonomy.kingdom}</li>
            <li><strong>Phylum:</strong> {details.taxonomy.phylum}</li>
            <li><strong>Class:</strong> {details.taxonomy.class}</li>
            <li><strong>Order:</strong> {details.taxonomy.order}</li>
            <li><strong>Family:</strong> {details.taxonomy.family}</li>
            <li><strong>Genus:</strong> {details.taxonomy.genus}</li>
          </ul>
        </div>
      )}
      {details.url && (
        <p>
          <a href={details.url} target="_blank" rel="noreferrer">
            Learn more on Wikipedia
          </a>
        </p>
      )}
    </div>
  );
};

export default PlantDetails;
