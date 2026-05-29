import { Heart } from 'lucide-react';
import { FadeInSection } from '../hooks/useIntersectionObserver';
import './Footer.css';

export default function Footer() {
  return (
    <section className="footer-section">
      <FadeInSection className="footer-content">
        <h2 className="footer-title">My Ainain.</h2>
        <p className="footer-subtitle">Always here. Always believing. Never leaving.</p>
        
        <div className="heart-container">
          <Heart fill="var(--blush-pink-dark)" color="var(--blush-pink-dark)" size={32} className="pulsing-heart" />
        </div>
        
        <p className="footer-note">Made with everything I have. For the one who has everything I am.</p>
      </FadeInSection>
    </section>
  );
}
