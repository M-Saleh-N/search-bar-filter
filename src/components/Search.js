import { useState } from "react";
import "./Search.css";

const items = [
    'Tesla Model S', 'Ford Mustang', 'Chevrolet Camaro', 'Porsche 911', 'Lamborghini Huracán',
    'Toyota Supra', 'BMW M3', 'Mercedes-Benz C-Class', 'Audi R8', 'Nissan GT-R',
    'Honda Civic Type R', 'Ferrari F8 Tributo', 'McLaren 720S', 'Subaru WRX', 'Dodge Charger',
    'Jaguar F-Type', 'Mazda MX-5', 'Volkswagen Golf GTI', 'Aston Martin DB11', 'Kia Stinger',
    'Hyundai Veloster', 'Bugatti Chiron'
  ];

function Search() {
  const [filter, setFilter] = useState("");
  const filteredItems = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="search-cont">
      <input type="text" placeholder="Search For a Car" value={filter} 
        onChange={(e) => setFilter(e.target.value)} className="search-input" />
      <ul className="result-li">
        {filteredItems.length ? filteredItems.map((item, index) => (
          <li key={index} className="result-item">{item}</li>
        )) : <li className="no-results">No match found.</li>}
      </ul>
    </div>
  );
}

export default Search;