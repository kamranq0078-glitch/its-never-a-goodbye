import { FadeInSection } from '../hooks/useIntersectionObserver';
import './HerWords.css';

export default function HerWords() {
  const cards = [
    {
      title: "Her Trust",
      color: "var(--soft-lavender)",
      quote: "I'll wait for you to make this dream a reality. I'll remain pure for you. He will reunite us through His mercy and bless us with a halal relation."
    },
    {
      title: "Her Dream",
      color: "var(--sage-green)",
      quote: "From today my loving is my responsibility and your right. From today my dreams are yours to fulfill. Trusting your judgement blindly is my responsibility."
    },
    {
      title: "Her Love",
      color: "var(--blush-pink)",
      quote: "I'll love you silently for these two years. Trust me. This will be our new beginning of something so beautiful and so deserved."
    }
  ];

  return (
    <section className="her-words-section">
      <FadeInSection className="section-header">
        <h2 className="section-title">And she said...</h2>
        <p className="section-subtitle">Because she trusted him with everything.</p>
      </FadeInSection>

      <div className="her-words-grid">
        {cards.map((card, index) => (
          <FadeInSection key={index} className="her-card-wrapper">
            <div className="her-card" style={{ backgroundColor: card.color }}>
              <h3 className="her-card-title">{card.title}</h3>
              <p className="her-card-quote">"{card.quote}"</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
