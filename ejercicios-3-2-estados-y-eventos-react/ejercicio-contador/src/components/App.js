// Fichero src/components/App.js
import '../styles/App.scss'

const App = () => {

  function handleClick(ev) {
    const elementP = document.querySelector('.text');
    elementP.innerHTML = 'Contador: 1';
  }

  return (
    <div>
      <p className="text">Contador: 0</p>
      <button onClick={handleClick}>Click</button>
    </div>

  );
};

export default App;