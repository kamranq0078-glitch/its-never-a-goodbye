import { ChevronDown } from 'lucide-react';
import { FadeInSection } from '../hooks/useIntersectionObserver';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <FadeInSection className="hero-content">
        <p className="eyebrow">for ainain, from kamran</p>
        <h1 className="hero-title">It's Never A Goodbye.</h1>
        <h2 className="hero-subtitle">It's see you soon, my love.</h2>
        <p className="hero-footnote">2years BE HERE — a promise pinned forever.</p>
      </FadeInSection>
      
      <div className="scroll-indicator">
        <ChevronDown size={32} className="pulse-arrow" />
      </div>
    </section>
  );
}
