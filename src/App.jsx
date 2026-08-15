import { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, Terminal, Database, Cpu, Globe, Code2, ExternalLink, Wrench, Library, Layers, Zap, BookOpen, Send, Instagram, Coffee, Check, FileText } from 'lucide-react';
import {GitHubCalendar} from 'react-github-calendar';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("umbarkarkartik8@gmail.com"); // Replace with actual email
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Custom theme for the calendar
  const calendarTheme = {
      light: [
        '#e8e8e8',
        '#9F8FEF',
        '#9F8FEF',
        '#7A6DDF',
        '#7A6DDF',
      ],
      dark: [
        '#e8e8e8',
        '#9F8FEF',
        '#9F8FEF',
        '#7A6DDF',
        '#7A6DDF',
      ],
    };

  const experiences = [
    {
      role: "Electronics & Telecommunication Student",
      company: "Pune Institute of Computer Technology",
      duration: "Aug 2023 - June 2027",
      location: "Pune, India",
      details: [
        "Currently pursuing Bachelor of Engineering in Electronics and Telecommunication",
        "Maintaining a CGPA of 7.61 with a focus on applying technical knowledge through practical projects",
        "Exploring Data Analytics, Web Development, and Investment Research through hands-on learning"
        
      ]
    }
    {
      role: "Web Development Intern",
      company: "ShadowFox",
      duration: "Feb 2026",
      location: "Remote",
      details: [
        "Developed a responsive dental clinic website using React.js, HTML, CSS, and JavaScript",
        "Built reusable React components and maintained organized project files for better development and maintainability",
        "Collaborated with mentors to complete assigned tasks while ensuring quality, responsiveness, and project consistency"
      ]
    }  

    {
      role: "HR Intern",
      company: "Kirabiz",
      duration: "Apr 2024 - Jul 2024",
      location: "Remote",
      details: [
        "Managed candidate records, maintained HR documentation, and ensured accurate data entry with confidentiality",
        "Scheduled and coordinated candidate interviews while communicating with applicants throughout the recruitment process",
        "Prepared recruitment reports, maintained Excel trackers, and supported the HR team in streamlining hiring and administrative operations"
      ]
    }
  
  ];

  const skillsCategories = [
    {
        title: "Data Analytics",
        icon: <BarChart3 size={20} />,
        color: "var(--accent-3)",
        items: ["SQL", "Data Analysis", "Data Visualization", "Statistics", "Power Query"]
     },
    {
        title: "Languages",
        icon: <Code2 size={20} />,
        color: "var(--accent-4)",
        items: ["Python", "C", "C++"]
    },
    {
        title: "Core Subjects",
      icon: <BookOpen size={20} />,
    color: "var(--accent-1)",
    items: ["DBMS", "DSA", "OOP", "Computer Networks (CNS)"]
  },
  {
    title: "Frontend Technologies",
    icon: <Globe size={20} />,
    color: "var(--accent-2)",
    items: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Backend & Databases",
    icon: <Database size={20} />,
    color: "var(--accent-3)",
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "MySQL",
      "PostgreSQL",
      "Microsoft SQL Server",
      "MongoDB"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench size={20} />,
    color: "var(--accent-1)",
    items: [
      "Power BI",
      "Tableau",
      "MS Excel",
      "Google Sheets",
      "MS Word",
      "MS PowerPoint",
      "Git",
      "GitHub",
      "VS Code"
    ]
  },
  {
    title: "Soft Skills",
    icon: <Layers size={20} />,
    color: "var(--accent-2)",
    items: ["Communication", "Teamwork", "Leadership", "Time Management"]
  }
];

  
const achievements = [
  {
    title: "SSC 10th Grade Excellence",
    org: "C.S. Kothari High School, Nandura",
    year: "2021",
    desc: "Secured outstanding 94.00% in Secondary School Certificate examination."
  },
  {
    title: "HSC 12th Grade Excellence",
    org: "C.S. Kothari Jr. College, Nandura",
    year: "2023",
    desc: "Achieved 81.67% in Higher Secondary Certificate examination."
  },
  {
    title: "District-Level Cricket Representative",
    org: "Sports",
    year: "2018",
    desc: "Represented team in district-level cricket tournaments, demonstrating teamwork, discipline, and consistent performance."
  },
  {
    title: "Top 15 Rank in GeeksforGeeks Course",
    org: "GeeksforGeeks",
    year: "2024",
    desc: "Ranked in the Top 15 among 15,000+ participants, demonstrating strong problem-solving abilities and consistency."
  },
  {
    title: "350+ Problems Solved",
    org: "Multiple Platforms",
    year: "2024",
    desc: "Solved 350+ problems across Data Structures & Algorithms, DBMS, and other technical topics through consistent practice."
  }
];

  
 const projects = [

  {
    title: "UPI Transaction Dashboard",
    tech: "Power BI, DAX, Power Query, MS Excel",
    year: "2026",
    link: "https://github.com/kartik-86/UPI-Transaction-Dashboard-PowerBI", // GitHub link
    details: [
      "Designed an interactive Power BI dashboard to analyze UPI transaction data using charts, KPIs, and filters",
      "Cleaned and transformed raw transaction data using Power Query to create a structured dataset for analysis",
      "Analyzed transaction trends, payment patterns, and key performance metrics to generate meaningful business insights",
      "Created an intuitive dashboard to support data-driven decision-making and efficient exploration of transaction performance"
    ]
  },

  {
    title: "Superstore Sales Dashboard",
    tech: "Tableau, Data Visualization",
    year: "2026",
    link: "https://github.com/kartik-86/Superstore-Sales-Dashboard-Tableau", // GitHub link
    details: [
      "Developed an interactive Tableau dashboard to analyze sales, profit, and order performance using dynamic charts, KPIs, and filters",
      "Analyzed regional, category-wise, and customer segment performance to identify sales trends and business insights",
      "Created interactive visualizations to explore key business metrics and performance indicators",
      "Designed an intuitive dashboard to support efficient analysis of sales and profitability patterns"
    ]
  },

  {
    title: "MSRTC Bus Record Management System",
    tech: "Database Management, System Design",
    year: "2024",
    link: "https://github.com/kartik-86/MSRTC", // GitHub link
    details: [
      "Designed and maintained a structured system to store detailed records of buses, including mechanical components and related information",
      "Organized component data in table-based format for clear identification of bus parts and placement",
      "Implemented efficient data structure for easier searching, updating, and managing records",
      "Improved overall record accuracy and clarity, supporting smoother maintenance tracking and operational management"
    ]
  },

  {
    title: "Chit-Chat Web Application",
    tech: "React, Node.js, WebSockets, Real-time Communication",
    year: "2024",
    link: "https://github.com/kartik-86/Chatting-App-", // GitHub link
    details: [
      "Designed real-time chat application focused on improving communication and interaction between users",
      "Developed core features including user login, profile creation, and message flow for smooth user experience",
      "Structured interface and navigation for intuitive user understanding and ease of use",
      "Analyzed user behavior and feedback to identify usability issues and improve overall application flow"
    ]
  }

];
  const certifications = [
  {
    event: "Complete Data Analyst Bootcamp From Basics To Advanced",
    year: "2026",
    certificate: "https://drive.google.com/file/d/1l_MQJw4wS_yo_3ZhEwYh6yhfKtDIv5j1/view",
    details: [
      "Completed comprehensive training in SQL, Excel, Python, Power BI, Tableau, and Generative AI",
      "Gained hands-on experience in end-to-end data analytics workflows",
      "Developed practical skills in data analysis, visualization, and business insights"
    ]
  },
  {
    event: "Tata GenAI Powered Data Analytics Job Simulation",
    year: "2026",
    certificate: "https://drive.google.com/file/d/19DN9UGSqd4izUoZxfvsGdWZAlEJuxW5N/view",
    details: [
      "Completed practical tasks involving Generative AI, exploratory data analysis, and AI-powered predictive analysis",
      "Worked on business reporting, data storytelling, and AI-driven collections strategy",
      "Gained practical exposure to applying analytics and Generative AI in business scenarios"
    ]
  },
  {
    event: "Deloitte Data Analytics Job Simulation",
    year: "2026",
    certificate: "https://drive.google.com/file/d/1AHVZAs5SPY2PEz3zQhYjH6aADH1L7TyI/view",
    details: [
      "Completed practical tasks in Data Analysis and Forensic Technology using real-world business scenarios",
      "Gained experience working with data-driven business problems and analytical approaches",
      "Developed practical exposure to professional data analytics workflows"
    ]
  }
];

  return (
    <div className="container">
      {/* HEADER SECTION */}
      <header className="header">
       <div className="profile-pic-container">
           <img 
            src="/kartik.png"
            alt="Kartik Avatar" 
            className="profile-pic"
          />
        </div> 
        
        <h1>KARTIK UMBARKAR</h1>
        <div className="tagline">
          ANALYAST | Investment Researcher | Developer
        </div>

        <div className="socials">
          <a href="https://www.linkedin.com/in/kartik-umbarkar/" target="_blank" rel="noopener noreferrer" className="icon-btn"><Linkedin size={20} /></a>
          <a href="https://github.com/kartik-86" target="_blank" rel="noopener noreferrer" className="icon-btn"><Github size={20} /></a>
          <a href="mailto:umbarkarkartik8@gmail.com" className="icon-btn"><Mail size={20} /></a>
          <a href="/Kartik_Tech_Resume.pdf" download="Kartik_Resume.pdf"  className="icon-btn"><FileText size={20} /></a>
        </div>
        
        <div style={{ marginTop: '15px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
          📞 7020946231
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="nav">
        {['about', 'experience', 'stack', 'projects', 'achievements', 'Certifications'].map((tab) => (
          <button 
            key={tab}
            className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* MAIN CONTENT AREA */}
      <main>
        {activeTab === 'about' && (
          <>
            <section className="card" style={{ textAlign: 'center', padding: '20px' }}>
              <p>
                I'm a 3rd-year <strong>Electronics & Telecommunication Engineering</strong> student at 
                <strong> Pune Institute of Computer Technology</strong> (CGPA: 7.61), passionate about 
                <strong>data analytics</strong> and <strong>market research</strong>.
              </p>
              <p>
               Aspiring <strong>Data Analyst</strong> with an interest in transforming data into 
               meaningful insights and understanding patterns that support better decision-making.
              </p>

              <p>
                Passionate about <strong>Investment Research</strong>, exploring equity markets, 
                company performance, market trends, and developing a deeper understanding of 
                investment opportunities.
              </p>

              <p>
                Curious and <strong>growth-oriented</strong>, I enjoy learning new technologies, 
                working on practical projects, and continuously improving my knowledge across 
                technology, analytics, and financial markets.
            </p>
            </section>

            {/* GITHUB CALENDAR SECTION */}
            
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
              <button
                onClick={handleCopy}
                className="nav-btn" 
                style={{ 
                   display: 'flex', 
                   alignItems: 'center', 
                   gap: '12px', 
                   fontSize: '1rem',
                   padding: '15px 30px',
                   backgroundColor: copied ? 'var(--accent-2)' : 'white'
                }}
              >
                {copied ? <Check size={20} /> : <Mail size={20} />}
                {copied ? "Email Copied!" : "Get in Touch"}
              </button>
            </div>
          </>
        )}

        {/* EXPERIENCE TAB */}
        {activeTab === 'experience' && (
          <section>
            <h2 className="section-title">EDUCATION & EXPERIENCE</h2>
            {experiences.map((exp, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title" style={{fontSize: '1.3rem'}}>{exp.role}</h3>
                    <div style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '0.85rem', 
                      background: 'var(--accent-2)', 
                      display: 'inline-block', 
                      padding: '4px 8px', 
                      border: '1px solid black', 
                      marginTop: '6px'
                    }}>
                      {exp.company}
                    </div>
                  </div>
                  <div style={{textAlign: 'right'}}>
                    <span className="card-year">{exp.duration}</span>
                    <div style={{fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginTop: '5px', opacity: 0.8}}>{exp.location}</div>
                  </div>
                </div>
                <ul style={{marginTop:'15px', paddingLeft: '20px', fontSize: '0.95rem'}}>
                  {exp.details.map((point, i) => (
                    <li key={i} style={{marginBottom: '5px'}}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* STACK TAB */}
        {activeTab === 'stack' && (
          <section>
             <h2 className="section-title">TECH STACK</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              {skillsCategories.map((cat, index) => (
                <div key={index} className="card" style={{padding: '20px', textAlign: 'left'}}>
                  <div style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    marginBottom: '15px',
                    borderBottom: '2px solid #eee',
                    paddingBottom: '10px'
                  }}>
                    <span style={{color: 'black'}}>{cat.icon}</span>
                    <h3 style={{margin: 0, fontSize: '1.2rem', fontFamily: 'var(--font-mono)'}}>{cat.title}</h3>
                  </div>
                  
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                    {cat.items.map((item, i) => (
                      <span key={i} style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        backgroundColor: cat.color,
                        padding: '8px 14px',
                        border: '2px solid black',
                        boxShadow: '3px 3px 0px 0px black',
                        borderRadius: '4px'
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'achievements' && (
          <section>
            <h2 className="section-title">ACHIEVEMENTS</h2>
            {achievements.map((item, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{item.title}</h3>
                    <small style={{fontFamily: 'var(--font-mono)', opacity: 0.7}}>{item.org}</small>
                  </div>
                  <span className="card-year">{item.year}</span>
                </div>
                <p style={{marginTop:'10px', fontSize:'0.95rem'}}>{item.desc}</p>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'projects' && (
          <section>
            <h2 className="section-title">PROJECTS</h2>
            {projects.map((project, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title" style={{fontSize: '1.3rem'}}>{project.title}</h3>
                    <div style={{
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '0.8rem', 
                      background: 'var(--accent-4)', 
                      display: 'inline-block',
                      padding: '2px 6px',
                      border: '1px solid black',
                      marginTop: '5px'
                    }}>
                      {project.tech}
                    </div>
                  </div>
                  <div style={{textAlign: 'right'}}>
                    <span className="card-year">{project.year}</span>
                      <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="icon-btn" 
                          style={{width: '30px', height: '30px', marginTop: '5px', marginLeft: 'auto'}}
                        >
                          <ExternalLink size={14} />
                        </a>
                  </div>
                </div>
                <ul style={{marginTop:'15px', paddingLeft: '20px', fontSize: '0.95rem'}}>
                  {project.details.map((point, i) => (
                    <li key={i} style={{marginBottom: '5px'}}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'Certifications' && (
          <section>
            <h2 className="section-title">LEADERSHIP & COMMUNITY</h2>
            {community.map((item, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title" style={{fontSize: '1.2rem'}}>{item.event}</h3>
                    <div style={{
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '0.85rem', 
                      background: 'var(--accent-3)', 
                      display: 'inline-block',
                      padding: '4px 8px',
                      border: '1px solid black',
                      marginTop: '6px',
                      fontWeight: 'bold'
                    }}>
                      {item.role}
                    </div>
                  </div>
                  <span className="card-year">{item.year}</span>
                </div>
                <ul style={{marginTop:'15px', paddingLeft: '20px', fontSize: '0.95rem'}}>
                  {item.details.map((point, i) => (
                    <li key={i} style={{marginBottom: '5px'}}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}
      </main>

      <footer>
        <p>© 2026 Kartik Umbarkar</p>
      </footer>
    </div>
  );
}

export default App;
