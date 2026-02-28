import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';
import DownloadButton from './DownloadButton';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Frontend Developer",
    "UI/UX Designer", 
    "Full Stack Engineer",
    "Creative Problem Solver"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(roleInterval);
  }, []);

  const projects = [
    {
      title: "College Account Manager",
      description: "A user-friendly web application designed to streamline account management tasks, offering secure access to user profiles, settings, and activity tracking with an intuitive interface for efficient college administration.",
      tech: ["Django", "Typescript", "Sqlite"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Expense Tracker",
      description: "A sleek web app for effortlessly tracking and managing personal or business expenses, featuring intuitive categorization, real-time budgeting, and insightful spending reports to promote financial clarity and control.",
      tech: ["React", "TypeScript", "MongoDB"],
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: "Real-time Messaging App",
      description: "A dynamic web app enabling instant, secure real-time messaging with features like group chats, multimedia sharing, and customizable notifications for seamless communication across devices.",
      tech: ["React", "MongoDB", "WebSocket"],
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const skills = ["C", "Java", "React", "JavaScript", "TypeScript", "Node.js", "Django", "Python", "UI/UX", "MongoDB", "SQL", "Git", "AWS", "Web APIs", "System Design"];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              Portfolio
            </div>
            <div className="flex items-center space-x-8">
              <div className={`hidden md:flex space-x-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                <a href="#home" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">Home</a>
                <a href="#projects" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">Projects</a>
                <a href="#about" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">About</a>
                <a href="#contact" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">Contact</a>
              </div>
              <div className={`flex space-x-4 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                <a href="https://www.github.com/israel1jol" className="text-gray-800 hover:text-gray-600 hover:scale-110 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/israel-adigun-81b99a374/" className="text-gray-800 hover:text-gray-600 hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:adigun.jolly@gmail.com" className="text-gray-800 hover:text-gray-600 hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
                  Hello, I'm
                  <span className="block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent animate-pulse">
                    Israel Adigun
                  </span>
                </h1>
              </div>
              
              <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <div className="text-2xl lg:text-3xl text-gray-800 h-12">
                  <span className="inline-block transition-all duration-500 transform">
                    {roles[currentRole]}
                  </span>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <p className="text-lg text-gray-800 leading-relaxed max-w-xl">
                  Passionate about creating exceptional digital experiences through clean code, 
                  innovative design, and seamless user interactions. Let's build something amazing together.
                </p>
              </div>

              <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    View My Work
                  </button>
                  {/* <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all duration-300">
                    Download Resume
                  </button> */}
                  <DownloadButton />
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-1300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <div className="flex space-x-6 md:hidden">
                  <a href="https://www.github.com/israel1jol" className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-all duration-300">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/israel-adigun-81b99a374/" className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-all duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:adigun.jolly@gmail.com" className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Photo */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative">
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-pink-400 to-blue-500 rounded-full blur-2xl opacity-10 animate-bounce"></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden aspect-square shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
                    <div className="flex items-center justify-center h-full text-gray-500">
                      <img src="https://i.postimg.cc/RC3tbmpL/IMG-0784.jpg" alt="Israel Adigun" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-8 top-1/4 animate-float">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200">
                    <span className="text-sm font-medium text-gray-700">React</span>
                  </div>
                </div>
                <div className="absolute -right-6 top-1/3 animate-float-delayed">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200">
                    <span className="text-sm font-medium text-gray-700">TypeScript</span>
                  </div>
                </div>
                <div className="absolute -left-4 bottom-1/4 animate-float-slow">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200">
                    <span className="text-sm font-medium text-gray-700">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-600 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Text */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I'm a passionate developer with over 3 years of experience creating digital solutions 
                    that bridge the gap between design and functionality. My journey began with a curiosity 
                    for how things work, which evolved into a love for building exceptional user experiences.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, or mentoring aspiring developers. I believe in the power of clean, maintainable 
                    code and user-centered design.
                  </p>
                  <p>
                    I specialize in modern JavaScript frameworks and have a keen eye for detail when it comes 
                    to creating intuitive interfaces. My goal is always to create solutions that not only work 
                    flawlessly but also delight users.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Frontend Development Intern</h4>
                      <p className="text-gray-600 text-sm">University of Wisconsin-Milwaukee • Feb 2024 - Apr 2025</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Software Development Intern</h4>
                      <p className="text-gray-600 text-sm">Epic Systems. • Jun 2023 - Dec 2023</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Computer Science</h4>
                      <p className="text-gray-600 text-sm">University of Wisconsin-Milwaukee • May 2025</p>
                    </div>
                    {/* <div>
                      <h4 className="font-medium text-gray-900">Certifications</h4>
                      <p className="text-gray-600 text-sm">AWS Certified Developer</p>
                      <p className="text-gray-600 text-sm">React Specialist</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats and Achievements */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">2+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                  <div className="text-gray-700">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                  <div className="text-gray-700">Technologies</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Frontend Development</h4>
                      <p className="text-gray-600 text-sm">Creating responsive, interactive user interfaces with modern frameworks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Backend Development</h4>
                      <p className="text-gray-600 text-sm">Building scalable APIs and server-side applications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">UI/UX Design</h4>
                      <p className="text-gray-600 text-sm">Designing intuitive and visually appealing user experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-full text-gray-700 font-medium hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1s;
        }
        
        .animate-float-slow {
          animation: float 4s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
}
