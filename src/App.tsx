import React, { useState } from "react";
import { createRoot } from "react-dom/client";

// ==========================================
// 1. CONFIGURATION / DATA (EASY TO EDIT)
// ==========================================

const portfolioData = {
  vi: {
    labels: {
      experience: "01. KINH NGHIỆM",
      projects: "02. DỰ ÁN NỔI BẬT",
      skills: "03. KỸ NĂNG",
      education: "04. HỌC VẤN",
      awards: "05. GIẢI THƯỞNG",
      footer: "Designed & Built by Lê Minh Triết",
    },
    profile: {
      name: "Lê Minh Triết",
      title: "Thực tập sinh AI Engineer",
      location: "Quận Hoàng Mai, Hà Nội",
      email: "trietlm0306@gmail.com",
      phone: "0775528066",
      linkedin: "https://www.linkedin.com/in/le-triet-2604241a9/",
      github: "https://github.com/triet4p",
      summary:
        "Sinh viên Khoa học Máy tính với tư duy hệ thống và nền tảng Toán học vững chắc. Chuyên sâu về nghiên cứu, triển khai AI, Big Data và kiến trúc Microservices. Định hướng phát triển các hệ thống thông minh hiệu năng cao, tối ưu hóa khả năng mở rộng trong môi trường thực tế.",
    },
    education: [
      {
        school: "Đại học Bách Khoa Hà Nội",
        period: "2022 - Hiện nay",
        major: "Khoa học máy tính",
        details: ["CPA: 3.74/4.0"],
      },
      {
        school: "Trường THPT Chuyên Sơn La",
        period: "2019 - 2022",
        major: "Chuyên Toán",
        details: ["Tốt nghiệp loại giỏi"],
      },
    ],
    experience: [
      {
        company: "Công ty cổ phần VCCorp",
        role: "Thực tập sinh Data Engineer",
        period: "03/2025 - 05/2025",
        description: [
          "Trau dồi kiến thức nền tảng về hệ điều hành, mạng máy tính, bảo mật.",
          "Luyện tập chuyên sâu về OOP, Java backend, thiết kế và chuẩn hóa cơ sở dữ liệu.",
          "Xây dựng ứng dụng đồng bộ file bằng Restful API (Client-Server).",
          "Làm quen quy trình làm việc doanh nghiệp, giao tiếp hiệu quả.",
        ],
      },
    ],
    skills: {
      "Lập trình & Nền tảng": ["C", "C++", "Java", "Python", "HTML/CSS", "JS/TS", "OOP", "DSA"],
      "Cơ sở dữ liệu": ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Redis", "ETL"],
      "Backend": ["RESTful API", "Microservices", "FastAPI", "Version Control"],
      "AI - ML": ["Scikit-learn", "Deep Learning (CNN, RNN, GAN)", "Transformers", "LLM", "PyTorch", "Hugging Face"],
      "Big Data": ["Hadoop", "Spark", "Kafka", "Hive", "HBase", "Batch/Real-time Processing"],
      "DevOps & Tools": ["Linux", "Docker", "Kubernetes", "Git", "GCP/Cloud Basics"],
    },
    projects: [
      {
        name: "MCP-FIN-TEST",
        type: "Agent Tài chính AI & Giao thức MCP",
        period: "9/2025 - 10/2025",
        repo: "https://github.com/triet4p/mcp-fin-test",
        tech: ["Python", "FastAPI", "LangChain", "MCP", "Redis", "Docker", "Multi-LLM"],
        description:
          "Agent tài chính AI xây dựng trên kiến trúc Model-Context-Protocol (MCP), cho phép mở rộng module linh hoạt để phân tích dữ liệu chứng khoán.",
        features: [
          "Hỗ trợ đa LLM: Chuyển đổi linh hoạt giữa Gemini, OpenAI, và Ollama.",
          "Kiến trúc Microservices: Tách biệt Agent Host, Tool Registry và Data Services (Yahoo Finance).",
          "Bộ nhớ & Caching: Tích hợp Redis cho lưu trữ hội thoại và caching phản hồi.",
          "Tích hợp sâu với ITAPIA để cung cấp các phân tích tài chính chuyên sâu.",
        ],
      },
      {
        name: "ITAPIA (MVP)",
        type: "Hệ thống hỗ trợ đầu tư cổ phiếu",
        period: "6/2025 - 8/2025",
        repo: "https://github.com/triet4p/itapia",
        tech: ["Python", "FastAPI", "Pytorch", "PostgreSQL", "Redis", "Docker", "Vue.js"],
        description:
          "Hệ thống hỗ trợ đầu tư full-stack dựa trên kiến trúc microservices, tập trung vào XAI (Giải thích AI) và cá nhân hóa.",
        features: [
          "Phân tích đa luồng: Chỉ báo kĩ thuật (TA-Lib), Phân tích tin tức (BERT/NER), Dự báo (LightGBM).",
          "Rule Engine minh bạch: Dựa trên Cây Biểu thức Tượng trưng để tạo các quy tắc đầu tư có thể giải thích được.",
          "Backend hiệu suất cao với FastAPI & Pydantic.",
          "Frontend SPA với Vue.js & TypeScript, xác thực OAuth2/JWT.",
        ],
      },
      {
        name: "Big Data trên Kubernetes",
        type: "Hệ thống xử lý Log Streaming",
        period: "12/2024 - 4/2025",
        repo: "https://github.com/triet4p/app-log-process-k8s",
        tech: ["Python", "Docker", "Kubernetes", "Hadoop", "Spark", "Kafka", "Hive"],
        description:
          "Xây dựng hệ thống Big Data real-time xử lý log streaming triển khai hoàn toàn trên Kubernetes cluster.",
        features: [
          "Pipeline: Kafka → Spark Streaming → HDFS → Hive.",
          "Containerize Hadoop ecosystem tối ưu cho K8s.",
          "Tích hợp Spark Operator để quản lý ứng dụng Spark.",
          "Data Warehouse layer với Hive Metastore và PostgreSQL backend.",
        ],
      },
    ],
    awards: [
      { title: "Đạt danh hiệu Expert trên Kaggle", year: "2024" },
      { title: "Giải Nhì kỳ thi HSG Quốc gia môn Toán", year: "2022" },
      { title: "Giải Ba kỳ thi HSG Quốc gia môn Toán", year: "2021" },
      { title: "Problem Solving (Immediate), SQL (Immediate) - HackerRank", year: "2023" },
    ],
  },
  en: {
    labels: {
      experience: "01. EXPERIENCE",
      projects: "02. FEATURED PROJECTS",
      skills: "03. SKILLS",
      education: "04. EDUCATION",
      awards: "05. AWARDS",
      footer: "Designed & Built by Lê Minh Triết",
    },
    profile: {
      name: "Lê Minh Triết",
      title: "AI Engineer Intern",
      location: "Hoang Mai Dist, Hanoi",
      email: "trietlm0306@gmail.com",
      phone: "0775528066",
      linkedin: "https://www.linkedin.com/in/le-triet-2604241a9/",
      github: "https://github.com/triet4p",
      summary:
        "Computer Science student with strong system thinking and mathematical foundation. Specializing in AI, Big Data solutions, and Microservices architectures. Dedicated to building scalable, high-performance intelligent systems for real-world applications.",
    },
    education: [
      {
        school: "Hanoi University of Science and Technology",
        period: "2022 - Present",
        major: "Computer Science",
        details: ["CPA: 3.74/4.0"],
      },
      {
        school: "Son La Gifted High School",
        period: "2019 - 2022",
        major: "Mathematics Specialization",
        details: ["Graduated with Distinction"],
      },
    ],
    experience: [
      {
        company: "VCCorp Corporation",
        role: "Data Engineer Intern",
        period: "03/2025 - 05/2025",
        description: [
          "Cultivated foundational knowledge of operating systems, computer networks, and security.",
          "Deeply practiced OOP, Java backend, database design, and normalization.",
          "Built a basic file synchronization application using Restful API (Client-Server).",
          "Familiarized with corporate workflows and effective communication.",
        ],
      },
    ],
    skills: {
      "Programming & Foundations": ["C", "C++", "Java", "Python", "HTML/CSS", "JS/TS", "OOP", "DSA"],
      "Databases": ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Redis", "ETL"],
      "Backend": ["RESTful API", "Microservices", "FastAPI", "Version Control"],
      "AI - ML": ["Scikit-learn", "Deep Learning (CNN, RNN, GAN)", "Transformers", "LLM", "PyTorch", "Hugging Face"],
      "Big Data": ["Hadoop", "Spark", "Kafka", "Hive", "HBase", "Batch/Real-time Processing"],
      "DevOps & Tools": ["Linux", "Docker", "Kubernetes", "Git", "GCP/Cloud Basics"],
    },
    projects: [
      {
        name: "MCP-FIN-TEST",
        type: "AI Financial Agent & MCP Protocol",
        period: "9/2025 - 10/2025",
        repo: "https://github.com/triet4p/mcp-fin-test",
        tech: ["Python", "FastAPI", "LangChain", "MCP", "Redis", "Docker", "Multi-LLM"],
        description:
          "An AI-powered financial agent built on the Model-Context-Protocol (MCP) philosophy, capable of extensible financial analysis and multi-LLM reasoning.",
        features: [
          "Multi-LLM Support: Seamless switching between Gemini, OpenAI, and Ollama models.",
          "Microservices Architecture: Separated Agent Host, Tool Registry, and Real-time Data Services.",
          "Memory & Caching: Redis-backed conversation history and response caching.",
          "Deep integration with ITAPIA microservices for advanced financial analytics.",
        ],
      },
      {
        name: "ITAPIA (MVP)",
        type: "Stock Investment Support System",
        period: "6/2025 - 8/2025",
        repo: "https://github.com/triet4p/itapia",
        tech: ["Python", "FastAPI", "Pytorch", "PostgreSQL", "Redis", "Docker", "Vue.js"],
        description:
          "A full-stack investment support system based on microservices architecture, focusing on XAI (Explainable AI) and personalization.",
        features: [
          "Multi-stream analysis: Technical indicators (TA-Lib), News Analysis (BERT/NER), Forecasting (LightGBM).",
          "Transparent Rule Engine: Based on Symbolic Expression Trees to create explainable investment rules.",
          "High-performance Backend with FastAPI & Pydantic.",
          "SPA Frontend with Vue.js & TypeScript, OAuth2/JWT authentication.",
        ],
      },
      {
        name: "Big Data on Kubernetes",
        type: "Log Streaming Processing System",
        period: "12/2024 - 4/2025",
        repo: "https://github.com/triet4p/app-log-process-k8s",
        tech: ["Python", "Docker", "Kubernetes", "Hadoop", "Spark", "Kafka", "Hive"],
        description:
          "Built a real-time Big Data system for log streaming processing fully deployed on a Kubernetes cluster.",
        features: [
          "Pipeline: Kafka → Spark Streaming → HDFS → Hive.",
          "Containerized Hadoop ecosystem optimized for K8s.",
          "Integrated Spark Operator for managing Spark applications.",
          "Data Warehouse layer with Hive Metastore and PostgreSQL backend.",
        ],
      },
    ],
    awards: [
      { title: "Kaggle Expert Title", year: "2024" },
      { title: "Second Prize in National Math Olympiad", year: "2022" },
      { title: "Third Prize in National Math Olympiad", year: "2021" },
      { title: "Problem Solving (Immediate), SQL (Immediate) - HackerRank", year: "2023" },
    ],
  },
};

