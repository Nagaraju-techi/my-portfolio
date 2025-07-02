import React, { useState, useEffect } from 'react';
import {
  ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Users,
  Download, Menu, X, Send, CheckCircle, AlertCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/GANDENAGARAJU_RESUME.pdf';
    link.download = 'GANDENAGARAJU_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setIsLoaded(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ['home', 'about', 'experience', 'skills', 'certificates', 'projects', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React', level: 95, color: 'bg-cyan-500', icon: '⚛️' },
    { name: 'Java', level: 50, color: 'bg-blue-600', icon: '🧩' },
    { name: 'MySQL', level: 85, color: 'bg-green-500', icon: '🗄️' },
    { name: 'Python', level: 80, color: 'bg-yellow-500', icon: '🐍' },
    { name: 'UI/UX Design', level: 88, color: 'bg-purple-500', icon: '🎨' },
    { name: 'Cloud (AWS)', level: 75, color: 'bg-orange-500', icon: '☁️' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Emotion Detection System',
      description:
        'Real-time facial emotion recognition with 87% accuracy using OpenCV and DeepFace; processed over 400 frames per second.',
      tech: ['Python', 'OpenCV', 'DeepFace'],
      gradient: 'from-purple-600 via-blue-600 to-cyan-500',
      githubUrl: 'https://github.com/Nagaraju-techi/simple-open-cv-emotion-detection-project'
    },
    {
      id: 2,
      title: 'FreshMenta – E-Commerce Platform',
      description:
        'React.js-based fruit shop with 20+ products, dynamic cart, and secure checkout; achieved 90% Lighthouse performance score.',
      tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      githubUrl: 'https://github.com/Nagaraju-techi/ecommercewebsite'
    },
    {
      id: 3,
      title: 'Bachelors Kitchen – Restaurant Management System',
      description:
        'Python-based GUI restaurant management system with admin and customer panels. Features menu management, order placement, and billing using Tkinter.',
      tech: ['Python', 'Tkinter'],
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      githubUrl: 'https://github.com/Nagaraju-techi/restaurent-management-system'
    }
  ];


  const internshipExperience = [
    {
      id: 1,
      company: 'NIT Warangal',
      role: 'Web Developer Intern',
      duration: 'Jul 2024',
      location: 'Warangal, India',
      description: 'Designed and deployed an e-commerce web app used by 20+ mock users for testing. Enhanced site performance by 30% by reducing unnecessary re-renders in React.',
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
      logo: '🛒'
    },
    {
      id: 2,
      company: 'AICTE Eduskills',
      role: 'Full Stack Intern',
      duration: 'Oct 2024 - Dec 2024',
      location: 'Remote',
      description: 'Built 3 full-stack applications using the MERN stack with complete CRUD and authentication. Optimized backend endpoints, reducing API response time by 20%. Completed 5+ Agile sprints with on-time deliverables.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'],
      logo: '🌐'
    },
    {
      id: 3,
      company: 'Microsoft (AICTE & Edunet Foundation)',
      role: 'Foundations of AI Intern',
      duration: 'Apr 2025 - May 2025',
      location: 'Remote',
      description: 'Completed a 4-week internship under Microsoft initiative, gaining foundational knowledge of AI concepts and applications. Program implemented by Edunet Foundation in collaboration with AICTE.',
      tech: ['AI Fundamentals'],
      logo: '🤖'
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'AWS Academy Cloud Architecting',
      issuer: 'Amazon Web Services Training and Certification',
      date: 'Aug 2024',
      credentialId: '71acd1b7-f8c4-427a-bd24-0c4e877d4ff1',
      verifyUrl: 'https://www.credly.com/badges/71acd1b7-f8c4-427a-bd24-0c4e877d4ff1/public_url',
      icon: '☁️',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      id: 2,
      title: 'Theory of Computation',
      issuer: 'NPTEL (IIT via SWAYAM)',
      date: 'Sep 2024',
      credentialId: 'NPTEL24CS71S250100988',
      verifyUrl: 'https://drive.google.com/file/d/1bzhgMSaTqKSMS9uVCGPZUdhuKCyX0mMX/view?usp=sharing',
      icon: '📘',
      color: 'from-purple-500 to-indigo-500',
    },

    {
      id: 3,
      title: 'Project Management Foundations',
      issuer: 'LinkedIn Learning (NASBA Registered)',
      date: 'Oct 2024',
      credentialId: '756ac28292afb5ec5d83a79e00cb8f9199d94d381b26ab27c0dcf79a36157221',
      verifyUrl: 'https://drive.google.com/file/d/1YOqnMFv57IOzJxYfN4GrvG-Mz1aVkcgz/view?usp=sharing',
      icon: '📊',
      color: 'from-cyan-600 to-blue-600',
    },

    {
      id: 4,
      title: 'Problem Solving (Intermediate)',
      issuer: 'HackerRank',
      date: 'Jun 2024',
      credentialId: 'f9183e1292a3',
      verifyUrl: 'https://www.hackerrank.com/certificates/f9183e1292a3',
      icon: '🧠',
      color: 'from-blue-500 to-indigo-600',
    },

    {
      id: 5,
      title: 'Machine Learning with Python - Level 1',
      issuer: 'IBM',
      date: 'Jan 2024',
      credentialId: '1902c855-6c0c-463b-84ab-1febdfbfdee0',
      verifyUrl: 'https://www.credly.com/badges/1902c855-6c0c-463b-84ab-1febdfbfdee0',
      icon: '🤖',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      id: 6,
      title: 'Version Control with Git',
      issuer: 'Atlassian via Coursera',
      date: 'Mar 2024',
      credentialId: 'JFPB5ET8H5KU',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/JFPB5ET8H5KU',
      icon: '🧑‍💻',
      color: 'from-blue-600 to-sky-700',
    }

  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual EmailJS credentials
      const serviceId = 'service_i6mbwur';
      const templateId = 'template_ebai8wr';
      const publicKey = 'Q2YxY49FXKdFvVr6i';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'gandenagaraju04@gmail.com'
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              PORTFOLIO
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-all duration-300 hover:text-cyan-400 ${activeSection === item.id
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/98 backdrop-blur-lg border-t border-gray-700/50">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left transition-colors duration-300 ${activeSection === item.id
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          {/* Floating Particles */}
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        <div className={`text-center z-10 max-w-4xl mx-auto px-4 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            NAGARAJU GANDE
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            FRONTEND & UI UX DEVELOPER
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into scalable digital solutions with cutting-edge technology,
            clean architecture, and exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-white"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Explore My Work</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-full font-semibold hover:text-cyan-400 transition-all duration-300 text-white"
            >
              Let's Connect
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Nagaraju-techi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/gande-nagaraju-768978287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Passionate Problem Solver
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With a strong foundation in frontend development, I specialize in building responsive, user-friendly interfaces using React, HTML, CSS, and JavaScript. My focus is on creating clean, scalable designs that deliver great user experiences, blending UI/UX principles with practical development
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm passionate about clean code, innovative solutions, and creating exceptional user experiences.
                  When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source
                  projects, or mentoring aspiring developers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <Code className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Clean Code</div>
                    <div className="text-sm text-gray-400">Maintainable & Scalable</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <Palette className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">UI/UX Focus</div>
                    <div className="text-sm text-gray-400">User-Centered Design</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Performance</div>
                    <div className="text-sm text-gray-400">Optimized Solutions</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <Users className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Collaboration</div>
                    <div className="text-sm text-gray-400">Team Leadership</div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-green-500/25 text-white"
                aria-label="Download Resume"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-3xl overflow-hidden bg-gray-800">
                  <img
                    src="./hello.png"
                    alt="Nagaraju Gande"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h4 className="text-2xl font-semibold text-white mb-2">Ready to Collaborate</h4>
              <p className="text-gray-400 text-base max-w-xs mx-auto">
                Let's build something amazing together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Internship Experience
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Building expertise through hands-on experience at leading tech companies
          </p>

          <div className="space-y-8">
            {internshipExperience.map((exp) => (
              <div
                key={exp.id}
                className="group relative bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] transform backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {exp.logo}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-cyan-400 font-semibold">{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.location}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-sm text-gray-300 hover:bg-gray-600/50 hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                </div>
                <div className="relative w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Validated expertise through industry-recognized certifications and professional development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 transform backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                      {cert.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-400">{cert.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    Issued by {cert.issuer}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs text-gray-500">
                      Credential ID: {cert.credentialId}
                    </p>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-300"
                    >
                      <span>Verify Certification</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 hover:scale-[1.02] transform transition-all duration-500 cursor-pointer backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-300 group-hover:scale-110 transform"
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-sm text-gray-300 hover:bg-gray-600/50 hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your vision into reality? I'm always excited to discuss new opportunities,
            innovative projects, and creative collaborations. Let's build the future together.
          </p>

          {/* Contact Form */}
          <div className="mb-12">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-vertical"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center justify-center space-x-2 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again or use the direct email link below.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:gandenagaraju04@gmail.com"
              className="group flex flex-col items-center space-y-3 p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 transform"
            >
              <Mail className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold text-white">Email</div>
                <div className="text-gray-400 text-sm">gandenagaraju04@gmail.com</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/gande-nagaraju-768978287/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-3 p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 transform"
            >
              <Linkedin className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold text-white">LinkedIn</div>
                <div className="text-gray-400 text-sm">Let's connect</div>
              </div>
            </a>

            <a
              href="https://github.com/Nagaraju-techi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-3 p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 transform"
            >
              <Github className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold text-white">GitHub</div>
                <div className="text-gray-400 text-sm">View my code</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Nagaraju Gande. Designed and built with passion, powered by innovation.
          </p>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;