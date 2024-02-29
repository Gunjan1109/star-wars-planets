import React, { useState, useEffect } from 'react';
import "./style.css";

const ResidentList = ({ residentsUrls }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const promises = residentsUrls.map(url =>
        fetch(url).then(res => res.json())
      );
      const residentsData = await Promise.all(promises);
      setResidents(residentsData);
    };

    fetchResidents();
  }, [residentsUrls]);

  return (
    <>
      <ul className="residents">
        {residents.map(({ name, height, mass, gender }, index) => (
          <li key={index} className="resident-item">
            <div className="resident-details">
            <p><span className="property">Name:</span> {name}</p>
            <p><span className="property">Height:</span> {height}</p>
            <p><span className="property">Mass:</span> {mass}</p>
            <p><span className="property">Gender:</span> {gender}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ResidentList;
