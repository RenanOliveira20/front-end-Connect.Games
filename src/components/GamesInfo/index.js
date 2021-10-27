import React, { useState, useEffect } from "react";

import api from '../../api/api';

import NavBar from '../Navbar/Navbar'

import { Article, Banner, PageComponent, ImageRight, Info, InfoPlat , InputComment, LobbyComment, Section, Title, TitleSection, ImageLeft, PInfo} from "./styles";

const GameInfo = (props) => {

    const [games, setGames] = useState([])

    useEffect(() => {
        async function  fetchData() {
            
            const gameDb = await api.get_Id(props.match.params._id)
                    
            const game = await api.getOneGame(gameDb.id)

            setGames({...game})
        }
        
        fetchData()
          
    }, [games])


    return (
    <>
        <NavBar/>
        <PageComponent>
                <ImageRight/>

            <Article>
                
                <Section>

                    <Banner src={games.background_image} />
                    <Title>{games.name}</Title>

                </Section>            

                <Section>

                    <TitleSection>Description:</TitleSection>
                    <Info>{games.description}</Info>

                </Section>

                <Section>

                    <TitleSection>Plataforms:</TitleSection>

                    <InfoPlat>
                        {games.platforms && games.platforms.map( e => 
                            e.platform && e.platform.name && <PInfo>{e.platform.name}</PInfo>
                        )}                   
                    </InfoPlat>

                </Section>

                <Section>

                    <TitleSection>Comments:</TitleSection>
                    <InputComment></InputComment>
                    <LobbyComment></LobbyComment>

                </Section>

            </Article>

            <ImageLeft />

        </PageComponent>
    </>
    )
}


export default GameInfo;

