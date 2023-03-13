// Fichero src/components/App.js
import '../styles/App.css';
import Logo from './Logo';

const App = () => {
  return (
    <div>
      <header>
        <Logo />

        {/* Buscador */}
        <form>
          <input type='search' name='search' placeholder='Buscar' />
        </form>

        <nav>
          <ul>
            <li>
              {/* Botones  Iniciar sesión */}
              <button className='bg_blue'>Iniciar sesión</button>
            </li>
            <li>
              <button className='bg_white'>Registrarse</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className='profile_info'>
          <img
            src='https://instagram.com/profile-images/adalab.png'
            title='Adalab'
            alt='Adalab'
          />
          <h1>adalab_digital</h1>

          {/* Botones de Seguir */}
          <button className='bg_blue'>Seguir</button>

          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>

        <section className='stories'>
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>

        <section className='publications'>
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>
      </main>
    </div>
  );
};

export default App;
