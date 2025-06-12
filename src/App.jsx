import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import Experience from './components/Experience/Experience';
import Certification from './components/Certification/Certification';
import Social from './components/Social/Social';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const sections = [
      'home',
      'about',
      'education',
      'skills',
      'certification',
      'experience',
      'projects',
      'contact'
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 200;

      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', revealOnScroll);

    revealOnScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header activeSection={activeSection} isScrolled={isScrolled} />

      <main>
        <section id="home" className="section bg-white reveal">
          <Hero />
        </section>

        <section id="about" className="section bg-light reveal">
          <About />
        </section>

        <section id="education" className="section bg-white reveal">
          <Education />
        </section>

        <section id="skills" className="section bg-light reveal">
          <Skills />
        </section>

        <section id="certification" className="section bg-white reveal">
          <Certification />
        </section>

        <section id="experience" className="section bg-light reveal">
          <Experience />
        </section>

        <section id="projects" className="section bg-white reveal">
          <Projects />
        </section>

        <section id="contact" className="section bg-light reveal">
          <Contact />
        </section>

        <section id="social" className="section bg-light">
          <Social />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
