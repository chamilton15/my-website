import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Charlie Hamilton</h1>
          <p className="hero-subtitle">
          My experience spans full-stack development, cloud infrastructure, and machine learning, shaped through roles at Amazon Web Services, Revest Finance, HeatCheck, and several personal projects.
          I am passionate about applying technical depth and creative problem-solving to impactful, real-world challenges.
          </p>
        </div>
        <div className="hero-image-container">
          <img src="/SelfPicture.jpg" alt="Charlie Hamilton" className="hero-image" />
        </div>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <div className="experience-grid">
          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h3>Software Development Engineer Intern</h3>
                <p className="company">Amazon Web Services (AWS)</p>
                <p className="location">Seattle, Washington</p>
              </div>
              <span className="date">May 2025 - August 2025</span>
            </div>
            <p className="description">
            I designed and implemented an account state auditor to improve data integrity for over 1,000 customer accounts.
            Using AWS services, I automated information retrieval and validation of resource deletion policies.
            I built logic to detect and alert on policy violations, eliminating data retention risk in customer accounts.
            Additionally, I integrated the auditor with existing infrastructure, enabling adoption across multiple AWS HealthOmics teams.
            </p>
            <div className="tags">
              <span className="tag">TypeScript</span>
              <span className="tag">Kotlin</span>
              <span className="tag">AWS</span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h3>Software Development Engineer Intern</h3>
                <p className="company">Amazon Web Services (AWS)</p>
                <p className="location">Seattle, Washington</p>
              </div>
              <span className="date">May 2024 - August 2024</span>
            </div>
            <p className="description">
            I developed an Ops bot to automate an existing process, adding additional context to auto-cut alarm tickets.
            Using AWS services, I handled all tickets for the AWS HealthOmics workflows team, processing ~100 ticket events per week.
            I implemented the solution with AWS CDK, enabling engineers to easily recreate the workflow and improving ticket diagnosis time by 88%.
            Additionally, I routed over 100,000 logs from separate accounts into a centralized AWS account by writing and deploying CDK code to a pipeline.
            </p>
            <div className="tags">
              <span className="tag">JavaScript</span>
              <span className="tag">Python</span>
              <span className="tag">AWS</span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h3>Developer Intern</h3>
                <p className="company">Revest Finance</p>
                <p className="location">Atlanta, Georgia</p>
              </div>
              <span className="date">May 2022 - August 2022</span>
            </div>
            <p className="description">
            I performed various development tasks for the Revest Finance startup, including authoring a testing template used to test 8+ ERC-4626 adapters for mint, withdraw, redeem, and round-trip operations.
            I constructed unit tests in TypeScript for Solidity programs using Hardhat, improving code coverage by 25%.
            I periodically updated features on the company website using TypeScript with the Svelte framework and crafted developer documentation in GitBook for the Revest Resonate protocol, assessing 50+ functions.
            Additionally, I leveraged TypeScript and Hardhat to index through 35.5k form responses and analyze associated Ethereum wallets.
            </p>
            <div className="tags">
              <span className="tag">Solidity</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Hardhat</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="education-item">
            <div className="education-header">
              <div>
                <h3>Master of Science - MS, Computer Science</h3>
                <p className="institution">Georgia Institute of Technology</p>
              </div>
              <span className="date">January 2025 - December 2025</span>
            </div>
            <p className="description">
              Concentration: Machine Learning<br />
              GPA: 4.00
            </p>
          </div>

          <div className="education-item">
            <div className="education-header">
              <div>
                <h3>Bachelor of Science - BS, Computer Science</h3>
                <p className="institution">Georgia Institute of Technology</p>
              </div>
              <span className="date">August 2021 - December 2024</span>
            </div>
            <p className="description">
              Threads: Artificial Intelligence and Info Internetworks<br />
              GPA: 3.88<br />
              Study Abroad: College of Computing Barcelona Summer Program (Summer 2023)
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Extracurriculars & Hobbies</h2>
        <div className="hobbies-grid">
          <div className="hobby-item">
            <h3>Playing Basketball</h3>
            <p><a href="http://www.hudl.com/v/2KpLTv" target="_blank" rel="noopener noreferrer">Hudl</a></p>
          </div>
          <div className="hobby-item">
            <h3>Golf</h3>
            <p>18.3 Handicap</p>
          </div>
          <div className="hobby-item">
            <h3>Watching Basketball</h3>
            <p>My favorite teams are the Georgia Tech Yellow Jackets, Atlanta Hawks, and Long Island Sharks.</p>
          </div>
          <div className="hobby-item">
            <h3>Poker</h3>
            <p>Enthusiast of strategy games.</p>
          </div>
          <div className="hobby-item">
            <h3>Reading</h3>
            <p>Avid reader of technology, finance, and economic history.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
