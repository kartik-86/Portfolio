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
        "Maintaining CGPA of 7.50 with strong focus on Computer Networks, Operating Systems, and DBMS",
        "Active problem solver with 500+ DSA problems solved across various platforms"
      ]
    }
  ];

  // Categorized Skills Data
  const skillsCategories = [
    {
      title: "Core Subjects",
      icon: <BookOpen size={20} />,
      color: "var(--accent-1)",
      items: ["DSA", "OOP", "Computer Networks (CNS)", "Operating Systems (OS)", "DBMS"]
    },
    {
      title: "Languages",
      icon: <Code2 size={20} />,
      color: "var(--accent-4)",
      items: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS"]
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
      items: ["Node.js", "Express.js", "REST API", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={20} />,
      color: "var(--accent-1)",
      items: ["GitHub", "VS Code", "MS Excel", "Google Sheets"]
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
      title: "Top 15 Rank in GeeksforGeeks Course",
      org: "GeeksforGeeks",
      year: "2024",
      desc: "Ranked in the Top 15 among 15,000+ participants, demonstrating strong problem-solving abilities and consistency."
    },
    {
      title: "500+ DSA Problems Solved",
      org: "Multiple Platforms",
      year: "2024",
      desc: "Successfully solved over 500 Data Structures and Algorithms problems across various competitive programming platforms."
    },
    {
      title: "District-Level Cricket Representative",
      org: "Sports",
      year: "2023-2024",
      desc: "Represented team at district-level cricket tournaments, demonstrating teamwork, discipline, and consistent performance."
    },
    {
      title: "HSC 12th Grade Excellence",
      org: "C.S. Kothari Jr. College, Nandura",
      year: "2023",
      desc: "Achieved 81.67% in Higher Secondary Certificate examination."
    },
    {
      title: "SSC 10th Grade Excellence",
      org: "C.S. Kothari High School, Nandura",
      year: "2021",
      desc: "Secured outstanding 94.00% in Secondary School Certificate examination."
    }
  ];

  const projects = [
    {
      title: "MSRTC Bus Record Management System",
      tech: "Database Management, System Design",
      year: "2024",
      link: "https://github.com/kartik-86/MSRTC", //GitHub link
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
      link: "https://github.com/kartik-86/Chatting-App-", //GitHub link
      details: [
        "Designed real-time chat application focused on improving communication and interaction between users",
        "Developed core features including user login, profile creation, and message flow for smooth user experience",
        "Structured interface and navigation for intuitive user understanding and ease of use",
        "Analyzed user behavior and feedback to identify usability issues and improve overall application flow"
      ]
    }
  ];

  const community = [
    {
      event: "PICT NSS Rural Development Program",
      role: "Volunteer",
      year: "2024",
      details: [
        "Participated in a 7-day rural development program organized by PICT NSS",
        "Supported community initiatives and contributed to social welfare activities",
        "Demonstrated commitment to social responsibility and community service"
      ]
    },
    {
      event: "District-Level Cricket Tournaments",
      role: "Team Representative",
      year: "2023-2024",
      details: [
        "Represented team in competitive district-level cricket tournaments",
        "Demonstrated leadership, coordination, and accountability throughout the competition",
        "Built strong teamwork skills and maintained discipline under pressure"
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
          FULL STACK | ANALYAST | PROBLEM SOLVER
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
        {['about', 'experience', 'stack', 'projects', 'achievements', 'community'].map((tab) => (
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
                <strong> Pune Institute of Computer Technology</strong> (CGPA: 7.50), passionate about 
                building efficient software solutions.
              </p>
              <p>
                Strong foundation in <strong>Data Structures & Algorithms</strong> with <strong>500+ problems solved</strong> across 
                competitive programming platforms. Ranked <strong>Top 15 among 15,000+ participants</strong> in GeeksforGeeks course.
              </p>
              <p>
                Full-stack developer experienced in <strong>MERN stack</strong> with projects ranging from 
                real-time chat applications to database management systems. Interested in 
                <strong> stock market research</strong>, <strong>artificial intelligence</strong>, and emerging technologies.
              </p>
              <p>
                Active in community service through <strong>PICT NSS</strong> and represented my team in 
                <strong> district-level cricket tournaments</strong>, demonstrating leadership and teamwork.
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

        {activeTab === 'community' && (
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