// ==========================================
// 2. STYLES & ICONS
// ==========================================

const styles = `
  :root {
    --bg-color: #fcfcfc;
    --text-primary: #1a1a1a;
    --text-secondary: #555;
    --accent-color: #0056b3;
    --accent-light: #e7f1ff;
    --border-color: #e0e0e0;
    --card-bg: #ffffff;
    --grid-color: #e5e5e5;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    background-image: radial-gradient(var(--grid-color) 1px, transparent 1px);
    background-size: 24px 24px;
  }

  .font-mono { font-family: 'Fira Code', monospace; }
  .font-sans { font-family: 'Inter', sans-serif; }

  .section-title {
    font-family: 'Fira Code', monospace;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-color);
  }
  
  .section-title::after {
    content: '';
    flex: 1;
    height: 2px;
    background: var(--border-color);
    margin-left: 1rem;
  }

  .card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }
  
  .card:hover {
    transform: translateY(-2px);
    box-shadow: 4px 4px 0px var(--border-color);
    border-color: var(--accent-color);
  }

  .card-header-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--accent-color);
  }

  .tag {
    display: inline-block;
    background: var(--accent-light);
    color: var(--accent-color);
    padding: 0.25rem 0.5rem;
    font-size: 0.85rem;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid transparent;
  }
  
  .tag:hover {
    border-color: var(--accent-color);
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: color 0.2s;
  }
  
  .contact-link:hover {
    color: var(--accent-color);
  }

  .lang-switch {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    gap: 0.5rem;
    background: var(--card-bg);
    padding: 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: 2rem;
    z-index: 100;
  }

  .lang-btn {
    border: none;
    background: none;
    cursor: pointer;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    color: var(--text-secondary);
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    transition: all 0.2s;
  }

  .lang-btn.active {
    background: var(--accent-color);
    color: white;
  }

  /* Grid Layouts */
  .grid-2-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .grid-auto-fill {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .grid-2-col { grid-template-columns: 1fr; }
    .lang-switch {
        top: 1rem;
        right: 1rem;
    }
  }
`;

