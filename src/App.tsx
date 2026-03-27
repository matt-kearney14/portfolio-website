import './App.css'
import logo from './assets/logo.png'
import headshot from './assets/SelfPortraitDigital.jpg'
import cardArt from './assets/cards.png'
import gameplayDemo from './assets/pokerDemo.mov'


function App() {
  
  return (
    <>
      <div className="App">

        <section className="homepage" id="homepage">
          <img src={logo} className="logo" alt="logo" />
          <hr />
          <h1>MATT KEARNEY</h1>
          <h2>STUDENT | ARTIST | DEVELOPER</h2>
        </section>

        <section className="about" id="about">
          <div className="about-section-label">ABOUT</div>
          <div className="about-inner">
            <div className="about-grid">

              <div className="about-avatar-col">
                <div className="about-avatar-frame">
                  <img src={headshot} alt="Matt Kearney" className="about-photo" />
                </div>
                <div className="about-fun-facts">
                  <p className="about-facts-title">FUN FACTS</p>
                  <div className="fact-item"><div className="fact-dot"></div><span>Huge Philadelphia Sports Fan</span></div>
                  <div className="fact-item"><div className="fact-dot"></div><span>Likes Snowboarding and Volleyball</span></div>
                  <div className="fact-item"><div className="fact-dot"></div><span>Loves Animation</span></div>
                  <div className="fact-item"><div className="fact-dot"></div><span>Loves to Work Out</span></div>
                </div>
              </div>

              <div className="about-content">
                <p className="about-eyebrow">WHO I AM</p>
                <h1 className="about-heading">Matt Kearney</h1>
                <div className="about-divider"></div>
                <p className="about-bio">
                  I'm a Boston College student, artist, and developer who loves making things from scratch — whether
                  that's a game, a piece of art, or an app. I got into programming because I wanted to
                  bring my creative ideas to life, and I've been hooked ever since.
                </p>
                <p className="about-skills-title">SKILLS &amp; TOOLS</p>
                <div className="skills-grid">
                  <span className="skill-tag filled">Java</span>
                  <span className="skill-tag filled">Python</span>
                  <span className="skill-tag filled">Photoshop</span>
                  <span className="skill-tag filled">Illustrator</span>
                  <span className="skill-tag filled">Procreate</span>
                  <span className="skill-tag filled">HTML / CSS</span>
                  <span className="skill-tag">Unity</span>
                  <span className="skill-tag">React/JS</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-title">
            <h1>PROJECTS</h1>
          </div>

          <div className="project-container">
            <p className="project-tech">Unity · C#</p>
            <h1>PROJECT 1: BLUFFIN' BIRDS</h1>
            <div className="project-divider"></div>
            <p>
              Bluffin' Birds is a local poker game developed in Unity.
              It is not entirely polished and exists as a project for learning the Unity engine and C#.
            </p>
            <div className="lists">
              <div>
                <h2>FEATURES:</h2>
                <ul>
                  <li>Texas Hold 'Em Poker</li>
                  <li>Local Multiplayer</li>
                  <li>8 Player Support</li>
                  <li>Custom Art</li>
                </ul>
              </div>
              <div>
                <h2>WORKFLOW:</h2>
                <ol>
                  <li>Console Texas Hold 'Em coded outside of Unity</li>
                  <li>Card art and game board created</li>
                  <li>Game coded in Unity using C#</li>
                  <li>Game tested and polished</li>
                  <li className="in-progress">Fix bugs and improve performance <em>(In Progress)</em></li>
                </ol>
              </div>
            </div>

            {/* ---- MEDIA SHOWCASE ---- */}
            <div className="project-media-divider"></div>
            <p className="project-media-label">MEDIA</p>
            <div className="project-media-grid">
              <div className="project-media-item">
                <p className="project-media-caption">CARD ART</p>
                <div className="project-media-frame">
                  <img src={cardArt} alt="Bluffin' Birds custom card art" className="project-media-img" />
                </div>
              </div>
              <div className="project-media-item">
                <p className="project-media-caption">GAMEPLAY DEMO</p>
                <div className="project-media-frame">
                  <video
                    className="project-media-video"
                    controls
                    muted
                    playsInline
                  >
                    <source src={gameplayDemo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

          </div>

          <div className="project-container">
            <p className="project-tech">REACT · TYPESCRIPT</p>
            <h1>PROJECT 2: WEBSITE</h1>
            <div className="project-divider"></div>
            <p>
              This website is a project to learn React and TypeScript. Before the website, I had created 3 prototypes to learn HTML and CSS.
              This website and the last prototype both use React, but this website is built with TypeScript and has a more polished design.
              In the future, I plan on practicing more JavaScript within this website.
            </p>
          </div>

           <div className="project-container">
            <p className="project-tech">REACT · TYPESCRIPT · PYTHON</p>
            <h1>CURRENT PROJECT: EXPECTED VALUE BET EVALUATOR</h1>
            <div className="project-divider"></div>
            <p>
              I'm currently working on a project to create a web app that evaluates the expected value of a bet for soccer matches.
              This project will use past match data to create score probability matrices based on past performances. The probabilities of winning, losing, and tieing will be calculated and used to evaluate the expected value of a bet based on the odds given by TheOdds API. 
              This project is still in the early stages, but I'm excited to continue working on it and learn more about data analysis and web development.
            </p>
            <p>Below is the project plan:</p>
            <a className="contact-link" href="/portfolio-website/Betting.pdf" target="_blank" rel="noopener noreferrer">Project Plan</a>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-bg-label">CONTACT</div>
          <p className="contact-eyebrow">Get In Touch</p>
          <h1 className="contact-heading">Let's Connect</h1>
          <p className="contact-sub">
            I'm always open to new opportunities, collaborations, or just a good conversation.
          </p>
          <div className="contact-links">
            <a className="contact-link primary" href="https://github.com/matt-kearney14" target="_blank" rel="noreferrer">GitHub</a>
            <a className="contact-link" href="mailto:kearnma@bc.edu" target="_blank" rel="noreferrer">Email</a>
            <a className="contact-link" href="/portfolio-website/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
          <div className="contact-divider"></div>
          <p className="contact-footer">Matt Kearney &nbsp;·&nbsp; 2025</p>
        </section>

      </div>
    </>
  )
}

export default App