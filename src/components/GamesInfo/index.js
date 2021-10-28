import React, { useState, useEffect } from "react";

import api from '../../api/api';

import NavBar from '../Navbar/Navbar'

import { Article, Banner, PageComponent, ImageRight, Info, InfoPlat , InputComment, LobbyComment, Section, Title, TitleSection, ImageLeft, PInfo} from "./styles";

const GameInfo = (props) => {

    const [games, setGames] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        async function  fetchData() {
            
            const gameDb = await api.get_Id(props.match.params._id)
                    
            const game = await api.getOneGame(gameDb.id)

            setGames({...game})
            setComments({...gameDb})
        }
        
        fetchData()
          
    }, [])


    return (
    <>
        {games.id?
        <>
            <NavBar/>
            <PageComponent>

                <ImageRight/>

                <Article>
                    
                    <Section>

                        <Banner src={games.background_image} />
                        <Title>{games.name}</Title>
                        <div>
                            <h2>{games.rating}</h2>
                        </div>

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
                        <InputComment
                            type='text'
                            placeholder='Post a comment here...'
                        ></InputComment>
                        <LobbyComment>{comments.comments}</LobbyComment>

                    </Section>

                </Article>

                <ImageLeft />

            </PageComponent>
        </> : <h1> Loading... </h1>
        }
    </>
    )
}


export default GameInfo;

