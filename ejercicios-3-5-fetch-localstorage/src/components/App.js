/* eslint-disable no-lone-blocks */
// Fichero src/components/App.js
import '../styles/App.css';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

{/* 
const App = () => {
  // Estados

  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');


  useEffect(() => {
    // Aquí podemos poner código JS, por ejemplo podríamos llamar a callToApi dentro de un if

    // Llamamos al API pasando por parámetros el searchName
    callToApi(searchName).then((response) => {
      // Cuando el API responde guardamos los personajes en el estado
      setCharacters(response);
    });
  }, [searchName]);

  // Eventos

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  // Renderizado

  const renderCharacters = () => {
    // Pintamos el listado de personajes respondido por la API
    return characters.map((character, index) => {
      // La API no nos devuelve un id para cada personaje, por eso usamos el index que nos da el map
      return <li key={index}>Nombre: {character.name}</li>;
    });
  };

  return (
    <div>
      <h1>Llamar a la API de Star Wars:</h1>

      <form>
        <label htmlFor='name'>
          Busca por el nombre de tu personaje favorito:
        </label>
        <input
          type='text'
          name='name'
          id='name'
          value={searchName}
          onChange={handleSearchName}
        />
      </form>

      <h2>Personajes con el nombre: {searchName}</h2>
      <ul>{renderCharacters()}</ul>
    </div>
  );
};

export default App; */}


// EJERCICIO 1. Paranormal activity.

{/* const App = () => {
  // Estados

  const [films, setFilms] = useState([]);


  useEffect(() => {

    callToApi(films).then((response) => {
      // Cuando el API responde guardamos los personajes en el estado
      setFilms(response);
    });
  }, []);

  return (
    <div>

    </div>
  );
};

export default App; */}



// EJERCICIO 2. Buscador de series.

const App = () => {
  // Estados

  const [search, setSearch] = useState('');
  const [series, setSeries] = useState([]);


  useEffect(() => {
    console.log('dentro de useEffect')
    callToApi(search).then((response) => {
      setSeries(response);
      console.log(series);
    });
  }, [search]);

  const handleInput = (ev) => {
    console.log(ev.target.value);
    setSearch(ev.target.value);
  }

  const renderSeries = () => {
    return series.map((serie, i) => {
      return <li key={i} >{serie.name}</li>
    });
  }


  return (
    <div>
      <p>Escribe la serie que buscas:</p>
      <input type="text" placeholder='Serie...' onChange={handleInput} />
      <ul>{renderSeries()}</ul>
    </div>

  )
};

export default App;
