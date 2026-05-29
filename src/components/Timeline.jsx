import { FadeInSection } from '../hooks/useIntersectionObserver';
import './Timeline.css';

export default function Timeline() {
  const points = [
    {
      title: "He said he would be back.",
      description: "He made a promise today to return for her."
    },
    {
      title: "She trusts him.",
      description: "She placed her blind trust in his words and his vision."
    },
    {
      title: "He will.",
      description: "He will work relentlessly to keep his promise and ask for her hand."
    },
    {
      title: "She is still The Chosen One.",
      description: "That name in his phone has never changed."
    },
    {
      title: "The promise is forever.",
      description: "Every word written at 2AM is still meant. Still real. Still his."
    }
  ];

  return (
    <section className="timeline-section">
      <FadeInSection className="section-header">
        <h2 className="section-title">What is still true today.</h2>
      </FadeInSection>

      <div className="timeline-container">
        {points.map((point, index) => (
          <FadeInSection key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{point.title}</h3>
              <p className="timeline-desc">{point.description}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