// Simple Icon Components
const Icons = {
  MapPin: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Mail: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  Phone: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  Github: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
  Linkedin: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
  Link: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>,
  Award: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
};

// ==========================================
// 3. COMPONENTS
// ==========================================

const Header = ({ data }: { data: any }) => (
  <header style={{ marginBottom: "3rem" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "0.5rem", letterSpacing: "-1px" }}>
      {data.profile.name}
    </h1>
    <p className="font-mono" style={{ fontSize: "1.1rem", color: "var(--accent-color)", marginBottom: "1.5rem" }}>
      &gt; {data.profile.title}
    </p>
    
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", fontSize: "0.95rem" }}>
      <div className="contact-link"><Icons.MapPin /> {data.profile.location}</div>
      <a href={`tel:${data.profile.phone}`} className="contact-link"><Icons.Phone /> {data.profile.phone}</a>
      <a href={`mailto:${data.profile.email}`} className="contact-link"><Icons.Mail /> {data.profile.email}</a>
      <a href={data.profile.github} target="_blank" rel="noreferrer" className="contact-link"><Icons.Github /> GitHub</a>
      <a href={data.profile.linkedin} target="_blank" rel="noreferrer" className="contact-link"><Icons.Linkedin /> LinkedIn</a>
    </div>

    <div style={{ marginTop: "2rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
      {data.profile.summary}
    </div>
  </header>
);

const ProjectCard = ({ project }: { project: any }) => (
  <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <div className="card-header-line"></div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
      <h3 style={{ margin: 0, fontSize: "1.25rem" }}>
        <a href={project.repo} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {project.name} <Icons.Link />
        </a>
      </h3>
      <span className="font-mono" style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{project.period}</span>
    </div>
    <div style={{ marginBottom: "1rem", fontStyle: "italic", color: "var(--text-secondary)" }}>{project.type}</div>
    
    <div style={{ marginBottom: "1rem" }}>
      {project.tech.map((t: string, i: number) => (
        <span key={i} className="tag">{t}</span>
      ))}
    </div>

    <p style={{ marginBottom: "1rem", flex: 1 }}>{project.description}</p>
    
    <ul style={{ paddingLeft: "1.2rem", margin: 0, fontSize: "0.95rem", color: "var(--text-secondary)" }}>
      {project.features.map((f: string, i: number) => (
        <li key={i} style={{ marginBottom: "0.25rem" }}>{f}</li>
      ))}
    </ul>
  </div>
);

const ExperienceCard = ({ job }: { job: any }) => (
  <div style={{ marginBottom: "2rem" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
      <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{job.role}</h3>
      <span className="font-mono" style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{job.period}</span>
    </div>
    <div style={{ color: "var(--accent-color)", fontWeight: 600, marginBottom: "0.5rem" }}>@ {job.company}</div>
    <ul style={{ paddingLeft: "1.2rem", color: "var(--text-secondary)" }}>
      {job.description.map((desc: string, i: number) => (
        <li key={i} style={{ marginBottom: "0.25rem" }}>{desc}</li>
      ))}
    </ul>
  </div>
);

const LanguageSwitch = ({ lang, setLang }: { lang: 'vi' | 'en', setLang: (l: 'vi' | 'en') => void }) => (
  <div className="lang-switch">
    <button 
      className={`lang-btn ${lang === 'vi' ? 'active' : ''}`} 
      onClick={() => setLang('vi')}
    >
      VI
    </button>
    <button 
      className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
      onClick={() => setLang('en')}
    >
      EN
    </button>
  </div>
);

const App = () => {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const data = portfolioData[lang];

  return (
    <>
      <style>{styles}</style>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "3rem 1.5rem", position: "relative" }}>
        
        <LanguageSwitch lang={lang} setLang={setLang} />
        
        <Header data={data} />

        <section style={{ marginBottom: "3rem" }}>
          <div className="section-title">{data.labels.experience}</div>
          {data.experience.map((job, i) => (
            <ExperienceCard key={i} job={job} />
          ))}
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <div className="section-title">{data.labels.projects}</div>
          <div className="grid-2-col">
            {data.projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <div className="section-title">{data.labels.skills}</div>
          <div className="grid-auto-fill">
            {Object.entries(data.skills).map(([category, skills], i) => (
              <div key={i} className="card" style={{ borderLeft: "none", borderRight: "none", borderTop: "4px solid var(--accent-color)" }}>
                <h4 style={{ marginTop: 0, marginBottom: "1rem", fontSize: "1rem" }}>{category}</h4>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {(skills as string[]).map((skill, j) => (
                    <span key={j} className="tag" style={{ background: "#f0f0f0", color: "#333", border: "1px solid #ddd" }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid-2-col" style={{ gap: "3rem" }}>
          <section>
            <div className="section-title">{data.labels.education}</div>
            {data.education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ margin: "0 0 0.25rem 0" }}>{edu.school}</h4>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>
                  <span>{edu.major}</span>
                  <span className="font-mono">{edu.period}</span>
                </div>
                {edu.details.map((d, j) => (
                  <div key={j} style={{ fontSize: "0.9rem" }}>• {d}</div>
                ))}
              </div>
            ))}
          </section>

          <section>
            <div className="section-title">{data.labels.awards}</div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {data.awards.map((award, i) => (
                <li key={i} style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}>
                  <div style={{ color: "var(--accent-color)", marginTop: "2px" }}><Icons.Award /></div>
                  <div>
                    <div style={{ fontWeight: 500 }}>{award.title}</div>
                    <div className="font-mono" style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{award.year}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer style={{ marginTop: "5rem", textAlign: "center", color: "var(--text-secondary)", fontSize: "0.9rem", borderTop: "1px solid var(--border-color)", paddingTop: "2rem" }}>
          <p className="font-mono">{data.labels.footer}</p>
        </footer>
      </div>
    </>
  );
};


export default App;