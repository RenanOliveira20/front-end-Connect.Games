import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import api from '../../api/api';
import Follow from './Follow';
import { FollowContainer, ProfileCard, Container, UserConfig, CountValues, ImageContainer } from './styles';
import Nav from '../Navbar/Navbar'
import { Button, Image } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';
import { GrConfigure } from 'react-icons/gr'
import List from './List';

const ProfileFriend = (props) => {
    const [profile, setProfile] = useState();
    const user = async() =>{
        const result = await api.otherUser(props.match.params.id)
        console.log(result)
        return result
    }
    user()
    return (
        <div style={{ paddingBottom: '10%', height: 'vh100', backgroundColor: '#f2f2f2' }}>
            <Nav />
            <ProfileCard>
                <Container>
                    <ImageContainer>
                        {profile && profile.profilePicture && <Image roundedCircle src={profile.profilePicture} alt='image profile' />}
                        <p style={{ fontSize: '25px' }}><b>{profile && profile.name}</b></p>
                        {profile && profile.biography ? <p>{profile.biography}</p> : <Button variant='outline-danger' style={{ width: '80%', marginLeft: '10%', fontSize: '12px' }}>Biography &ensp;<BsFillPencilFill /></Button>}
                    </ImageContainer>
                    <FollowContainer>
                        <UserConfig>
                            <p><b>{profile && profile.username}</b></p>
                            <Button variant='outline-dark' style={{ fontSize: '15px' }}>Edit Profile &ensp;<GrConfigure /></Button>
                        </UserConfig>
                        <CountValues>
                            <Follow name='Posts' value={profile ? profile.posts.length : null} />
                            <Follow name='Followers' value={profile ? profile.followers.length : null} />
                            <Follow name='Following' value={profile ? profile.following.length : null} />
                            <Follow name='Favorite Games' value={profile ? profile.favoriteGames.length : null} />
                        </CountValues>
                    </FollowContainer>
                </Container>
            </ProfileCard>
            <List user={profile} />
        </div>
    );
}

export default ProfileFriend;
