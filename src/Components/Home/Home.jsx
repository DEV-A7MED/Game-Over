import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading';
export default function Home() {
 
const [homeGames, setHomeGames] = useState([])


const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {'sort-by':'popularity'},
    headers: {
      'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  async function getHomeGames(){
    let {data}=await axios.request(options);
    // console.log(data);
  setHomeGames(data)
  }
  
  useEffect(() => {
    getHomeGames();
  }, [])
  return (
    <>
    <header className=' caption d-flex align-items-center justify-content-center'>
      <div className="text-center">
        <h1>Find & track the best <span className='h1 text-info'>free-to-play</span> games!</h1>
        <p>Track what you've played and search for what to play next! Plus get free premium loot!</p>
        <Link className='btn btn-btn-outline-secondary botton' to={'/all'}>Browse Games</Link>
      </div>
    </header>
    <div className="items-show my-5">
      <h2 className='my-4'><i className="fa-solid fa-robot fa-2x mx-2"></i>Personalized Recommendations</h2>
      <div className="row ">
      {homeGames.length>0? homeGames.slice(0,3).map((game,index)=><div key={index} className="col-lg-4">
      <Link className='text-decoration-none' to={`/itemdetails/${game.id}`}>
        <div className="card my-3" >
          <img src={game.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="caption d-flex justify-content-between ">
              <h3>{game.title}</h3>
              <span className='text-white p-2 bg-info h-25 rounded-2'>free</span>
            </div>
          </div>
        </div>
        </Link>
        </div>):<Loading/>}
        
      </div>
    </div>

    </>
  )
}
