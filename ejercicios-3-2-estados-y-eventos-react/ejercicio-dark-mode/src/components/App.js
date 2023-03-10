// Fichero src/components/App.js
import '../styles/App.css';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);

  function handleDarkMode(ev) {
    setDark(!dark)
  }

  function renderDarkModeText() {
    if (dark) {
      return <p>Tienes activado el dark mode</p>;
    } else {
      return null;
    }
  }

  return (
    <div className={dark ? "dark-style" : "div"}>
      <h1>Dark mode</h1>
      <button className="btn" onClick={handleDarkMode}>Des/activar el dark mode</button>
      {renderDarkModeText()}
      <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit nam tincidunt dictumst viverra quam odio, conubia erat litora himenaeos commodo. Gravida nisl euismod nisi nostra penatibus class proin leo tempus tortor, condimentum aenean habitant quis dictumst faucibus inceptos vulputate iaculis varius, sollicitudin sodales feugiat habitasse augue quam phasellus praesent ridiculus. Semper nam tincidunt at quam curae purus natoque mus, odio taciti interdum posuere etiam varius metus iaculis nec, eget eu mollis phasellus aptent dapibus malesuada.</p>
    </div>
  );
}

export default App;
