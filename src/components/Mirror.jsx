import { FadeInSection } from '../hooks/useIntersectionObserver';
import './Mirror.css';

export default function Mirror() {
  return (
    <section className="mirror-section">
      <FadeInSection className="mirror-content">
        <h2 className="section-title">The picture that started it all.</h2>
        
        <div className="mirror-frame has-image">
          <img src="/mirror-image.jpg" alt="The mirror picture" className="mirror-photo" />
          <div className="mirror-glass-overlay">
            <p className="mirror-quote">
              "This picture will be a reminder of what I am working towards."
            </p>
          </div>
        </div>

        <p className="mirror-caption">
          He took that picture knowing what it meant. He kept it. He is still keeping it.
        </p>
      </FadeInSection>
    </section>
  );
}
