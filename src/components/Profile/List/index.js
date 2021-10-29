import React, { useState } from 'react';

import Posts from './Post';

import { FavoriteIcon, FeedIcon, ListContainer, ListPage } from './style';



const List = ({user}) => {
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

    return (
        <ListPage>
            <ListContainer>
                {
                    button.feed ?
                        <button name='one' style={{ borderBottom: '1px solid red' }} onClick={handleValues}><FeedIcon /> Posts</button> :
                        <button name='one' onClick={handleValues}><FeedIcon /> Posts</button>
                }
                {
                    button.favorite ?
                        <button name='two' style={{ borderBottom: '1px solid red' }} onClick={handleValues}><FavoriteIcon /> Favorite Games </button> :
                        <button name='two' onClick={handleValues}><FavoriteIcon /> Favorite Games </button>
                }
            </ListContainer>
            {
                button.feed ?
                    user && user.posts.map((e, i)=>{
                        return <Posts key={i} post = {e} user = {user}/>
                    })
                    :
                    null
            }
        </ListPage>
    )
}
export default List