import "./App.css";
import Resume from "./images/Resume.pdf";
import LeagueTrack from "./images/LeagueTrack.png";
import Rest from "./images/RestaurantLanding.png";
import Study from "./images/Study.png";

function App() {
  return (
    <div className="container-fluid">
      <div className="expand">
        <div className="row navbar">
          <div className="col-3 nav1">
            <a className="nav1" href={Resume}>
              Resume
            </a>
          </div>
          <div className="col-3 nav2">
            <a className="nav1" href="#skills">
              Skills
            </a>
          </div>
          <div className="col-3 nav3">
            <a className="nav1" href="">
              Contact
            </a>
          </div>
        </div>
        <div className="parallax">
          <span className="greeting">
            <span>Aloha I'm Kenneth & I'm a Full Stack Engineer</span>
          </span>
        </div>
      </div>
      <header className="App-header">
        <div className="row project1">
          <img
            className="col col-sm col-md col-lg-7 col-xl-7 projectImg"
            src={LeagueTrack}
            alt=""
          />
          <p className="col projectTitle">League of Legends Stat Clone</p>
        </div>
        <div className="row project2">
          <img
            className="col col-sm col-md col-lg-7 col-xl-7 projectImg"
            src={Rest}
            alt=""
          />
          <p className="col projectTitle">Restaurant Management App</p>
        </div>
        <div className="row project3">
          <img
            className="col col-sm col-md col-lg-7 col-xl-7 projectImg"
            src={Study}
            alt=""
          />
          <p className="col projectTitle">Flashcard Study App</p>
        </div>
      </header>

      <div id="skills" className="row skills">
        <div className="col-6 col-xl">
          <img
            className="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            className="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt=""
          />
        </div>

        <div className="col-6 col-xl">
          <img
            className="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            className="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            className="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            className="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            className="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            className="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            className="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt=""
          />
        </div>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/kenneth-mai-software-engineer/">
          <img
            className="social"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt=""
          />
        </a>
        <a href="https://github.com/KnfDev">
          <img
            className="social"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default App;
