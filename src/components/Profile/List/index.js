import React, { useState , useEffect} from 'react';
import Favorites from './FavoriteGames';
import Posts from './Post'
import { FavoriteIcon, FeedIcon, ListContainer } from './style';

const List = ({user, fetchData}) => {

    const [button, setButton] = useState({ feed: true, favorite: false })
    const handleValues = ({ target: { name } }) => {
        const newValues = {
            feed: !button.feed,
            favorite: !button.favorite
        }
        if (name === 'one') {
            if (button.feed) {
                return
            }
            setButton({ ...button, ...newValues })
        }
        if (name === 'two') {
            if (button.favorite) {
                return
            }
            setButton({ ...button, ...newValues })
        }
    }


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>

            <ListContainer>
                {
                    button && button.feed ?
                        <button name='one' style={{ borderBottom: '1px solid red' }} onClick={handleValues}><FeedIcon /> Posts</button> :
                        <button name='one' onClick={handleValues}><FeedIcon /> Posts</button>
                }
                {
                    button && button.favorite ?
                        <button name='two' style={{ borderBottom: '1px solid red' }} onClick={handleValues}><FavoriteIcon /> Favorite Games </button> :
                        <button name='two' onClick={handleValues}><FavoriteIcon /> Favorite Games </button>
                }
            </ListContainer>
            {
                button && button.feed?
                user && user.posts && user.posts.map((e, i)=> <Posts key={i} post={e} user={user} fetchData={fetchData}/>)
                :
                null
            }
            {
                button && button.favorite ?
                user && user.favoriteGames && user.favoriteGames.map((e,i)=> <Favorites key={i} game={e} fetchData = {fetchData}/>)  
                :
                null
            }
        </>
    )
}
export default List