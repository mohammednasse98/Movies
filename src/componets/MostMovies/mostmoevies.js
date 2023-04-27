import React , { useContext, useState, useEffect }from "react"
import Bootstrap from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";



import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

            
            

 const arr=[];
const  MostMoveis=()=> {
    
const[MostOriginal_title,setMostOriginal_title] =useState("");
const[dataMostMovies,setDataMostMovies] =useState("");
const[Mostvote_average,setMostvote_average] =useState("");
const[Mostrelease_date,setMostrelease_date] =useState("");
const [show,setMostShow]=useState(false)

const navigate=useNavigate

const getMostMoveisByOriginal_language =async ()=>{
    const result = await axios.get("https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a");
    for (let index = 0; index < result.data.results.length; index++) {
        if(result.data.results[index].vote_average>=7.0){
            arr[index]= (result.data.results[index]);
        }
    } 
    setMostShow(true);    
}
  
useEffect(() => {
    getMostMoveisByOriginal_language()

  }, []);
  
return (
    <div className="swipermostmovie">
       <>
        <h2>Most Moveis</h2>
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
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
           
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
        {show&&arr.map(MostMoveis=>{
            return(
                <>
                    <SwiperSlide>       
                        <div >
                            <img src={`https://image.tmdb.org/t/p/w300${MostMoveis.poster_path}`} class="rounded m-2" alt="any" />
                            <h5 >{MostMoveis.original_title}</h5>
                            <h5>{MostMoveis.release_date}</h5>
                            <p>{MostMoveis.vote_average}</p>
                        </div>
                    </SwiperSlide>
                </> 
            )

        })}   
        </Swiper>
        </>       
    </div>
)
}

export default MostMoveis;
