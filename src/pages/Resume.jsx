import './Resume.css';

function Resume() {
  return (
    <div className="resume">
      <div className="resume-header">
        <h1>Charles "Charlie" Hamilton</h1>
        <p className="resume-subtitle">Software Development Engineer</p>
        <div className="resume-contact-info">
          <span>cphamilton1000@yahoo.com</span>
          <span>•</span>
          <span>(678) 818-8431</span>
          <span>•</span>
          <span>Atlanta, Georgia</span>
        </div>
      </div>

      <section className="resume-section">
        <h2>Education</h2>

        <div className="resume-item">
          <div className="resume-item-header">
            <div>
              <h3>Master of Science in Computer Science</h3>
              <p className="resume-company">Georgia Institute of Technology</p>
            </div>
            <span className="resume-date">Jan 2025 - Dec 2025</span>
          </div>
          <ul className="resume-list">
            <li>Concentration: Machine Learning</li>
            <li>GPA: 4.00</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <div>
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="resume-company">Georgia Institute of Technology</p>
            </div>
            <span className="resume-date">Aug 2021 - Dec 2024</span>
          </div>
          <ul className="resume-list">
            <li>Threads: Artificial Intelligence and Info Internetworks</li>
            <li>GPA: 3.88 (Highest Honors)</li>
            <li>Scholarships: Zell Miller</li>
            <li>Study Abroad: College of Computing Barcelona Summer Program (Summer 2023)</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>

        <div className="resume-item">
          <div className="resume-item-header">
            <div>
              <h3>Software Development Engineer Intern</h3>
              <p className="resume-company">Amazon Web Services (AWS HealthOmics, Storage and Analytics)</p>
            </div>
            <span className="resume-date">May 2025 - Aug 2025</span>
          </div>
          <ul className="resume-list">
            <li>Designed and implemented an account state auditor, improving data integrity for over 1,000 customer accounts</li>
            <li>Leveraged AWS services to automate information retrieval and the process of validating resource deletion policies</li>
            <li>Built logic to detect and alert on policy violations, reducing data retention risk in customer accounts by 100%</li>
            <li>Integrated new auditor with existing infrastructure, enabling adoption across multiple AWS HealthOmics teams</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <div>
              <h3>Software Development Engineer Intern</h3>
              <p className="resume-company">Amazon Web Services (AWS HealthOmics, Workflows)</p>
            </div>
            <span className="resume-date">May 2024 - Aug 2024</span>
          </div>
          <ul className="resume-list">
            <li>Developed an Ops Bot to automate an existing process to add additional context to auto-cut alarm tickets</li>
            <li>Utilized AWS services to handle all tickets of the AWS HealthOmics workflows team, ~100 tickets per week</li>
            <li>Implemented in AWS CDK to allow engineers to recreate the workflow, 88% improvement in ticket diagnosis time</li>
            <li>Routed over 100,000 logs/metrics from separate accounts to one centralized AWS account using pipeline deployment</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <div>
              <h3>Part-Time, Full-Stack Developer</h3>
              <p className="resume-company">HeatCheck - Startup Through Georgia Tech's Startup Incubator Program</p>
            </div>
            <span className="resume-date">Aug 2023 - May 2024</span>
          </div>
          <ul className="resume-list">
            <li>Founded startup to provide users a "digital-to-reality" pickup basketball and social media experience</li>
            <li>Utilized React Native, Django, and PostgreSQL to implement full-stack native and web applications</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <div>
              <h3>Developer Intern</h3>
              <p className="resume-company">Revest Finance</p>
            </div>
            <span className="resume-date">May 2022 - Aug 2022</span>
          </div>
          <ul className="resume-list">
            <li>Authored a testing template relied on to test 8+ ERC-4626 adapters for mint, withdraw, redeem, and round trips</li>
            <li>Constructed unit tests in TypeScript for Solidity programs using Hardhat, improving code coverage by 25%</li>
            <li>Updated features on the company website with TypeScript using the Svelte framework</li>
            <li>Crafted developer documentation in GitBook for the Revest Resonate protocol, assessed 50+ functions</li>
            <li>Leveraged TypeScript and Hardhat to index through 35.5k form responses and examine their Ethereum wallets</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h4>Languages</h4>
            <p>C, C++, CSS, HTML, Java, JavaScript, Kotlin, Python, SQL, Solidity, TypeScript</p>
          </div>
          <div className="skill-category">
            <h4>Technologies</h4>
            <p>Django, Docker, Ethers.js, Flask, Git, JavaFX, Jupyter, Next.js, Node.js, NPM, NumPy, Pandas, PostgreSQL, React Native, React.js, Svelte, Web3.js, Xcode, Yarn</p>
          </div>
          <div className="skill-category">
            <h4>AWS Services</h4>
            <p>API Gateway, CDK, CloudFormation, CloudTrail, CloudWatch, DynamoDB, ECS, EventBridge, Fargate, IAM, Lambda, S3, SQS, Step Functions, VPC</p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>

        <div className="resume-item">
          <div className="resume-item-header">
            <div>
              <h3>Tail Me</h3>
            </div>
          </div>
          <ul className="resume-list">
            <li>Built predictive models to forecast college football win totals, webscraped/processed news articles and past statistics</li>
            <li>Implemented sentiment analysis, k-means clustering, and random forest algorithms, resulting in 57.142% accuracy</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <div>
              <h3>Resume Analysis Tool</h3>
            </div>
          </div>
          <ul className="resume-list">
            <li>Used AI to allow users to upload a resume and job description and receive an edited resume along with suggestions</li>
            <li>Leveraged React.js, Flask, and the Google Gemini API, fine-tuned using metrics like BERTScore</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Leadership</h2>

        <div className="resume-item">
          <div className="resume-item-header">
            <div>
              <h3>Vice President</h3>
              <p className="resume-company">Sigma Alpha Epsilon Fraternity</p>
            </div>
            <span className="resume-date">Dec 2023 - Dec 2024</span>
          </div>
          <ul className="resume-list">
            <li>Directed the fraternity judicial system, planned and managed executive retreats and membership events</li>
            <li>Managed a budget of $20,000 per semester</li>
            <li>Submitted and maintained amendments to the fraternity bylaws</li>
          </ul>
        </div>
      </section>

      <div className="download-section">
        <a href="/Resume - Charlie Hamilton.pdf" download>
          <button className="download-button">Download PDF Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
