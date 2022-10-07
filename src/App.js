import "./App.css";
import Resume from "./images/Resume.pdf";
import LeagueTrack from "./images/LeagueTrack.png";
import Rest from "./images/RestaurantLanding.png";
import Study from "./images/Study.png";
import mario from "./images/mario.png"

function App() {
  return (
    <div className="container-fluid">
      <div className="expand">
        <div className="parallax">
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
          <span className="greeting">
            <span>Aloha I'm Kenneth & I'm a Full Stack Engineer</span>
          </span>
        </div>
      </div>
                {/* <img className="mario" src={mario}/> */}
      <header className="App-header">
        <div className="row project1">
          <div className="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-7">
            <img className="projectImg" src={LeagueTrack} alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-5 col-xl-5 projectTitle">
            <a href="https://github.com/KnfDev/riot-stats-clone">
              <h3>League of Legends Stat Clone</h3>
              <div className="projectDesc">
                <p>
                  Clone of U.GG or op.GG type stat trackers.
                  <br />
                  Express proxy server interfaces with Riot API to make get
                  requests for player and match information, All champion and
                  item Icons also pulled from Riot API.
                </p>
              </div>
              <div className="row spacer">
                <img
                  className="col-6 col-sm-6 col-m-6 projectSkill"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt=""
                />
                <img
                  className="col-6 col-sm-6 col-m-6 projectSkill"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt=""
                />
                <img
                  className="col-6 col-sm-6 col-m-6 projectSkill"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt=""
                />
                <img
                  className="col-6 col-sm-6 col-m-6 projectSkill"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
        <div className="row project2">
          <div className="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-7">
            <img className=" projectImg" src={Rest} alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-5 col-xl-5 projectTitle">
            <a href="https://knf-restaurant-client.herokuapp.com/dashboard">
              <h3>Restaurant Management App</h3>
              <div className="projectDesc">
                <p>
                  A dynamic Full-Stack project with a Front-end UI built on
                  react that can make GET, POST, PUT, DELETE requests to a
                  PostgreSQL Database through a Back-end built with Knex and
                  Express.
                </p>
                </div>
                <div className="row spacer">
                  <img
                    className="projectSkill"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt=""
                  />
                  <img
                    className="projectSkill"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt=""
                  />
                  <img
                    className="projectSkill"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt=""
                  />
                  <img
                    className="projectSkill"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt=""
                  />
                  <img
                    className="projectSkill"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    alt=""
                  />
                  <img
                    className="projectSkill"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt=""
                  />
                </div>
            </a>
          </div>
        </div>
        <div className="row project1">
          <div className="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-7">
            <img className="projectImg" src={Study} alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-5 col-xl-5 projectTitle">
            <a href="https://github.com/KnfDev/Study-Tool-Application">
              <h3>Flashcard Study App</h3>
              <div className="projectDesc">
                <p>
                  Uses local API to make GET, PUT, POST, DELETE for Cards and
                  Deck information, All Cards and Decks stored on a local Json
                  file
                </p>
                  </div>
                <div className="row spacer">
                  <img
                    className="projectSkill"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt=""
                  />
                  <img
                    className="projectSkill"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt=""
                  />
                  <img
                    className="projectSkill"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt=""
                  />
                  <img
                    className="projectSkill"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt=""
                  />
                </div>
            </a>
          </div>
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
