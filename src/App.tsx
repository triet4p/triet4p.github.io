import React from 'react';
import type { Skill, Project, Education, Certificate, TimelineEvent, Experience, Award } from './types';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import { 
    GithubIcon, LinkedInIcon, EmailIcon, PhoneIcon,
    PythonIcon, JavaIcon, CppIcon, JavaScriptIcon, TypeScriptIcon, HtmlIcon, CssIcon, SqlIcon, 
    DockerIcon, KubernetesIcon, PytorchIcon, GitIcon, GcpIcon, SparkIcon, KafkaIcon, HadoopIcon
} from './components/Icons';

// --- DATA FROM CV ---

const personalInfo = {
    name: "Lê Minh Triết",
    title: "Thực tập sinh AI Engineer",
    email: "trietlm0306@gmail.com",
    phone: "0775528066",
    linkedin: "https://www.linkedin.com/in/le-triet-2604241a9/",
    github: "https://github.com/triet4p",
    avatar: "https://i.pravatar.cc/150?u=leminhtriet",
};

const objective = "Tôi là Lê Minh Triết, một sinh viên yêu thích Toán học, lập trình, dữ liệu và thiết kế hệ thống. Mặc dù chưa có nhiều kinh nghiệm, tôi tự tin với khả năng tự học, tự đọc, thành thạo với dữ liệu và AI. Tôi muốn theo đuổi vị trí trong ngành AI, nơi có thể áp dụng kiến thức về học máy, dữ liệu lớn và kiến trúc hệ thống để xây dựng, triển khai và tối ưu hóa các giải pháp AI vào ứng dụng thực tế, góp phần giải quyết các vấn đề kinh doanh. Tôi tin rằng với đam mê và kỹ năng của mình và khả năng chịu áp lực tốt, tôi sẽ hoàn thành tốt mọi nhiệm vụ được giao với năng suất cao.";

const experience: Experience[] = [
    {
        company: 'Công ty cổ phần VCCorp',
        role: 'Thực tập sinh Data Engineer',
        period: '03/2024 - 05/2024',
        responsibilities: [
            'Trau dồi các kiến thức nền tảng về máy tính, hệ điều hành, mạng máy tính, bảo mật.',
            'Luyện tập và nâng cao kiến thức, kĩ năng về OOP, Java backend, thiết kế, xây dựng chuẩn hóa cơ sở dữ liệu.',
            'Xây dựng ứng dụng cơ bản về đồng bộ file bằng Restful API trong hệ thống client-server.',
            'Làm quen cách làm việc trong môi trường doanh nghiệp, giao tiếp hiệu quả với leader và đồng nghiệp.'
        ]
    }
];

const education: Education[] = [
    {
        institution: 'ĐẠI HỌC BÁCH KHOA HÀ NỘI',
        degree: 'Khoa học máy tính',
        period: '2022 - Hiện nay',
        details: 'CPA: 3.74/4.0'
    },
    {
        institution: 'Trường THPT Chuyên sơn la',
        degree: 'Chuyên Toán',
        period: '2019 - 2022',
        details: 'Tốt nghiệp loại giỏi'
    },
];

const skillCategories = [
    {
        name: "Ngôn ngữ Lập trình & Web",
        skills: [
            { name: 'Python', icon: <PythonIcon /> },
            { name: 'Java', icon: <JavaIcon /> },
            { name: 'C++', icon: <CppIcon /> },
            { name: 'JavaScript', icon: <JavaScriptIcon /> },
            { name: 'TypeScript', icon: <TypeScriptIcon /> },
            { name: 'HTML', icon: <HtmlIcon /> },
            { name: 'CSS', icon: <CssIcon /> },
        ]
    },
    {
        name: "AI, Big Data & Cơ sở dữ liệu",
        skills: [
            { name: 'Pytorch', icon: <PytorchIcon /> },
            { name: 'Spark', icon: <SparkIcon /> },
            { name: 'Kafka', icon: <KafkaIcon /> },
            { name: 'Hadoop', icon: <HadoopIcon /> },
            { name: 'SQL', icon: <SqlIcon /> },
        ]
    },
    {
        name: "DevOps, Cloud & Tools",
        skills: [
            { name: 'Docker', icon: <DockerIcon /> },
            { name: 'Kubernetes', icon: <KubernetesIcon /> },
            { name: 'Git', icon: <GitIcon /> },
            { name: 'Google Cloud', icon: <GcpIcon /> },
        ]
    }
];

