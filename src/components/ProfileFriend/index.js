import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import api from '../../api/api';
import Follow from '../Profile/Follow/';
import { FollowContainer, ProfileCard, Container, UserConfig, CountValues, ImageContainer } from './styles';
import Nav from '../Navbar/Navbar'
import { Button, Image } from 'react-bootstrap';
import List from '../Profile/List';
import { CgProfile } from "react-icons/cg";

const ProfileFriend = (props) => {
    const [profile, setProfile] = useState({});
    const [logedUser, setLogedUser] = useState({});
    const [followThis, setFollow] = useState()
    const user = async () => {
        const result = await api.otherUser(props.match.params.id)
        setProfile({ ...profile, ...result[0] })
    }
    let have = false
    const updateLogedUser = async () => {
        const result = await api.getProfile();
       setLogedUser({ ...logedUser, ...result });
           result.following.filter((e)=> e === props.match.params.id ? have = true : have = false)
           setFollow(have)
        }
    useEffect(() => {
        user();
        updateLogedUser();
    }, [])


    const follow = async () => {
        try {
            const action = {
                follow: true,
                id: props.match.params.id
            }
            const switched = await api.followUser({ ...action });
            user();
            updateLogedUser();
            if (switched) {
            }
        } catch (error) {
            console.log(error)
        }
    }

    const unfollow = async () => {
        try {
            const action = {
                unfollow: true,
                id: props.match.params.id
            }
            const switched = await api.followUser({ ...action });
            user();
            updateLogedUser();
            if (switched) {
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <div style={{ paddingBottom: '10%', height: 'vh100', backgroundColor: 'white' }} >
            <Nav />
            <ProfileCard>
                <Container>
                    <ImageContainer>
                        {profile && profile.profilePicture ? <img  src={profile.profilePicture} alt='image profile' /> : < CgProfile style={{ fontSize: '50px', color: 'white' }} />}
                        <p ><b>{profile && profile.name}</b></p>
                    </ImageContainer>
                    <FollowContainer>
                        <UserConfig>
                            <p><b>{profile && profile.username}</b></p>
                            {followThis ? <Button variant='danger' onClick={unfollow}>Unfollow</Button> : <Button variant='danger' onClick={follow}>Follow</Button>
                            }
                        </UserConfig>
                        <CountValues>
                            <Follow name='Posts' value={profile && profile.posts && profile.posts.length} />
                            <Follow name='Followers' value={profile && profile.followers && profile.followers.length} />
                            <Follow name='Following' value={profile && profile.following && profile.following.length} />
                            <Follow name='Favorite Games' value={profile && profile.favoriteGames && profile.favoriteGames.length} />
                        </CountValues>
                    </FollowContainer>
                </Container>
            </ProfileCard>
            <List user={profile} />
        </div >
    );
}

export default ProfileFriend;
