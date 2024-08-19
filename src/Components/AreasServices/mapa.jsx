import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import './MapComponent.css';
import cities from './cityData.ts';
import markerSvg from '../../assets/img/areas/map-marker.svg';

// Icono del marcador utilizando el SVG específico
const markerIcon = L.icon({
  iconUrl: markerSvg,
  iconSize: [40, 60],
  iconAnchor: [20, 60],
  popupAnchor: [0, -60],
});

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const suggestionsRef = useRef(null);

  const handleSuggestionClick = (city) => {
    setQuery(city.name);
    setSuggestions([]);
    setActiveSuggestion(0);
    onSearch(city);
  };

  const handleSearch = () => {
    const city = cities.find(c =>
      c.name.toLowerCase() === query.toLowerCase() || c.zips.includes(query)
    );
    if (city) {
      onSearch(city);
      setSuggestions([]);
      setActiveSuggestion(0);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    if (value) {
      const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(value) || city.zips.some(zip => zip.startsWith(value))
      ).slice(0, 5);
      setSuggestions(filteredCities);
      setActiveSuggestion(0);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' && activeSuggestion < suggestions.length - 1) {
      setActiveSuggestion(activeSuggestion + 1);
    } else if (e.key === 'ArrowUp' && activeSuggestion > 0) {
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.key === 'Enter' && suggestions[activeSuggestion]) {
      handleSuggestionClick(suggestions[activeSuggestion]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search city or ZIP code..."
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleSearch}>Search</button>
      {suggestions.length > 0 && (
        <ul className="suggestions-list" ref={suggestionsRef}>
          {suggestions.map((city, index) => (
            <li
              key={`${city.name}-${city.zips[0]}`}
              onClick={() => handleSuggestionClick(city)}
              className={index === activeSuggestion ? 'active' : ''}
            >
              {city.name} - ZIP: {city.zips.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MapComponent = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const navigate = useNavigate();

  const handleInspectionRequest = () => {
    navigate('/contact#contact-map');
  };

  return (
    <div className="map-search-component">
      <div className="search-section">
        <h1>Find a City in Connecticut</h1>
        <p>Search for a city or ZIP code to see its location and details.</p>
        <Search onSearch={setSelectedCity} />
        {selectedCity && (
          <div className="city-info">
            <h2>Congratulations!</h2>
            <p>We offer services in your area. You can call {selectedCity.contact} to schedule an inspection or, if you prefer, request one here:</p>
            <button type="button" onClick={handleInspectionRequest} className="quote-button">
              Request an Inspection
            </button>
          </div>
        )}
      </div>
      <div className="map-section">
        <MapContainer center={[41.6032, -73.0877]} zoom={8} className="map-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {selectedCity && (
            <Marker
              position={[selectedCity.lat, selectedCity.lng]}
              icon={markerIcon}
            >
              <Tooltip>{selectedCity.name}</Tooltip>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
