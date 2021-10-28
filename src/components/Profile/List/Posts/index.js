import React, { useState, useEffect } from 'react'
import { NavDropdown, ButtonGroup, Dropdown } from 'react-bootstrap'
import api from '../../../../api/api'
import { ContainerPost, HeaderImage, PostHeader, PostOptions, PostOptionsItem, ProfileName } from './style'


 const Posts = ({post}) => 
 {
     const [myPost, setPost] = useState({})

     useEffect(()=>{
        const data = async () => {
            const myData = await api.getPost(post);
            if(myData){
                setPost({...myPost, ...myData})
            }
        };
        data()
     },[myPost])
    return (
        <ContainerPost>
            <PostHeader>
                <div>
                <HeaderImage src = {myPost && myPost.user && myPost.user.profilePicture} alt ='profile image'/>
                <ProfileName><b>{myPost && myPost.user && myPost.user.name}</b></ProfileName>
                </div>
                <PostOptions >
                    arrow
                    <PostOptionsItem></PostOptionsItem>
                    <PostOptionsItem></PostOptionsItem>
                </PostOptions>
            </PostHeader>
        </ContainerPost>
    )
}
export default Posts