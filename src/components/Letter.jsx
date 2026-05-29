import { useEffect, useState, useRef } from 'react';
import { FadeInSection, useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Letter.css';

export default function Letter() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [typedText, setTypedText] = useState('');
  
  const fullText = `Ainain,

You saved those messages. You called me The Chosen One. You said your loving was your responsibility and my right. You trusted me — blindly, fully, beautifully.

I promise you that every word I wrote at 2AM, I meant then and I mean even more today. I promise to work relentlessly to build a future where we are together, where I can finally ask your father for your hand in marriage.

I promise that you are and will always be my jaana, the one I bow down to my Rabb for. I promise to protect you, cherish you, and hold you through thick and thin, just as I envisioned.

I promise to become the man who is entirely worthy of your pure, unwavering love. I will be back for you. For us.

It's not a goodbye. It was never a goodbye. It is a promise of forever.

— Kamran`;

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 30); // Typing speed
      
      return () => clearInterval(typingInterval);
    }
  }, [isVisible, fullText]);

  return (
    <section className="letter-section" ref={ref}>
      <FadeInSection className="letter-container">
        <h2 className="letter-title">A letter, today.</h2>
        
        <div className="letter-paper">
          <p className="typewriter-text">{typedText}</p>
        </div>
        
        <p className="letter-footer">Written with love. Meant for always.</p>
      </FadeInSection>
    </section>
  );
}
