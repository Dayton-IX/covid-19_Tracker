import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

export default function CountrySelector() {
    const countries = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCounty] = useState('USA');
    if (!countries) return <p>Loading...</p> 
    return (
        <div>
            <h2>Currently Showing {selectedCountry}</h2>
            <select onChange={e => {
                setSelectedCounty(e.target.value);
            }}>
                {Object.entries(countries.countries).map(([country, code]) => {
                    return <option selected={selectedCountry === countries.iso3[code]} key={country} value={countries.iso3[code]}>{country}</option>
                })}
            </select>
            <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
        </div>
    )
}