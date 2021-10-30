import React, { useState, useEffect } from "react";
import api from "../../../api/api"
import { Carousel } from "react-bootstrap";
import GamesCard from "../../GamesLobby/GamesCard";

const CarouselGame = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const game = await api.getAllGames();
      setGames([...game.data]);
    }

    fetchData();
  }, []);


  return (
    <Carousel variant= "dark">
    {games.map((game)=>{
      return (
        <Carousel.Item key={game._id}>
        <div className= "d-flex justify-content-center">
          <GamesCard {...game}/>
        </div>
        </Carousel.Item>
      )
    })}
    </Carousel>
  );
};

export default CarouselGame;
