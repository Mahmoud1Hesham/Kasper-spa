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
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
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
    {/* start Portfolio */}
    <SectionHeading names="Portfolio" />
    <div className="portfolio">
      <div className="container">
        <ul className="shuffle">
          <li className="active">ALL</li>
          <li>App</li>
          <li>Photo</li>
          <li>Wep</li>
          <li>Print</li>
          </ul>  
      </div>
      <div className="imgs-container">
        <div className="box">
          <img src="./images/shuffle-01.jpg" alt="pic 1" />
          <div className="caption">
            <h4>Awesome Images</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src="./images/shuffle-02.jpg" alt="pic 2" />
          <div className="caption">
            <h4>Awesome Images</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src="./images/shuffle-03.jpg" alt="pic 3" />
          <div className="caption">
            <h4>Awesome Images</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src="./images/shuffle-04.jpg" alt="pic 4" />
          <div className="caption">
            <h4>Awesome Images</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src="./images/shuffle-05.jpg" alt="pic 5" />
          <div className="caption">
            <h4>Awesome Images</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src="./images/shuffle-06.jpg" alt="pic 6" />
          <div className="caption">
            <h4>Awesome Images</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src="./images/shuffle-07.jpg" alt="pic 7" />
          <div className="caption">
            <h4>Awesome Images</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src="./images/shuffle-08.jpg" alt="pic 8" />
          <div className="caption">
            <h4>Awesome Images</h4>
            <p>Photography</p>
          </div>
        </div>
      </div>
      <a href="#" className="more">More</a>
    </div>
    {/* end Portfolio */}
    {/* start video */}
    <div className="video">
      <video autoPlay muted loop >
        <source src="./images/vid-01.mp4" type='video/mp4' />
      </video>
      <div className="text">
        <h2>SUPER AWESOME VIDEO HERE</h2>
        <p>Its All You Need</p>
        <button>See More</button>
      </div>
    </div>
    {/* end video */}
    {/* start about */}
    <SectionHeading names="About US" />
     <div className="about">
      <div className="container">
        <img src="./images/about.png" alt="phones and taplets" />
      </div>
     </div>
    {/* end about */}
    <div className="stats">
      <div className="container">
        <div className="box">
        <FontAwesomeIcon icon={faMugHot} className="statsi" />
        <div className="number">1,236</div>
        <p>Coffe Drinks</p>
        </div>
        <div className="box">
        <FontAwesomeIcon icon={faFolder} className="statsi" />
        <div className="number">256</div>
        <p>Completed Projects</p>
        </div>
        <div className="box">
        <FontAwesomeIcon icon={faEnvelope} className="statsi" />
        <div className="number">1,743</div>
        <p>Mail Sent</p>
        </div>
        <div className="box">
        <FontAwesomeIcon icon={faTrophy} className="statsi" />
        <div className="number">17</div>
        <p>Awards Received</p>
        </div>
      </div>
    </div>
    {/* start skills */}
    <div class="our-skills">
      <div class="container">
        <div class="testimonials">
          <h3>Testimonials</h3>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
            tincidunt.
          </p>
          <div class="content">
            <img src="images/skills-01.jpg" alt="" />
            <div class="text">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
              tincidunt.
              <p>John Doe, CEO</p>
            </div>
          </div>
          <div class="content">
            <img src="images/skills-02.jpg" alt="" />
            <div class="text">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
              tincidunt.
              <p>John Doe, CEO</p>
            </div>
          </div>
          <ul class="bullets">
            <li></li>
            <li class="active"></li>
            <li></li>
          </ul>
        </div>
        <div class="skills">
          <h3>Skills</h3>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
            tincidunt.
          </p>
          <div class="prog-holder">
            <h4>Adobe</h4>
            <div class="prog">
              <span style={{width: '90%'}} data-progress="90%"></span>
            </div>
          </div>
          <div class="prog-holder">
            <h4>Html &amp; Css</h4>
            <div class="prog">
              <span style={{width: '85%'}} data-progress="85%"></span>
            </div>
          </div>
          <div class="prog-holder">
            <h4>JavaScript</h4>
            <div class="prog">
              <span style={{width: "80%"}} data-progress="80%"></span>
            </div>
          </div>
          <div class="prog-holder">
            <h4>Php</h4>
            <div class="prog">
              <span style={{width: "90%"}} data-progress="90%"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end skills */}
    {/* start quote */}
    <div class="quote">
      <div class="container">
        <q>accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.</q>
        <span>John Doe</span>
      </div>
    </div>
    {/* end quote */}
    </>
  );
};

export default App;
