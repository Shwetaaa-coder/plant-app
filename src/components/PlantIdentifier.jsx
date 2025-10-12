import React, { useState } from "react";
import axios from "axios";

export default function PlantIdentifier() {
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Convert image file to base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Remove the prefix like "data:image/jpeg;base64,"
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });

  const identifyPlant = async () => {
    if (!imageFile) {
      alert("Please upload an image first.");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const base64Image = await toBase64(imageFile);

      const requestBody = {
        images: [base64Image],
        // You may add valid modifiers here if needed, e.g.:
        // modifiers: ["similar_images=true"],
      };

      const response = await axios.post(
        "https://plant.id/api/v3/identification",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            "Api-Key": "2q98rUaWSqVrQgT0Bcey80CrvSBmsvakUf8J8sD6FnW54IHTqH",
          },
        }
      );

      setResult(response.data);
    } catch (err) {
      console.error("Error identifying plant:", err.response?.data || err.message);
      setError(JSON.stringify(err.response?.data || err.message));
    } finally {
      setLoading(false);
    }
  };

  // Helper to render suggestions
  const renderSuggestions = () => {
    const suggestions = result?.result?.classification?.suggestions;
    if (!suggestions || !Array.isArray(suggestions) || suggestions.length === 0) {
      return <p>No plant identified.</p>;
    }
    return (
      <div style={{ marginTop: 30 }}>
        <h2>Identification Suggestions</h2>
        {suggestions.map((item, idx) => (
          <div key={item.id || idx} style={{ border: "1px solid #ccc", padding: 20, borderRadius: 6, marginBottom: 20 }}>
            <p>
              <strong>Scientific Name:</strong> {item.name}
            </p>
            <p>
              <strong>Probability:</strong> {(item.probability * 100).toFixed(2)}%
            </p>
            {/* You can add more fields from item.details if needed */}
          </div>
        ))}
      </div>
    );
  };


  return (
  <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
    <h1>Plant Identifier</h1>
    <input
      type="file"
      accept="image/*"
      onChange={(e) => {
        setImageFile(e.target.files[0]);
        setResult(null);
        setError(null);
      }}
    />
    <br />
    <button onClick={identifyPlant} disabled={loading} style={{ marginTop: 10 }}>
      {loading ? "Identifying..." : "Identify Plant"}
    </button>

    {error && (
      <p style={{ color: "red", marginTop: 20 }}>
        Error identifying plant: {error}
      </p>
    )}

    {/* Show uploaded image */}
    {imageFile && (
      <div style={{ marginTop: 20 }}>
        <h3>Uploaded Image:</h3>
        <img
          src={URL.createObjectURL(imageFile)}
          alt="Uploaded Plant"
          style={{ maxWidth: "100%", borderRadius: 8, marginBottom: 20 }}
        />
      </div>
    )}

    {result && renderSuggestions()}
  </div>
);
}
