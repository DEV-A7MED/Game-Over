import React from 'react';
import { Link } from 'react-router-dom';

export default function Mediaitems({game}) {
  return (
    <>
    <div className="col-lg-3 col-md-6">
    <Link className='text-decoration-none' to={`/itemdetails/${game.id}`}>
      <div className="card" >
        <img src={game.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="caption d-flex justify-content-between ">
            <h5 >{game.title.substring(0,15)}</h5>
            <span className='text-white p-2 bg-info h-25 rounded-2'>free</span>
          </div>
          <p className="card-text text-truncate">{game.short_description}</p>
          <div className="icons d-flex justify-content-between align-items-center">
          <i className="fa-solid fa-square-plus"></i>
          <div className="details text-center">
            <span className='genre-details'>{game.genre}</span>
            {game.platform==='Web Browser'?<i className="fa-regular fa-window-maximize ms-2 fs-4"></i> :<i className="fa-brands fa-windows ms-2 fs-4  "></i>}
            
          </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
    
    
    
    </>
  )
}
