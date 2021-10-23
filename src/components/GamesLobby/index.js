import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import api from '../../api/api';

import GameCard from './GamesCard';

import { Lobby , List} from "./styles";


const GameLobby = () => {

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

            <Lobby>

                <List>

                    {games.map(game => 
                        <GameCard {...game}/>
                    )}

                </List>
            </Lobby>
        </>
    )

}

export default GameLobby;