import Feature from "./Feature/Feature";
import { FeaturesPropTypes } from "./propTypes";

export interface FeatureType {
  title: string,
  text: string,
  image: {
    src: string,
    alt: string
  }
}

interface Props {
  features: FeatureType[]
}

/**
 * Show features for Home page
 */

const Features = ({ features }: Props) => {
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