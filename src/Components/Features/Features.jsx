import React from 'react';
import Feature from "./Feature/Feature";

const Features = ({ features }) => {
  return (
    <section class="features">
      <h2 class="sr-only">Features</h2>
      {features.map((feature) => <Feature {...feature} />)}
    </section>
  );
};

export default Features;