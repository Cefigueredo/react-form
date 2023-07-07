// Different constants that are used in the project

export const MONTHS = [
  { index: "01", month: "January" },
  { index: "02", month: "February" },
  { index: "03", month: "March" },
  { index: "04", month: "April" },
  { index: "05", month: "May" },
  { index: "06", month: "June" },
  { index: "07", month: "July" },
  { index: "08", month: "August" },
  { index: "09", month: "September" },
  { index: "10", month: "October" },
  { index: "11", month: "November" },
  { index: "12", month: "December" },
];

export const DEGREE_TYPES = [
  "BA",
  "BSc",
  "BEng",
  "LLB",
  "MA",
  "MSc",
  "MBA",
  "MPhil",
  "MRes",
  "LLM",
  "PhD",
  "Specialization",
];
export const DEGREE_STATUS = ["Finished", "Expected", "Dropout"];

// Text Content
export const EDUCATION_COMPLETE_INFO = `For education high level degrees, include: 
<b>Degree Type, Degree Name,</b> Institution Name (Year). </br></br>

<b>Undergraduate - Bachelor degrees:</b></br>
<ul>
<li>BA: Bachelor of Arts, Humanities and Social Sciences</li>
<li>BSc: Bachelor of Science</li>
<li>BEng: Bachelor of Engineering (Software, Robotics and Physics)</li>
<li>LLB: Bachelor of Laws</li>
</ul></br>
<b>Graduate - Masters degrees:</b>
<ul>
<li>MA: Master of Arts, Humanities and Social Sciences</li>
<li>MSc: Master of Science</li>
<li>MBA: Master of Business Administration</li>
<li>MPhil: Master of Philosophy (advanced research Masters degree)</li>
<li>MRes: Master of Research (contains some taught and research elements)</li>
<li>LLM: Master of Laws</li>
</ul></br>

<b>Postgraduate - Doctorate degrees:</b>
<ul>
<li>PhD: Doctor of Philosophy (for a range of disciplines)</li>
</ul></br>

<b>Other titles:</b>
<ul>
<li>Specialization: Specialization, focused area of study attached to a specific major (post Bachelor degree)</li>
</ul></br>
Also, consider the following possibilities for the education status:
<ul>
<li><b>Finished</b> - Graduated successfully (include year of graduation)</li>
<li><b>Expected</b> - For ongoing studies or finished studies but waiting for graduation (include year of expected graduation)</li>
<li><b>Dropout</b> - Officially decided to not finish education (include number of credits passed instead of a year)</li>
</ul></br>
Examples:
</br></br>
<b>MSc, Business Analytics,</b> Universidad de los Andes (2021)</br>
<ul><li>Relevant projects/thesis</li></ul></br>
<b>BSc, Business Administration,</b> Universidad de los Andes (2019)</br>
<ul><li>Relevant projects/thesis</li></ul>`;
export const EDUCATION_LIGHT_INFO =
  "Mention your high level education degrees and specify their status. If Dropout, please specify the number of credits passed.";

export const EXPERIENCE_COMPLETE_INFO = `<p class="p1">Mention the projects in each one of your positions/experiences and their main outcome. General proposed structure for the bullets:&nbsp;</p>
<p class="p1">&nbsp;</p>
<p class="p1"><strong>Action verb</strong>&nbsp;(past tense) +&nbsp;<strong>WHAT</strong>&nbsp;+ using/applying +&nbsp;<strong>HOW</strong>&nbsp;+ to/that (similars) + Objective (<strong>WHY</strong>) + for +<strong>&nbsp;WHO/WITH WHOM</strong>&nbsp;(nice-to-have when applicable).</p>
<p class="p1">&nbsp;</p>
<p class="p1">Answer for each&nbsp;<strong>bold W/H</strong>&nbsp;-&nbsp;Examples</p>
<p class="p1">-&nbsp;<strong>Action verb</strong>&nbsp;(past tense)</p>
<p class="p1">Designed&nbsp;</p>
<p class="p1">-&nbsp;<strong>WHAT</strong>&nbsp;did you do/build/improve and what tools did you use</p>
<p class="p1">dashboards&nbsp;</p>
<p class="p1">-&nbsp;<strong>HOW&nbsp;</strong>did you do WHAT? Mention all relevant tools and techniques used</p>
<p class="p1">several tools such as PowerBI, Python, SQL, and Excel</p>
<p class="p1">-&nbsp;<strong>WHY</strong>&nbsp;did these tasks/work matter? (explaining business problem that was being solved / objective of the models developed)</p>
<p class="p1">decision-making, control, monitoring, process support, and search of business opportunities</p>
<p class="p1">- For/with&nbsp;<strong>WHO</strong>&nbsp;did you build/develop/improve this? (areas/departments or client industry / type of company)</p>
<p class="p1">a large Finance company in Latam</p>
<p class="p1">&nbsp;</p>
<p class="p1">Final Bullet - Example:</p>
<p class="p1">&nbsp;</p>
<p class="p1"><em>Designed dashboards using several tools such as PowerBI, Python, SQL, and Excel for decision-making, control, monitoring, process support, and search of business opportunities for a large Finance company in LatAm.</em></p>
<p class="p1">&nbsp;</p>
<p class="p1">Recommendations:</p>
<ul class="ul1">
<li class="li1">Think of experiences in terms of activities/tasks performed and not in terms of general functions (try to highlight personal achievements. Relevance aspects to describe the importance of the tasks performed. Consider differentials from other peers doing similar jobs)</li>
<li class="li1">Remember: the more detailed the bullets are the more seniority, expertise, matching vs clients requirements, etc., will the FR show to the clients. Therefore, the more and most interesting projects would be able to match for the engineer/candidate.</li>
<li class="li1">For the Form section: Please include latest experience (projects with clients, practice cases/projects executed on training/bootcamps/technical sessions, etc., that apply) trying to be as specific as possible</li>
</ul>`;

