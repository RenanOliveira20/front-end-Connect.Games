import React, { useEffect, useState } from 'react'
import api from '../../../../api/api'
import { Card, Content } from './styles'
import { IoMdShareAlt } from 'react-icons/io'
import { Link } from 'react-router-dom'
const Favorites = ({ game, fetchData }) => {
    const [myGame, setGame] = useState({})
    const getGame = async () => {
        const oneGame = await api.get_Id(game);
        setGame(oneGame)
    }
    useEffect(() => {
        getGame()
    }, [])
    return (
        <Card>
            <img src={myGame && myGame.background_image} style={{ width: '100%' }}>
            </img>
            <Content>
                <p>
                    {myGame && myGame.name}
                </p>
                <Link to={`/games/${game}`}>
                    <IoMdShareAlt />
                </Link>
            </Content>
        </Card>
    )
}

export default Favorites