const projects: Project[] = [
  {
    title: 'HỆ THỐNG HỖ TRỢ ĐẦU TƯ CỔ PHIẾU - ITAPIA (MVP)',
    description: 'Hệ thống hỗ trợ đầu tư full-stack dựa trên kiến trúc microservices, với triết lý cốt lõi là Khả năng Giải thích (Explainability - XAI) và cá nhân hóa sâu.',
    tags: ['Python', 'FastAPI', 'PyTorch', 'PostgreSQL', 'Docker', 'Hugging Face'],
    link: 'https://github.com/triet4p/itapia',
    image: 'https://picsum.photos/seed/itapia/400/300',
  },
  {
    title: 'XÂY DỰNG HỆ THỐNG BIG DATA TRÊN KUBERNETES',
    description: 'Xây dựng hệ thống Big Data real-time xử lý log streaming với kiến trúc Kafka → Spark Streaming → HDFS → Hive, triển khai hoàn toàn trên Kubernetes cluster.',
    tags: ['Python', 'Docker', 'Kubernetes', 'Hadoop', 'Spark', 'Kafka', 'Hive'],
    link: 'https://github.com/triet4p/app-log-process-k8s',
    image: 'https://picsum.photos/seed/bigdata/400/300',
  },
];

const certificates: Certificate[] = [
    { name: 'Problem Solving, SQL, Software Engineer, Python, Java', issuer: 'HackerRank', year: '2023' },
];

const awards: Award[] = [
    { name: 'Đạt danh hiệu Expert', issuer: 'Kaggle', year: '2024' },
    { name: 'Giải Nhì kỳ thi HSG Quốc gia môn Toán', issuer: 'Bộ Giáo dục và Đào tạo', year: '2022' },
    { name: 'Giải Ba kỳ thi HSG Quốc gia môn Toán', issuer: 'Bộ Giáo dục và Đào tạo', year: '2021' },
];

