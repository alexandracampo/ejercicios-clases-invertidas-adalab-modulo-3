// Fichero src/components/App.js
import '../styles/App.css';
import menu from '../images/menu.png';
import closeIcon from '../images/close.png';


function App() {


  return (
    <div>
      <nav><a><img className="img-menu" src={menu}></img></a></nav>
      <div className="main-div">
        <a><img className="img-close" src={closeIcon}></img></a>
      </div>
    </div>
  );
}

export default App;
