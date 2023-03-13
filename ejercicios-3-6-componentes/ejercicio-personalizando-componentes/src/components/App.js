// Fichero src/components/App.js
import '../styles/App.css';
import Link from './Link';

function App() {
  return (
    <div>
      <header className="header">
        <h1>HEADER</h1>
        <nav>
          <ul>
            <Link title="Blog" url="https://adalab.es/blog/" openInNewTab={true} />
            <Link title="Contacto" url="https://adalab.es/contacto/" openInNewTab={false} />

          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
