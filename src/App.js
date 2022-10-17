import "./App.css";
import Resume from "./images/Resume.pdf";
import LeagueTrack from "./images/LeagueTrack2.png";
import Rest from "./images/RestaurantLanding.png";
import Study from "./images/Study.png";
import Photo from "./images/Photo.png"

function App() {
  return (
    <div className="container-fluid">
      <div className="expand">
        <div className="parallax">
          <div className="row navbar">
            <div className="col-3 nav1">
              <a className="nav1" href={Resume} target="_blank" rel="noreferrer noopener">
                Resume
              </a>
            </div>
            <div className="col-3 nav2">
              <a className="nav1" href="#skills">
                Skills
              </a>
            </div>
            <div className="col-3 nav3">
              <a className="nav1" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <span className="greeting">
            <h1>Aloha I'm Kenneth & I'm a Full Stack Engineer</h1>
          </span>
        </div>
      </div>
      <header className="App-header">
        <div className="projectSection">
        <h2>Projects</h2>
        </div>
        
        <div className="row project2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7">
            <img className="projectImg" src="https://i.imgur.com/xEA4sOj.jpeg" alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-11 col-lg-5 col-xl-5 projectTitle">
            <div className="hide">Travel Companion Clone</div>
            <div className="projectDesc">
              <p>
                A personal project I started to learn how to utilize Material UI, google-map-react and Googles Maps Javascript API, very slow going and a TON of googling but I love traveling so this is a fun project to work on!
              </p>
              <p>
                Uses Googles Maps JavaScript API and RapidAPIs travel advisor API. Work in progress.
              </p>

              <a href="https://github.com/KnfDev/TravelCompanion" target="_blank" rel="noreferrer noopener">
                <button >Github</button>
                </a>
              <button 
              onClick={()=>window.confirm("Currently not deployed.  Click Ok to see an image of project")?window.open("https://i.imgur.com/xEA4sOj.jpeg"):null}
              >Demo</button>
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
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                  alt=""
                />
                <img
                  className="projectSkill"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row project1">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7">
            <a href="https://github.com/KnfDev/riot-stats-clone" target="_blank" rel="noreferrer noopener">
              <img className="projectImg" src={LeagueTrack} alt="" />
            </a>
          </div>
          <div className="col-12 col-sm-12 col-md-11 col-lg-5 col-xl-5 projectTitle">
            <div className="hide">League of Legends Stat Clone</div>
            <div className="projectDesc">
              <p>
                Clone of U.GG or op.GG type stat trackers.
                <br />
                Express proxy server interfaces with Riot API to make GET
                requests for player and match information, All champion and item
                Icons also pulled from Riot API. API key is temporary so needs
                to be updated.  Work in progress.
              </p>
              <p>
                Oct 12 2022 - Added bans and fixed alignments/sizing
              </p>
              <a href="https://github.com/KnfDev/riot-stats-clone" target="_blank" rel="noreferrer noopener">
                <button>Github</button>
              </a>
              <button 
              onClick={()=>window.confirm("Currently I don't have a permanent Riot API key, the temporary one only lasts 24hrs.  Click Ok to see an image of product")?window.open("https://user-images.githubusercontent.com/100451137/194014800-3b525002-785c-4465-a575-ae720d30b332.jpeg"):null}>
                Demo</button>
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
            </div>
          </div>
        </div>
        <div className="parallax h-200"></div>
        <div className="row project2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7">
            <img className="projectImg" src={Rest} alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-11 col-lg-5 col-xl-5 projectTitle">
            <div className="hide">Restaurant Management App</div>
            <div className="projectDesc">
              <p>
                A dynamic Full-Stack project with a Front-end UI built on react
                that can make GET, POST, PUT, DELETE requests to a PostgreSQL
                Database through a Back-end built with Knex and Express.
              </p>
              <a href="https://github.com/KnfDev/Restaurant-reservation-knf" target="_blank" rel="noreferrer noopener">
                <button >Github</button>
                </a>
                <a href="https://knf-restaurant-client.herokuapp.com/dashboard" target="_blank" rel="noreferrer noopener">
              <button 
              onClick={()=>window.alert("Deployed front-end and back-end on Heroku free server, takes a moment to load if not visited after some time")
              }>Demo</button>
                </a>
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
            </div>
          </div>
        </div>
        {/* <div className="parallax h-200"></div> */}
        <div className="row project1">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7">
            <img className="projectImg" src={Study} alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-11 col-lg-5 col-xl-5 projectTitle">
            <div className="hide">Flashcard Study Front-end</div>
            <div className="projectDesc">
              <p>
                Uses local API to make GET, PUT, POST, DELETE for Cards and Deck
                information, All Cards and Decks stored on a local Json file
              </p>
              <a href="https://github.com/KnfDev/Study-Tool-Application" target="_blank" rel="noreferrer noopener">
                <button>Github</button>
              </a>
              
              <a href="https://knfdevflashcard.vercel.app/" target="_blank" rel="noreferrer noopener">
              <button 
              onClick={()=>window.alert("Currently only front-end deployed, I do plan on building the back-end for this using a postgreSQL database")
              }>Demo</button>
              </a>
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
                <img
                  className="col-6 col-sm-6 col-m-6 projectSkill"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="row parallax">
        <div classname="photobox col-12 col-sm-12 col-md-12 col-l-6 col-xl-6">
        <img className="me" src={Photo} alt=""/>
        </div>
        <div className="about col-12 col-sm-12 col-md-12 col-l-6 col-xl-6">
          <p>Hi there,  I'm Kenneth from Hawaii very new to this but I hope you enjoyed my portfolio!</p>
          <p>Made a huge decision at the age of 33 to exit my job of 5 years and begin my journey into Tech at the beginning of 2022</p>
          <p>Definitely not the easiest choice I've ever made but I've been enjoying every moment of it!</p>
          <p>Today I'm learning. Tomorrow I'll still be learning,  and I will continue to learn the rest of my life.</p>
          <p>That's what being a software engineer means to me.</p>
          <p className="quote">I can’t stand it to think my life is going so fast and I'm not really living it. — <span className="author">Ernest Hemmingway</span></p>
        </div>
      </div>

      <div id="skills" className="row">
        <div className="col-6 col-xl">
          <img
            id="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            id="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt=""
          />
        </div>

        <div className="col-6 col-xl">
          <img
            id="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            id="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            id="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            id="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            id="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            id="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt=""
          />
        </div>
        <div className="col-6 col-xl">
          <img
            id="skill"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt=""
          />
        </div>
      </div>
      <div id="email">
          <a href="mailto:iamknf@gmail.com" target="_blank" rel="noreferrer noopener">
            <p>E-mail</p>
            </a>
      </div>
      <div id="contact">
        <a href="https://www.linkedin.com/in/kenneth-mai-software-engineer/" target="_blank" rel="noreferrer noopener">
          <img
            className="social"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt=""
          />
        </a>
        <a href="https://github.com/KnfDev" target="_blank" rel="noreferrer noopener">
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
