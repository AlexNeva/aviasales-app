import React from 'react';
import MainSection from './components/MainSection/MainSection';
import SideFilter from './components/SideFilter/SideFilter';

function App() {
  return (
    <div className="App container">
      <SideFilter />
      <MainSection />
    </div>
  );
}

export default App;
