import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    color: #734338;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const StorySection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

const Content = styled.div`
  h2 {
    color: #734338;
    margin-bottom: 1rem;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const Values = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled.div`
  background-color: #fff9f5;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  
  h3 {
    color: #734338;
    margin-bottom: 1rem;
  }
`;

function About() {
  return (
    <AboutContainer>
      <Header>
        <h1>Our Story</h1>
      </Header>

      <StorySection>
        <Image src="https://images.unsplash.com/photo-1556217477-d325251ece38?auto=format&fit=crop&w=800" alt="Bakery interior" />
        <Content>
          <h2>A Family Tradition Since 1995</h2>
          <p>
            Sweet Delights began as a small family bakery in the heart of the city. Founded by Maria and John Smith, 
            our bakery has been serving the community with fresh, handcrafted breads and pastries for over 25 years.
          </p>
          <p>
            What started as a modest shop with just three types of bread has grown into a beloved local institution, 
            known for our wide variety of artisanal breads, delicate pastries, and stunning celebration cakes.
          </p>
          <p>
            Today, the second generation of our family continues the tradition of baking with the same passion, 
            dedication, and commitment to quality that has been our hallmark since day one.
          </p>
        </Content>
      </StorySection>

      <Values>
        <ValueCard>
          <h3>Quality Ingredients</h3>
          <p>We source the finest ingredients from local suppliers to ensure the best taste and quality in every bite.</p>
        </ValueCard>
        <ValueCard>
          <h3>Traditional Methods</h3>
          <p>Our recipes combine time-honored baking techniques with modern innovation to create perfect results.</p>
        </ValueCard>
        <ValueCard>
          <h3>Community First</h3>
          <p>We're proud to be part of our local community, supporting events and giving back whenever we can.</p>
        </ValueCard>
      </Values>
    </AboutContainer>
  );
}

export default About;
