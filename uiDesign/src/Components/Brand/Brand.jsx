import React from "react";
import './Brand.css'

const Brand = () => {
  return (
    <div className="brand-container">
     
      <div className="brand-info">
        <div className="brand-card">
          <h3>Millions</h3>
          <p>BMW owners using ConnectedDrive Store</p>
        </div>
        <div className="brand-card">
          <h3>350+</h3>
          <p>US dealerships</p>
        </div>
        <div className="brand-card">
          <h3>Products used</h3>
          <p>Integrations <br /> HR</p>
        </div>
      </div>

     
      <div className="brand-image">
        <img
          src="https://fastly.picsum.photos/id/116/900/600.jpg?hmac=Tk02PhaQ8gYVMxfLnjhQe2ygWoJiM7YgoIqZ1qxpqGc"
          alt="BMW Keka Integration"
        />
        <div className="brand-overlay">
          <div className="brand-logo">🔵</div>
          <p className="brand-text">
            Learn why BMW chose Keka to power e-commerce and integrations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
