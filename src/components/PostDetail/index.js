import React from 'react'
import Post from '../Profile/List/Post'
const PostDetail= (props) =>{
    return (
        <div style={{height:'100vh'}}>
            <Post post={props.match.params.id} user={props.match.params.user}/>
        </div>
    )
}
export default PostDetail