import React , { useContext, useState, useEffect }from "react"
import Bootstrap from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import NewMoveis from "../NewMovie/newmovies";
import MostMoveis from "../MostMovies/mostmoevies";
import { Navigation, Pagination, Scrollbar, A11y ,Grid } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/grid";

import'./movies.css'


const  Movies=()=> {

const[Original_title,setOriginal_title] =useState("");
const[dataMovieas,setDataMovieas] =useState("");
const[vote_average,setvote_average] =useState("");
const[release_date,setrelease_date] =useState("");
const [show,setShow]=useState(false)

const navigate=useNavigate

const getMoveisByOriginal_language =async ()=>{
   
        await axios
        .get("https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a")
        .then((result) => {
            setDataMovieas(result.data.results)
            setShow(true)
            console.log(result.data.results);
        })
        .catch((err) => {
          throw err;
        });
    
  
  
}



useEffect(() => {
    getMoveisByOriginal_language()

  }, []);





  

    return (
        <div>
       
            <>

            <Swiper
             style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              breakpoints ={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  740: {
                    slidesPerView: 2,
                    spaceBetween: 30
                  },
                  // when window width is >= 640px
                  940: {
                    slidesPerView: 3,
                    spaceBetween: 40
                  },
                  1300: {
                    slidesPerView: 4,
                    spaceBetween: 40
                  }
                  
               
            }}
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={100}
                navigation
                pagination={{ clickableClass: true }}
                scrollbar={{ dragSize: true }}
                
            >
               {show&&dataMovieas.map(movie=>{
                    return(
                        <SwiperSlide className="allmovies">       
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} class="rounded m-2" alt="any" />
                            <h5>{movie.original_title}</h5>
                            <h5>{movie.release_date}</h5>
                            <p>{movie.vote_average}</p>
                        </SwiperSlide>
                    )
                 }) 
                }   
            </Swiper>
        </>
       
        
        </div>
    )
}
export default Movies;
