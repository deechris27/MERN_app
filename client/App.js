import React, {useState} from 'react';
import axios from 'axios';

function App(){

    const [country, setCountry] = useState([]);
    
    const handleChange = (e)=>{
        axios.get(`http://localhost:5000/user?q=${e.target.value}`)
        .then(res=>{
            let newCountries = [...country, ...res.data.data];
            let toBeupdated = newCountries.filter((count, i) => newCountries.indexOf(count) === i);
            setCountry(toBeupdated);
        });
    };
    return(
        <div>
            <input type="text" onChange={handleChange} />
          <ul>
            {country.length && country.map((country,i)=>{
                return <li key={i}>{country}</li>
            })}
          </ul>
        </div>
    )
}

export default App;