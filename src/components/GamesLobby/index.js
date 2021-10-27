import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import api from '../../api/api';

import GameCard from './GamesCard';

import { Lobby , List} from "./styles";
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


        <PageComponent>
            
            <ImageRight/>

            <Lobby>
                <List>
                    {games.map(game => 
                        <GameCard {...game}/>
                        )}
                </List>
            </Lobby>

            <ImageLeft/>

        </PageComponent>


        </>
    )

}

export default GameLobby;