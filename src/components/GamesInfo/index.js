import React, { useState, useEffect } from "react";

import api from '../../api/api';

import NavBar from '../Navbar/Navbar';
import Footer from '../Footer';

import CommentsGames from './CardComment/ReviewCommentsGames';
import CardComment from './CardComment/index';

import { Article, Banner, PageComponent, ImageRight, Info, InfoPlat , InputComment, LobbyComment, Section, Title, TitleSection, ImageLeft, PInfo} from "./styles";

const GameInfo = (props) => {

    const [games, setGames] = useState([])
    const [comments, setComments] = useState([])
    const [users, setUser] = useState([])
    
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        async function  fetchData() {
            
            const gameDb = await api.get_Id(props.match.params._id)
            
            const game = await api.getOneGame(gameDb.id)

            setGames({...game})
            setComments({...gameDb})
        }
        
        fetchData()
          
    }, [comments])

    const reactionFavorite = async () => {
        try {
            if(comments.userfavorites.indexOf(userId) !== -1) {
                await api.putGameUserFavorite(comments._id, { favorite: false });
                await api.putUserGameFavorite(comments._id, {favorite: false});
            } else {
                await api.putGameUserFavorite(comments._id, { favorite: true });
                await api.putUserGameFavorite(comments._id, { favorite: true });
            }
        } catch (error) {
            console.log(error)
        }
    }

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
                            <button onClick={reactionFavorite}> Favorite Game </button>
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
                                e.platform && e.platform.name && <PInfo key={e._id}>{e.platform.name}</PInfo>
                            )}                   
                        </InfoPlat>

                    </Section>

                    <Section>

                        <TitleSection>Comments:</TitleSection>

                            {/* <CommentsGames game={comments} idGame={comments._id}/> */}
                              
                        <LobbyComment>
                                {/* {comments.comments && comments.comments.map((e) => {
                                    return <CardComment key={e._id} idGame={comments._id} Comment={e}/>
                                })} */}
                        </LobbyComment>

                    </Section>

                </Article>

                <ImageLeft />

            </PageComponent>

            <Footer/>

        </> : <h1> Loading... </h1>
        }
    </>
    )
}


export default GameInfo;

