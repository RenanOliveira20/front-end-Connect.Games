import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import api from '../../api/api';
import Follow from './Follow';
import { FollowContainer, ProfileCard, Container, UserConfig,CountValues, ImageContainer } from './styles';
import Nav from '../Navbar/Navbar'
import { Button, Image } from 'react-bootstrap';
import {BsFillPencilFill} from 'react-icons/bs';
import {GrConfigure} from 'react-icons/gr'
const Profile = () => {
    const [profile, setProfile] = useState();
    const history = useHistory()
    const validate = async (data) => {
        if (!data) history.push('/');
        return true
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await api.getProfile();
            if (validate(data)) {
                setProfile({ ...profile, ...data })
            }
        }
        fetchData()
    }, [profile]);
    return (
        <div className='bg-light vh-100'>
            <Nav />
            <ProfileCard>
                <Container>
                <ImageContainer>
        <Image rounded src={ profile ? `${profile.profilePicture}` : null} alt='image profile' />
        <p>{profile ? profile.name : null}</p>
        {profile ? profile.biography ? <p>{profile.biography}</p> : <Button variant='outline-danger' style = {{width: '52%', marginLeft: '28%' }}>Add Biography &ensp;<BsFillPencilFill/></Button> : null}
    </ImageContainer>
                    <FollowContainer>
                        <UserConfig>
                            <p>{profile? profile.username : null}</p>
                            <Button variant='outline-dark' >Edit Profile &ensp;<GrConfigure/></Button>
                        </UserConfig>
                        <CountValues>
                            <Follow name='Posts' value={profile? profile.posts.length : null} />
                            <Follow name='Followers' value={profile? profile.followers.length : null} />
                            <Follow name='Following' value={profile? profile.following.length : null} />
                            <Follow name='Favorite Games' value={profile? profile.favoriteGames.length : null} />
                        </CountValues>
                    </FollowContainer>
                </Container>
            </ProfileCard>
        </div>
    );
}

export default Profile;
