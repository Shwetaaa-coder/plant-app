import React from "react";

const sampleData = {
  access_token: "GIe6akEJKXSBebJ",
  result: {
    is_plant: {
      probability: 0.47637302,
      binary: false,
      threshold: 0.5
    },
    classification: {
      suggestions: [
        {
          id: "ae8faed4a61d9de2",
          name: "Leucojum vernum",
          probability: 0.9998723,
          similar_images: [
            {
              id: "587aeca4494253948c702d8356b4bebc2557a63d",
              url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/587/aeca4494253948c702d8356b4bebc2557a63d.jpg",
              license_name: "CC0",
              similarity: 0.683,
              url_small: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/587/aeca4494253948c702d8356b4bebc2557a63d.small.jpg"
            },
            {
              id: "dffa4fc0912feefa1516df8c20c080286556269f",
              url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/dff/a4fc0912feefa1516df8c20c080286556269f.jpeg",
              similarity: 0.543,
              url_small: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/dff/a4fc0912feefa1516df8c20c080286556269f.small.jpeg"
            }
          ]
        }
      ]
    }
  },
  status: "COMPLETED"
};

const PlantResult = () => {
  const suggestion = sampleData.result.classification.suggestions[0];

  return (
    <div style={{ fontFamily: "Arial", maxWidth: 600, margin: "20px auto" }}>
      <h2>Plant Identification Result</h2>

      <div style={{ border: "1px solid #ccc", borderRadius: 10, padding: 20 }}>
        <h3>🌿 {suggestion.name}</h3>
        <p>
          <strong>Confidence:</strong>{" "}
          {(suggestion.probability * 100).toFixed(2)}%
        </p>

        <h4>Similar Images:</h4>
        <div style={{ display: "flex", gap: 15 }}>
          {suggestion.similar_images.map((img) => (
            <div key={img.id}>
              <img
                src={img.url_small}
                alt="Similar plant"
                style={{ width: 120, borderRadius: 6 }}
              />
              <p style={{ fontSize: 12, marginTop: 5 }}>
                Similarity: {(img.similarity * 100).toFixed(1)}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantResult;
