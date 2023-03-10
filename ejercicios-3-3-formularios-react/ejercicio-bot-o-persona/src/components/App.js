// Fichero src/components/App.js
import "../styles/App.css";
// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {

  const [macarrones, setMacarrones] = useState(false);
  const [patatas, setPatatas] = useState(false);
  const [nueces, setNueces] = useState(false);
  const [huevos, setHuevos] = useState(false);
  const [cebolla, setCebolla] = useState(false);
  const [cerveza, setCerveza] = useState(false);

  function handleSubmit(ev) {
    ev.preventDefault();
  };

  function handleChecked(ev) {

    const inputName = ev.target.name;

    switch (inputName) {
      case 'Macarrones':
        setMacarrones(ev.target.checked);
        break;
      case 'Patatas':
        setPatatas(ev.target.checked);
        break;
      case 'Huevos':
        setHuevos(ev.target.checked);
        break;
      case 'Nueces':
        setNueces(ev.target.checked);
        break;
      case 'Cebolla':
        setCebolla(ev.target.checked);
        break;
      case 'Cerveza':
        setCerveza(ev.target.checked);
        break;
      default:
    }
  };


  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas:</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="Macarrones">Macarrones</label>
        <input type="checkbox" name="Macarrones" onChange={handleChecked} value={macarrones} ></input>

        <label htmlFor="Patatas">Patatas</label>
        <input type="checkbox" name="Patatas" onChange={handleChecked} value={patatas}></input>

        <label htmlFor="Nueces">Nueces</label>
        <input type="checkbox" name="Nueces" onChange={handleChecked} value={nueces}></input>

        <label htmlFor="Huevos">Huevos</label>
        <input type="checkbox" name="Huevos" onChange={handleChecked} value={huevos}></input>

        <label htmlFor="Cebolla">Cebolla</label>
        <input type="checkbox" name="Cebolla" onChange={handleChecked} value={cebolla}></input>

        <label htmlFor="Cerveza">Cerveza</label>
        <input type="checkbox" name="Cerveza" onChange={handleChecked} value={cerveza}></input>
      </form>

      <p>{patatas && huevos && cebolla && !cerveza && !macarrones && !nueces ? 'Eres una persona concebollista' : 'Eres un robot sin paladar'}</p>
    </div>
  );
};

export default App;