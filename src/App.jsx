import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "./components/section/section";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
const App = () => {
  return (
    <>
      {/* start header */}
      <header>
        <div className="container">
          <a href="#" className="logo">
            <img src="./images/logo.png" alt="logo" />
          </a>
          <nav>
            <FontAwesomeIcon className="toggle-menu" icon={faBars} />
            <ul>
              <li>
                <a className="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="form">
              <FontAwesomeIcon className="faicon" icon={faMagnifyingGlass} />
            </div>
          </nav>
        </div>
      </header>
      {/* end header */}
      {/* start landing */}
      <div className="landing">
        <div className="overlay"></div>
        <div className="text">
          <div className="content">
            <h2>
              Hello World! <br />
              We Are Kasper We Make Art.
            </h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at
              sem. Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </div>
        </div>
        <FontAwesomeIcon className="bg-change arl" icon={faAngleLeft} />
        <FontAwesomeIcon className="bg-change arr" icon={faAngleRight} />
        <ul className="bullets">
          <li></li>
          <li className="active"></li>
          <li></li>
        </ul>
      </div>
      {/* end landing */}
      {/* start services */}
      <SectionHeading names="Services" />
      <div className="services">
      <div className="services-container container">
        <div className="srv-box">
          <FontAwesomeIcon icon={faDesktop} className='srv-icon' />
          <div className="text">
            <h3>Vorem amet intuitive</h3>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam.
            </p>
          </div>
        </div>
        <div className="srv-box">
          <FontAwesomeIcon icon={faGear}  className='srv-icon' />
          <div className="text">
            <h3>Vorem amet intuitive</h3>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam.
            </p>
          </div>
        </div>
        <div className="srv-box">
          <FontAwesomeIcon icon={faPencilRuler} className='srv-icon' />
          <div className="text">
            <h3>Vorem amet intuitive</h3>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam.
            </p>
          </div>
        </div>
        <div className="srv-box">
          <FontAwesomeIcon icon={faCameraRetro} className='srv-icon' />
          <div className="text">
            <h3>Vorem amet intuitive</h3>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam.
            </p>
          </div>
        </div>
      </div>
      </div>
      {/* end services */}
      {/* {Start Design } */}
    <div class="design">
      <div class="image">
        <img src="images/mobile.png" alt="Mobile" />
      </div>
      <div class="text">
        <h2>Our Design Comes With...</h2>
        <ul>
          <li><FontAwesomeIcon icon={faDesktop} className='des-icon' />Responsive Design</li>
          <li><FontAwesomeIcon icon={faDesktop} className='des-icon' />Modern And Clean Design</li>
          <li><FontAwesomeIcon icon={faDesktop} className='des-icon' />Clean Code</li>
          <li><FontAwesomeIcon icon={faDesktop} className='des-icon' />Browser Friendly</li>
        </ul>
      </div>
    </div>
    {/* End Design */}
    </>
  );
};

export default App;
