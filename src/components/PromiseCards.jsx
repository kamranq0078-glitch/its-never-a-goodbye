import { Heart, Star, Shield, MoonStar, Infinity } from 'lucide-react';
import { FadeInSection } from '../hooks/useIntersectionObserver';
import './PromiseCards.css';

export default function PromiseCards() {
  const cards = [
    {
      title: "The Promise",
      color: "var(--blush-pink)",
      icon: <Heart size={24} />,
      quote: "You will DEFINITELY hear from me after 1.5 years when I ask your father for your hand in marriage. Always in nimaaz, always bowing down to my Rabb."
    },
    {
      title: "The Vision",
      color: "var(--soft-lavender)",
      icon: <Star size={24} />,
      quote: "My Ainain in my arms through thick and thin. My Ainain junior who will play in our arms — jiske pair mai apni hathaliyon pai rakh ke usko paaluga."
    },
    {
      title: "The Commitment",
      color: "var(--sage-green)",
      icon: <Shield size={24} />,
      quote: "I will legit sit beside you, your head on my chest, while you forget all the worldly worries. I love you more than life itself."
    },
    {
      title: "The Faith",
      color: "#FDEBCC", /* warm amber */
      icon: <MoonStar size={24} />,
      quote: "I leave you in the care of my Rabb, my jaana, my baby, my zuvv. I'll be back for you. For us."
    }
  ];

  return (
    <section className="promises-section">
      <FadeInSection className="section-header">
        <h2 className="section-title">What he said at 2AM.</h2>
        <p className="section-subtitle">Words written when the heart was too full to sleep.</p>
      </FadeInSection>

      <div className="masonry-grid">
        {cards.map((card, index) => (
          <FadeInSection key={index} className="card-wrapper">
            <div className="promise-card" style={{ backgroundColor: card.color }}>
              <div className="card-header">
                <span className="card-icon">{card.icon}</span>
                <h3 className="card-title">{card.title}</h3>
              </div>
              <p className="card-quote">"{card.quote}"</p>
            </div>
          </FadeInSection>
        ))}
        
        <FadeInSection className="card-wrapper full-width">
          <div className="promise-card featured-card">
            <div className="card-header centered">
              <span className="card-icon"><Infinity size={32} /></span>
              <h3 className="card-title">The Goodbye That Wasn't</h3>
            </div>
            <p className="card-quote featured-quote">
              "It's never a GOODBYE. It's SEE YOU SOON, my love. Iloveyoumorethanlifeitself."
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
