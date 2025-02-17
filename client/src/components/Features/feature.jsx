import React from 'react';
import './feature.css';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// components/Features/Features.jsx
const Features = () => {
  const features = [
    {
      icon: '✒️',
      title: 'Who We Are',
      description: 'We are a dynamic platform designed to empower teams and individuals to manage their tasks and projects efficiently, fostering collaboration and productivity.'
    },
    {
      icon: '🛡️',
      title: 'What We Do',
      description: 'Through an intuitive interface and powerful features, we provide tools to streamline task organization, prioritize effectively, and track progress in real-time, ensuring seamless project execution.'
    },
    {
      icon: '⚙️',
      title: 'How We Do It',
      description: 'We help teams and individuals stay organized, meet deadlines, and achieve their goals by offering a comprehensive solution for task management and project collaboration.'
    }
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default Features;