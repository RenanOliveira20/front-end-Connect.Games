import React, { useState, useEffect } from "react";
// import { useParams } from 'react-roouter-dom';

import api from '../../api/api';

import { Article, Banner, PageComponent, ImageRight, Info, InputComment, LobbyComment, Section, Title, TitleSection, ImageLeft} from "./styles";

const GameInfo = () => {

    const [games, setGames] = useState([])


    useEffect(() => {
        async function  fetchData() {
            // const {id} = useParams()
            // console.log(id)
            const game = await api.getOneGame('3498')
            setGames({...game})
        }
        
        fetchData()
          
    }, [games])


    return (

    <PageComponent>

            <ImageRight/>

        <Article>
                {/* {console.log(games)} */}
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

                <Info>
                    {games.platforms && games.platforms.map( e => 
                        e.platform && e.platform.name && <p>{e.platform.name}</p>
                    )}                   
                </Info>


            </Section>

            <Section>

                <TitleSection>Comments:</TitleSection>
                <InputComment></InputComment>
                <LobbyComment></LobbyComment>

            </Section>

        </Article>

        <ImageLeft />

    </PageComponent>

    )


}


export default GameInfo




// 3498