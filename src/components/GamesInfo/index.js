import React, { useState, useEffect } from "react";

import api from '../../api/api';

import NavBar from '../Navbar/Navbar';
import Footer from '../Footer';

import CommentsGames from './CardComment/ReviewCommentsGames';
import CardComment from './CardComment/index';

import { Article, Banner, PageComponent, ImageRight, Info, InfoPlat, Section, Title, TitleSection, ImageLeft, PInfo, ButtonFavorite, ButtonUnFavorite, TitleContainer } from "./styles";



const GameInfo = (props) => {

    const [games, setGames] = useState([])
    const [comments, setComments] = useState([])


    const userId = localStorage.getItem('userId')


    const gameDb = async () => {
        const gameDb = await api.get_Id(props.match.params._id)
        setComments({ ...gameDb })

        const game = await api.getOneGame(gameDb.id)
        setGames({ ...game })

    }

    const updateGame = async () => {
        const gameDb = await api.get_Id(props.match.params._id)
        setComments({ ...gameDb })

    }

    useEffect(() => {
        gameDb()
        updateGame()
    }, [])

    const reactionFavorite = async () => {
        try {
            if (comments.userfavorites.indexOf(userId) !== -1) {
                await api.putGameUserFavorite(comments._id, { favorite: false });
                await api.putUserGameFavorite(comments._id, { favorite: false });
            } else {
                await api.putGameUserFavorite(comments._id, { favorite: true });
                await api.putUserGameFavorite(comments._id, { favorite: true });
            }
        } catch (error) {
            console.log(error)
        } finally {
            updateGame()
        }
    }

    return (
        <>
            {games.id ?
                <>
                    <NavBar />
                    <PageComponent>

                        <ImageRight />

                        <Article>

                            <Section>

                                <Banner src={games.background_image} />
                                <TitleContainer>
                                    <Title>{games.name}</Title>

                                    {comments.userfavorites.indexOf(userId) !== -1 ?
                                        <ButtonFavorite onClick={reactionFavorite} />
                                        : <ButtonUnFavorite onClick={reactionFavorite} />
                                    }
                                </TitleContainer>
                                <h4>Rating: {games.rating}</h4>

                            </Section>

                            <Section>

                                <TitleSection>Description:</TitleSection>
                                <Info>{games.description}</Info>

                            </Section>

                            <Section>

                                <TitleSection>Plataforms:</TitleSection>

                                <InfoPlat>
                                    {games.platforms && games.platforms.map(e =>
                                        e.platform && e.platform.name && <PInfo key={e._id}>{e.platform.name}</PInfo>
                                    )}
                                </InfoPlat>

                            </Section>

                            <Section>

                                <TitleSection>Comments:</TitleSection>

                                <CommentsGames game={comments} idGame={comments._id} updateGame={updateGame} />

                                {comments.comments && comments.comments.map((e) => {
                                    return <CardComment key={e._id} data={e} updateGame={updateGame} game={comments} />
                                })}

                            </Section>

                        </Article>

                        <ImageLeft />

                    </PageComponent>

                    <Footer />

                </> : <h1> Loading... </h1>
            }
        </>
    )
}


export default GameInfo;

