import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Cities from '../components/Cities';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Cities />
    </div>
  );
}