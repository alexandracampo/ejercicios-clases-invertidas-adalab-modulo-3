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
            <Link class="menu-item" />
          </ul>
        </nav>
      </header>
      <main className="main">
        MAIN
      </main>
      <footer className="footer">FOOTER</footer>
    </div>
  );
}

export default App;
