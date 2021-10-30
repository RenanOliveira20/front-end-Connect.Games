import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";

import GameCard from './GamesCard';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer';
import SearchBar from "../Users/SearchBar";

import { Lobby, List } from "./styles";
import { ImageLeft, ImageRight, PageComponent, Section, Article } from "../GamesInfo/styles";


const GameLobby = () => {

    const [games, setGames] = useState([])
    const [search, setSearch] = useState([])

    const gamesDb = async () => {
        const result = await api.getAllGames()
        setGames([...result])
    }

    useEffect(() => {
        gamesDb()
    }, [])

    const userFilter = async (inputSearch) => {
        try {

            if (inputSearch === '') {
                gamesDb();
            } else {
                const filtered = games.filter((user) => {
                    return user.name.toLowerCase().includes(inputSearch.toLowerCase())
                })
                setGames([...filtered])
            }
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <NavBar/>
            <PageComponent>
                
                <ImageRight/>

                <Article>
                    
                    <Section>
                        <SearchBar userFilter={userFilter}/>
                
                    </Section>
                    <List>

                        {games.map(game => 
                            <Link to={`/games/${game._id}`}>
                                <GameCard {...game}/>
                            </Link>
                        )}


                    </List>
                </Article>

                <ImageLeft/>

            </PageComponent>
            
            <Footer />

        </>
    )

}

export default GameLobby;


