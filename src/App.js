/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';


import MainSection from './components/MainSection/MainSection';
import SideFilter from './components/SideFilter/SideFilter';




function App() {

  // const ticketsService = new TicketsService()

  // async function getTickets() {
  //   const res = await ticketsService.getTickets()
  //   console.log(res.tickets);

  // }



  // const ticketsService = new TicketsService()


  // const getTickets = () => {
  //   ticketsService.getTickets()
  //     .then(data => console.log(data))
  //     .catch((err) => err)
  // }

  // useEffect(() => {
  //   getTickets()
  // }, [])


  return (
    <div className="App container">

      <SideFilter />
      <MainSection />
    </div>
  );
}

export default App;
