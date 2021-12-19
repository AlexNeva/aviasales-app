import React from 'react';
import CardsSection from '../CardsSection/CardsSection';
import TopFilter from '../TopFilter/TopFilter';

function MainSection() {
  return (
    <div className='main'>
      <TopFilter />
      <CardsSection />

    </div>
  );
}

export default MainSection;