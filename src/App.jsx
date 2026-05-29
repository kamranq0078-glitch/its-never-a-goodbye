import { useState, useRef } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import Mirror from './components/Mirror';
import PromiseCards from './components/PromiseCards';
import HerWords from './components/HerWords';
import Timeline from './components/Timeline';
import Letter from './components/Letter';
import Footer from './components/Footer';
import { Play } from 'lucide-react';
import './App.css';

function App() {
  const [isReading, setIsReading] = useState(false);
  const sectionsRef = useRef([]);

  const handleReadToHer = () => {
    if (isReading) return;
    setIsReading(true);

    let currentSection = 0;
    const totalSections = sectionsRef.current.length;

    const scrollNext = () => {
      if (currentSection < totalSections) {
        sectionsRef.current[currentSection].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        currentSection++;
        
        // Dynamic wait time based on section index (longer for letter)
        let waitTime = 5000;
        if (currentSection === 6) waitTime = 12000; // Letter takes longer to read/type
        if (currentSection === 7) waitTime = 4000; // Footer
        
        setTimeout(scrollNext, waitTime);
      } else {
        setIsReading(false);
      }
    };

    scrollNext();
  };

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="app-container">
      <ParticlesBackground />
      
      {!isReading && (
        <button className="read-to-her-btn" onClick={handleReadToHer}>
          <Play size={16} />
          Read to her
        </button>
      )}

      <div ref={addToRefs}><Hero /></div>
      <div ref={addToRefs}><Mirror /></div>
      <div ref={addToRefs}><PromiseCards /></div>
      <div ref={addToRefs}><HerWords /></div>
      <div ref={addToRefs}><Timeline /></div>
      <div ref={addToRefs}><Letter /></div>
      <div ref={addToRefs}><Footer /></div>
    </div>
  );
}

export default App;
