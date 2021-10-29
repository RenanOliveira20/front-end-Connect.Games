import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../api/api";

import GameCard from './GamesCard';
import NavBar from '../Navbar/Navbar'

import { Lobby, List } from "./styles";
import { ImageLeft, ImageRight, PageComponent } from "../GamesInfo/styles";


export const GameLobby = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        async function fetchData(){
        
        const game = await api.getAllGames()
            setGames([...game.data])
 
        }

        fetchData()
    }, [])


    return (
        <>

        <NavBar/>
        <PageComponent>
            
            <ImageRight/>

            <Lobby>
                    {/* <input
                        type='text'
                        placeholder='Search a game...'
                    /> */}
                <List>

                    {games.map(game => 
                        <Link to={`/games/${game._id}`}>
                            <GameCard {...game}/>
                        </Link>
                    )}

                </List>
            </Lobby>

            <ImageLeft/>

        </PageComponent>


        </>
    )

}

export default GameLobby;

