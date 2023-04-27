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

            
            

 const arrnew=[];
const  NewMoveis=()=> {
    
const[NewOriginal_title,setNewOriginal_title] =useState("");
const[dataNewMovies,setDataNewMovies] =useState("");
const[Newvote_average,setNewvote_average] =useState("");
const[Newrelease_date,setrNewelease_date] =useState("");
const [show,setNewShow]=useState(false)

const navigate=useNavigate

const getNewMoveisByOriginal_language =async ()=>{
    const result = await axios.get("https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a");
    const datayear=""+ new Date().getFullYear();
   for (let index = 0; index < result.data.results.length; index++) {
    const str =""+ result.data.results[index].release_date;
    const arrstr=str.split("-");
   switch(arrstr[0]){
    case datayear:
        arrnew[index]=result.data.results[index];
   }
   arrstr.pop()
   arrstr.pop()
   arrstr.pop()
}
   console.log(arrnew.length)
    setNewShow(true);

       
}
  



useEffect(() => {
    getNewMoveisByOriginal_language()

  }, []);
  
  

    return (
        <div class="new_Movies"  >
            <>
            <h2>New Moveis</h2>
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
               {show&&arrnew.map(NewMoveis=>{
        return(
                <>
                
                <SwiperSlide>       
                    <div >
                    <img src={`https://image.tmdb.org/t/p/w300${NewMoveis.poster_path}`} class="rounded m-2" alt="any" />
                    <h5 >{NewMoveis.original_title}</h5>
                    <h5>{NewMoveis.release_date}</h5>
                    <p>{NewMoveis.vote_average}</p>
                    </div>
                     </SwiperSlide>
                </> 
 )

})   
}   




            </Swiper>
            </>       
        </div>
    )
}

export default NewMoveis;