export const EXPERIENCE_LIGHT_INFO = `Mention the projects in each one of your positions / experiences and their main outcome.`;

export const SKILLS_COMPLETE_INFO = `<p class="p1">Specify all the tools/technologies that you know and have experience with, even if you learned them in a course/certification.&nbsp;</p>
<p class="p2">&nbsp;</p>
<p class="p3">Example:&nbsp;</p>
<p class="p2">&nbsp;</p>
<p class="p3"><strong>Programming languages: </strong>Java, C, C#, SQL, Javascript, Python&nbsp;</p>
<p class="p3"><strong>Databases &amp; Storage: </strong>PostgreSQL<strong>, </strong>AWS Redshift, AWS RDS, AWS S3, AWS DynamoDB, Databricks</p>
<p class="p3"><strong>Data Tools: </strong>AWS Athena, Apache Spark, Apache Airflow, DBT, AWS Glue, AWS Kinesis, Power BI, Pandas, NumPy, BeautifulSoup, SQL Server</p>
<p class="p3"><strong>Cloud: </strong>AWS</p>
<p class="p3"><strong>ML Frameworks &amp; Tools: </strong>React JS, Angular JS, Scikit-Learn, LightGBM</p>
<p class="p1"><strong>Others: </strong>Docker, Github Actions, Terraform, AWS EC2, AWS SNS, AWS Lambda, AWS Step Functions, AWS API Gateway, XGBoost, AWS EventBridge, Azure DevOps Server, Azure Active Directory B2C, Selenium</p>`;

export const SKILLS_LIGHT_INFO = `Type your skills separated by comma. Example: Python, SQL, Git, Docker, EC2`;

export const SUMMARY_COMPLETE_INFO = `<p class="p1">Mention the processes and tools you feel more comfortable working with. Also, relevant sectors/industries you have been working at lately in your professional career (p.e. financial services, health care, tech companies, startups, manufacturing).&nbsp;</p>
<p class="p2">&nbsp;</p>
<p class="p1">Examples:&nbsp;</p>
<p class="p2">&nbsp;</p>
<p class="p1"><em>Data engineer with experience in data modeling, data science, and web application development. Recent projects include developing ETL pipelines and implementing modular data modeling techniques using PySpark, Apache Airflow, AWS Glue, SQL, and DBT to provide structured and clean data AWS Redshift and Athena data infrastructures. Improved model performance and built three-based optimization models for customer churn for a telecom company and developed banking solutions for financial services clients.</em></p>
<p class="p2">&nbsp;</p>
<p class="p1"><em>machine learning engineer with experience building solutions and delivering added value through usage of machine learning, data engineering, data science and visualizations techniques for fintech, manufacturing and retail industries. Proficient in Python for software engineering, with hands-on experience in full stack development, cloud deployment and implementation of DevOps and MLOps best practices. Project experience includes building and deploying micro-service web applications for Net price optimization and warranty analysis, time series demand forecasting models and end-to-end NLP pipelines for Customer service case analysis.</em></p>`;

export const SUMMAY_LIGHT_INFO = `Mention the processes and tools you feel more comfortable working with. Also, relevant sectors/industries you have been working at lately in your professional career (e.g., financial services, health care, tech companies, start-ups, manufacturing).`;

export const PROJECT_COMPLETE_INFO = `<p class="p1"><em>This section is optional.</em> Please consider that this section is only for academic or personal projects - it's not for professional projects (those go under each experience with each employer). Also consider that any relevant project executed during a Training Program / Course / session (held by a Company) must go under the Company (as an employer) section.</p>
<p class="p2">&nbsp;</p>
<p class="p1">All other relevant projects could be included in this section, following the same structure as the Experience section:</p>
<p class="p2">&nbsp;</p>
<p class="p1">Action verb (past tense) + <strong>WHAT</strong> + using/applying + <strong>HOW</strong> + to/that (similars) + Objective (<strong>WHY</strong>) + for +<strong> WHO/WITH WHOM</strong> (nice-to-have when applicable).</p>`;

export const PROJECT_LIGHT_INFO = `Please consider that this section is only for personal projects; it's not for professional projects (those go under the Experience section for the corresponding employer).`;

export const PUBLICATION_COMPLETE_INFO = `<p class="p1">Examples:</p>
<p class="p2">&nbsp;</p>
<p class="p1">Pati&ntilde;o, CM., Vel&aacute;squez, C., Mu&ntilde;oz, JM., Guti&eacute;rrez, JM., Valencia, DR., &amp; Bartolome, C. (2020, September). <em>Leveraging User Embeddings and Text to Improve CTR Predictions With Deep Recommender Systems</em> (pp. 11-15). ACM, Digital Library. URL: <a href="https://dl.acm.org/doi/10.1145/3415959.3415995" target="_blank"><span class="s1">https://dl.acm.org/doi/10.1145/3415959.3415995</span></a>&nbsp;</p>
<p class="p2">&nbsp;</p>
<p class="p3">Cuk, E &amp; Chaparro, V. (2018). &ldquo;Methodology for optimizing manufacturing machines with IoT&rdquo;. <em>IEEE International Conference on Internet of Things and Intelligence System </em>(IOTAIS), (pp. 90-96), doi: 10.1109/IOTAIS.2018.8600907</p>`;

export const PUBLICATION_LIGHT_INFO = `This section is optional. Click to see examples of how publications need to appear in your resume.`;

export const CERT_LIGHT_INFO = `Please mention in this section all the relevant certifications you have obtained and the courses you have done.`;
