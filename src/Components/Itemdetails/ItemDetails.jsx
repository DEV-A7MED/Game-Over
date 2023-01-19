/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function ItemDetails() {
  let {id} = useParams();

  const [itemDetails, setItemDetails] = useState([]);

  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
    params: { id: id },
    headers: {
      "X-RapidAPI-Key": "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  async function getDetails() {
    let { data } = await axios.request(options);

  
    setItemDetails(data);
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
    {itemDetails.length !== 0 ?<div className="row">
        
        <div className="col-md-4">
          <img
            src={itemDetails.thumbnail}
            className="w-100 mb-4 mt-3 rounded-2 "
            alt=""
          />
          <div className="links d-flex justify-content-center ">
            <span className="free-slogan p-3 rounded-3">FREE</span>
            <a
              className="btn btn-info py-3 px-4 ms-2 text-white fw-bold "
              href={itemDetails.freetogame_profile_url}
              target="_blank"
              rel="noreferrer"
            >
              PLAY NOW <i className="fas fa-sign-out-alt" />{" "}
            </a>
          </div>
        </div>
        <div className="col-md-8 my-3">
          <h2 className="mb-5">{itemDetails.title}</h2>
          <h4>About {itemDetails.title}</h4>
          <p>{itemDetails.description}</p>
          
          {itemDetails.minimum_system_requirements ? (
            <>
            <h4>Minimum System Requirements</h4>
              <ul className="list-unstyled">
                <li className="my-3">
                  <strong>graphics : </strong>
                  {itemDetails.minimum_system_requirements.graphics}
                </li>
                <li className="my-3">
                  <strong>memory : </strong>
                  {itemDetails.minimum_system_requirements.memory}
                </li>
                <li className="my-3">
                  <strong>os : </strong>
                  {itemDetails.minimum_system_requirements.os}
                </li>
                <li className="my-3">
                  <strong>processor : </strong>
                  {itemDetails.minimum_system_requirements.processor}
                </li>
                <li className="my-3">
                  <strong>storage : </strong>
                  {itemDetails.minimum_system_requirements.storage}
                </li>
              </ul>
            </>
          ) : null}
          <div
            id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"
          >
            <div className="carousel-inner">
            {itemDetails.screenshots?itemDetails.screenshots.map((img,index)=><div key={index} className="carousel-item active my-4">
            <h4>{itemDetails.title} ScreenShoots</h4>
            <>
            <img src={img.image} className="d-block w-100" alt="..." />
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </>
                
              </div>):null}
              
              
            </div>
          </div>

          <h4>Additional Information</h4>
          <div className="row">
            <div className="col-md-6">
              <span>Title</span>
              <p>{itemDetails.title}</p>
              <span>Publisher</span>
              <p>{itemDetails.publisher}</p>
              <span>Genre</span>
              <p>{itemDetails.genre}</p>
            </div>
            <div className="col-md-6">
              <span>Developer</span>
              <p>{itemDetails.developer}</p>
              <span>Release Date</span>
              <p>{itemDetails.release_date}</p>
              <span>Platform</span>
              {itemDetails.platform === "Web Browser" ? (
                <p>
                  <i className="fa-regular fa-window-maximize me-2 fs-4"></i>
                  {itemDetails.platform}
                </p>
              ) : (
                <p>
                  <i className="fa-brands fa-windows me-2 fs-5 me-2 "></i>
                  {itemDetails.platform}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>:<Loading/>}
    </>
  );
}
