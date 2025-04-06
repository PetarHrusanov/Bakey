import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const MenuHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    color: #734338;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const MenuSection = styled.section`
  margin-bottom: 3rem;
  
  h2 {
    color: #734338;
    border-bottom: 2px solid #e6a4a4;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const MenuItem = styled.div`
  background-color: #fff9f5;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  h3 {
    color: #734338;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    margin-bottom: 0.5rem;
  }
  
  .price {
    color: #e6a4a4;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

function Menu() {
  const menuItems = {
    breads: [
      { name: 'Sourdough Bread', description: 'Traditional fermented bread with crispy crust', price: '$6.50' },
      { name: 'Whole Wheat', description: 'Nutritious whole grain bread', price: '$5.50' },
      { name: 'Baguette', description: 'Classic French bread', price: '$4.00' },
    ],
    pastries: [
      { name: 'Croissant', description: 'Buttery, flaky French pastry', price: '$3.50' },
      { name: 'Danish', description: 'Sweet pastry with fruit filling', price: '$4.00' },
      { name: 'Cinnamon Roll', description: 'Soft roll with cinnamon-sugar filling', price: '$4.50' },
    ],
    cakes: [
      { name: 'Chocolate Cake', description: 'Rich chocolate layers with ganache', price: '$28.00' },
      { name: 'Carrot Cake', description: 'Spiced cake with cream cheese frosting', price: '$26.00' },
      { name: 'Red Velvet', description: 'Classic red velvet with cream cheese frosting', price: '$30.00' },
    ],
  };

  return (
    <MenuContainer>
      <MenuHeader>
        <h1>Our Menu</h1>
        <p>All items are baked fresh daily. Pre-orders welcome for special occasions.</p>
      </MenuHeader>

      <MenuSection>
        <h2>Artisan Breads</h2>
        <MenuGrid>
          {menuItems.breads.map((item, index) => (
            <MenuItem key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </MenuItem>
          ))}
        </MenuGrid>
      </MenuSection>

      <MenuSection>
        <h2>Fresh Pastries</h2>
        <MenuGrid>
          {menuItems.pastries.map((item, index) => (
            <MenuItem key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </MenuItem>
          ))}
        </MenuGrid>
      </MenuSection>

      <MenuSection>
        <h2>Celebration Cakes</h2>
        <MenuGrid>
          {menuItems.cakes.map((item, index) => (
            <MenuItem key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </MenuItem>
          ))}
        </MenuGrid>
      </MenuSection>
    </MenuContainer>
  );
}

export default Menu;
