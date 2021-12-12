import React from 'react';
import CardsSection from '../CardsSection/CardsSection';
import MoreBtn from '../MoreBtn/MoreBtn';
import TopFilter from '../TopFilter/TopFilter';

function MainSection() {
  return (
    <div className='main'>
      <TopFilter />
      <CardsSection />
      <MoreBtn />
    </div>
  );
}

export default MainSection;