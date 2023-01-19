/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Mediaitems from '../Mediaitems/Mediaitems';
import Loading from '../Loading/Loading';

export default function Categories() {
let {game_type}=useParams();
const [gameCategory, setGameCategory] = useState([])
const [elementToShow, setElementToShow] = useState(20);
const slice= gameCategory.slice(0,elementToShow);
const loadMore=()=>{
  setElementToShow(elementToShow+elementToShow);
}

const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {'category':game_type},
    headers: {
      'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  async function getGameCategory(){
    let {data}=await axios.request(options);
    // console.log(data);
  setGameCategory(data)
  }
  
  useEffect(() => {
    getGameCategory();
  }, [game_type])
  

  return (
    <>
    
    <div className="row  gy-4">
    {gameCategory.length>0?slice.map((game,index)=><Mediaitems key={index} game={game}/>):<Loading/>}

  </div>
   
  <div className="butoon-cont text-center my-5">
  <button onClick={()=>loadMore()}  className='btn btn-btn-outline-secondary botton ' >More Games</button>
  </div>
    
    
    </>
  )
}
