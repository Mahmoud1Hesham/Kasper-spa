import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const App = ()=> {
  return (
    <>
    <header>
      <div className="container">
        <a href="#" className="logo">
          <img src="./images/logo.png" alt="logo" />
        </a>
        <nav>
        <FontAwesomeIcon className='toggle-menu' icon={faBars} />
          <ul>
            <li><a className='active' href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="form">
          <FontAwesomeIcon className='faicon' icon={faMagnifyingGlass} />
          </div>
        </nav>
      </div>
      
    </header>
    </>
  );
}

export default App;
