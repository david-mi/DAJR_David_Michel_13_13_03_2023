import React from 'react';
import Feature from "./Feature/Feature";

const Features = ({ features }) => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature) => {
        return <Feature key={feature.title} {...feature} />;
      })}
    </section>
  );
};

export default Features;