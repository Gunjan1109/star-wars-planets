import React, { useState } from 'react';
import ResidentList from '../resident-list';
import "./style.css";

const PlanetCard = ({ name, climate, population, terrain, residents }) => {

  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <div className="planet-card">
      <div className="planet-info">
      <h2 className="planet-name">{name}</h2>
      <div className="planet-details">
        <p><span className="detail-label">Climate:</span> {climate}</p>
        <p><span className="detail-label">Population:</span> {population}</p>
        <p><span className="detail-label">Terrain:</span> {terrain}</p>
      </div>
      </div>
      <div className="resident-info" onWheel={handleScroll}>
      <ResidentList residentsUrls={residents} />
      </div>
    </div>
  );
};

export default PlanetCard;
