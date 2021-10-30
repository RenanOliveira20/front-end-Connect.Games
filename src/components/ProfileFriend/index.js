import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import api from '../../api/api';
import Follow from './Follow';
import { FollowContainer, ProfileCard, Container, UserConfig, CountValues, ImageContainer } from './styles';
import Nav from '../Navbar/Navbar'
import { Button, Image } from 'react-bootstrap';
import List from './List';
import { CgProfile } from "react-icons/cg";

const ProfileFriend = (props) => {
    const [profile, setProfile] = useState();
    const [logedUser, setLogedUser] = useState({});
    const [followThis, setFollow] = useState({
    })
    const user = async () => {
        const result = await api.otherUser(props.match.params.id)
        setProfile({ ...profile, ...result[0] })
    }

    const updateLogedUser = async () => {
        const result = await api.getProfile();
        setLogedUser({ ...logedUser, ...result });
        return true
    }
    const followFriend = async () => {
        if(logedUser){
            const auth = logedUser.following && logedUser.following.filter((e)=>{
                return e === props.match.params.id
            })
            if(auth){
                setFollow({
                    follow : true
                })
            }
            if(!auth){
                setFollow({
                    follow : false
                })
            }
        }
    }
    useEffect(() => {
        user();
        updateLogedUser();
        followFriend();
    }, [])
    setInterval(() => {
        user()
    }, 60000);
    const follow = async () => {
        try {
            const action = {
                follow: true,
                id: props.match.params.id
            }
            await api.followUser({ ...action });
            user();
            updateLogedUser();
                const action2 = {
                    follow: true
                }
                setFollow({...action2})
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
            await api.followUser({ ...action });
            user();
            const vai = updateLogedUser();
            if(vai){
                const action2 = {
                    follow : false
                }
                setFollow({...action2})
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <div style={{ paddingBottom: '10%', height: 'vh100', backgroundColor: '#f2f2f2' }}>
            <Nav />
            <ProfileCard>
                <Container>
                    <ImageContainer>
                        {profile && profile.profilePicture ? <Image roundedCircle src={profile.profilePicture} alt='image profile' /> : < CgProfile style={{ fontSize: '50px', color: 'white' }} />}
                        <p style={{ fontSize: '30px' }}><b>{profile && profile.name}</b></p>
                    </ImageContainer>
                    <FollowContainer>
                        <UserConfig>
                            <p><b>{profile && profile.username}</b></p>
                            {followThis && followThis.follow && followThis.follow ?  <Button variant='danger' onClick={unfollow}>Unfollow</Button>: <Button variant='danger' onClick={follow}>Follow</Button>
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
            {/* <List user={profile} />  */}
        </div>
    );
}

export default ProfileFriend;
