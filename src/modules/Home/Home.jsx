import React from 'react'
import Banner from './Banner/Banner'
import Movies from './Movies/Movies'
import Showtime from './Showtimes/Showtime'


function Home() {
  return (
    <>
      <Banner />

      <Movies />

      <Showtime />
    </>
  );
}

export default Home