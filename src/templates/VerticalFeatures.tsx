import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Build your knowledge about Smart Cities"
    description="Click on 'Learn about Smart City', to get more knowledge before your try the quiz challnges. Build up points and see how you perform compared with other players and cities."
  >
   {/*  <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    /> */}
    <VerticalFeatureRow
      title="Sign in to see your scores"
      description="Learn bout sustainable environment and Smart Cities, and share your knowledge and bring your city to the top score list."
      image="/assets/images/feature3.svg"
      imageAlt="Citizens quiz scores"
    />
  </Section>
);

export { VerticalFeatures };
