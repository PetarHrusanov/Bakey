import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = styled.section`
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200');
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled(Link)`
  background-color: #e6a4a4;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d88c8c;
  }
`;

const Features = styled.section`
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  background-color: #fff9f5;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #734338;
    margin: 1rem 0;
  }
`;

function Home() {
  return (
    <>
      <Hero>
        <HeroContent>
          <h1>Welcome to Sweet Delights</h1>
          <p>Freshly baked happiness, delivered with love</p>
          <CTAButton to="/menu">View Our Menu</CTAButton>
        </HeroContent>
      </Hero>

      <Features>
        <FeatureCard>
          <h3>Fresh Daily</h3>
          <p>All our products are baked fresh every morning using the finest ingredients</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Special Orders</h3>
          <p>Custom cakes and pastries for your special occasions</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Local Delivery</h3>
          <p>We deliver to your doorstep within the city limits</p>
        </FeatureCard>
      </Features>
    </>
  );
}

export default Home;
