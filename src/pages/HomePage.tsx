import React from 'react';
import { Helmet } from 'react-helmet';
import HeroCarousel from '../components/home/HeroCarousel';
import AboutSection from '../components/home/AboutSection';
import FeaturedCards from '../components/home/FeaturedCards';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DVM UTTHAN SANSTHAN - Empowering Minds, Building Futures</title>
        <meta name="description" content="Dvm Utthan Sansthan is a premier educational institution committed to providing quality education and fostering holistic development." />
      </Helmet>

      <HeroCarousel />
      <AboutSection />
      <FeaturedCards />
      <Stats />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;