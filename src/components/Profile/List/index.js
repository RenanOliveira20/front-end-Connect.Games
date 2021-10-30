import React, { useState , useEffect} from 'react';
import api from '../../../api/api';
import Posts from './Post';

import { FavoriteIcon, FeedIcon, ListContainer } from './style';

const List = ({user}, props) => {

    const [profile, setProfile] = useState({});
    
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
        <>

            <ListContainer>
                {
                    button && button.feed  ?
                        <button name='one' style={{ borderBottom: '1px solid red' }} onClick={handleValues}><FeedIcon /> Posts</button> :
                        <button name='one' onClick={handleValues}><FeedIcon /> Posts</button>
                }
                {
                    button && button.favorite ?
                        <button name='two' style={{ borderBottom: '1px solid red' }} onClick={handleValues}><FavoriteIcon /> Favorite Games </button> :
                        <button name='two' onClick={handleValues}><FavoriteIcon /> Favorite Games </button>
                }
            </ListContainer>

                

        </>
    )
}
export default List