const timelineEvents: TimelineEvent[] = [
    { year: '2019', title: 'Bén duyên với Toán học & Lập trình', description: 'Bắt đầu với chuyên Toán tại THPT Chuyên Sơn La, nơi niềm đam mê với logic và giải quyết vấn đề được khơi dậy, đặt nền móng cho con đường đến với khoa học máy tính.' },
    { year: '2022', title: 'Bước vào Đại học Bách Khoa', description: 'Trúng tuyển vào ngành Khoa học máy tính, một trong những môi trường học thuật hàng đầu Việt Nam. Bắt đầu hành trình khám phá sâu hơn về cấu trúc dữ liệu, giải thuật và các hệ thống phức tạp.' },
    { year: '2023', title: 'Dấn thân vào AI và Dữ liệu lớn', description: 'Tự học và nghiên cứu về Học máy, Học sâu và các công nghệ Big Data. Thực hiện các dự án cá nhân đầu tiên, áp dụng lý thuyết vào thực tế.' },
    { year: '2024', title: 'Kinh nghiệm thực tế đầu tiên', description: 'Tham gia thực tập tại VCCorp, được làm việc trong môi trường chuyên nghiệp, học hỏi về quy trình phát triển phần mềm và xây dựng các hệ thống dữ liệu thực tế.' },
    { year: 'Hiện tại', title: 'Hướng tới tương lai', description: 'Tiếp tục học hỏi, trau dồi kỹ năng và tìm kiếm những cơ hội mới để đóng góp vào việc xây dựng các giải pháp AI thông minh và hữu ích.' },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 1)), url('https://picsum.photos/1200/800')" }}>
        <img
          src={personalInfo.avatar}
          alt={personalInfo.name}
          className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-xl mb-6"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          {personalInfo.name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-cyan-300 font-medium">
          {personalInfo.title}
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"><GithubIcon className="h-8 w-8" /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"><LinkedInIcon className="h-8 w-8" /></a>
          <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"><EmailIcon className="h-8 w-8" /></a>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-12">
        {/* About Me */}
        <Section id="about" title="Mục tiêu nghề nghiệp">
          <p className="max-w-3xl mx-auto text-center text-lg text-slate-400 leading-relaxed">
            {objective}
          </p>
        </Section>
        
        {/* Work Experience */}
        <Section id="experience" title="Kinh nghiệm làm việc">
          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{exp.company}</h3>
                    <p className="text-cyan-400">{exp.role}</p>
                  </div>
                  <p className="text-slate-500 font-medium text-right">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                    {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Education */}
        <Section id="education" title="Học vấn">
            <div className="max-w-3xl mx-auto space-y-8">
                {education.map((edu, index) => (
                    <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-slate-100">{edu.institution}</h3>
                                <p className="text-cyan-400">{edu.degree}</p>
                                {edu.details && <p className="text-slate-400 mt-1">{edu.details}</p>}
                            </div>
                            <p className="text-slate-500 font-medium">{edu.period}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Bảng Kỹ Năng">
          <div className="max-w-5xl mx-auto space-y-12">
            {skillCategories.map((category) => (
              <div key={category.name} className="bg-slate-800/50 rounded-xl p-6 md:p-8 shadow-lg border border-slate-700">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">{category.name}</h3>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center justify-center w-28 h-28 bg-slate-800 rounded-lg p-4 shadow-md hover:bg-slate-700 hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300">
                      <div className="text-cyan-400 mb-2">{skill.icon}</div>
                      <span className="font-medium text-slate-300 text-center text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Dự án">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>
        
        {/* Awards */}
        <Section id="awards" title="Danh hiệu & Giải thưởng">
             <div className="max-w-3xl mx-auto grid sm:grid-cols-1 gap-6">
                {awards.map((award, index) => (
                     <div key={index} className="bg-slate-800 p-5 rounded-lg flex justify-between items-center hover:bg-slate-700 transition-colors duration-300">
                        <div>
                           <h3 className="font-bold text-slate-100">{award.name}</h3>
                           <p className="text-sm text-slate-400">{award.issuer}</p>
                        </div>
                        <span className="text-slate-500 font-semibold">{award.year}</span>
                    </div>
                ))}
            </div>
        </Section>

        {/* Certificates */}
        <Section id="certificates" title="Chứng chỉ">
             <div className="max-w-3xl mx-auto grid sm:grid-cols-1 gap-6">
                {certificates.map((cert, index) => (
                     <div key={index} className="bg-slate-800 p-5 rounded-lg flex justify-between items-center hover:bg-slate-700 transition-colors duration-300">
                        <div>
                           <h3 className="font-bold text-slate-100">{cert.name}</h3>
                           <p className="text-sm text-slate-400">{cert.issuer}</p>
                        </div>
                        <span className="text-slate-500 font-semibold">{cert.year}</span>
                    </div>
                ))}
            </div>
        </Section>
        
        {/* Story Line */}
        <Section id="story" title="Quá trình phát triển">
            <div className="max-w-3xl mx-auto">
                {timelineEvents.map((event, index) => (
                    <TimelineItem key={index} event={event} isLast={index === timelineEvents.length - 1} />
                ))}
            </div>
        </Section>
        
        {/* Get in Touch */}
        <Section id="contact" title="Liên hệ">
             <div className="text-center max-w-2xl mx-auto">
                <p className="text-lg text-slate-400 mb-8">
                    Tôi luôn sẵn sàng cho các cơ hội và hợp tác mới. Đừng ngần ngại liên hệ nếu bạn có bất kỳ câu hỏi nào. Tôi sẽ trả lời sớm nhất có thể!
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <a 
                        href={`mailto:${personalInfo.email}`}
                        className="inline-block bg-cyan-500 text-slate-900 font-bold text-lg px-8 py-4 rounded-md hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
                    >
                        Gửi Email
                    </a>
                    <div className="flex items-center gap-2 text-slate-400">
                        <PhoneIcon className="h-5 w-5 text-cyan-400" />
                        <span>{personalInfo.phone}</span>
                    </div>
                </div>
             </div>
        </Section>
      </main>

      <footer className="py-8 text-center text-slate-500 border-t border-slate-800 mt-16">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="text-sm">Thiết kế & Xây dựng bởi Lê Minh Triết</p>
      </footer>
    </div>
  );
};

export default App;
