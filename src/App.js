import logo from './logo.svg';
import './App.css';
import Movies from './componets/AllMovies/movies';
import MostMovies from './componets/MostMovies/mostmoevies';
import NewMoveis from './componets/NewMovie/newmovies';
import { Route, Routes } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const newdate=Date();
function App() {
  return (
    <>
    <Movies></Movies> 
    <div className='new_movies'>
    <NewMoveis></NewMoveis> 
    </div>
    <div className='most_movies'>
    <MostMovies></MostMovies>
    </div>
    </>  
  );
}

export default App;
