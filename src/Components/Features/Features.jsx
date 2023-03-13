import React from 'react';
import Feature from "./Feature/Feature";
import { FeaturesPropTypes } from "./propTypes";

/**
 * Show features for Home page
 * 
 * @param {object} props
 * @param {Array<object>} props.features  
 * @returns {JSX.Element}
 */

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

Features.propTypes = FeaturesPropTypes;

export default Features;