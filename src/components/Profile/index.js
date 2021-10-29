import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Button, Image } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';
import { GrConfigure } from 'react-icons/gr';

import api from '../../api/api';

import Nav from '../Navbar/Navbar';
import List from './List';
import Follow from './Follow';

import { FollowContainer, ProfileCard, Container, UserConfig, CountValues, ImageContainer } from './styles';
import { PageComponent, Section, Article, ImageRight, ImageLeft} from '../GamesInfo/styles';

const Profile = () => {
    const [profile, setProfile] = useState();
    const history = useHistory();

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

    <>
        <Nav />
        <PageComponent>

            <ImageRight/>

            <Article>

                <Section>
                    <Container>

                        <ImageContainer>
                        {profile && profile.profilePicture && <Image roundedCircle src={profile.profilePicture}alt='image profile' />}
                            <p style={{fontSize : '25px'}}><b>{profile && profile.name}</b></p>
                            {profile && profile.biography ? <p>{profile.biography}</p> : <Button variant='outline-danger' style={{ width: '80%', marginLeft: '10%' , fontSize: '12px'}}>Biography &ensp;<BsFillPencilFill /></Button>}
                        </ImageContainer>
                        
                        <FollowContainer>
                            <UserConfig>
                                <p><b>{profile && profile.username}</b></p>
                                <Button variant='outline-dark' style={{fontSize: '15px'}}>Edit Profile &ensp;<GrConfigure /></Button>
                            </UserConfig>
                            <CountValues>
                                <Follow name='Posts' value={profile ? profile.posts.length : null} />
                                <Follow name='Followers' value={profile ? profile.followers.length : null} />
                                <Follow name='Following' value={profile ? profile.following.length : null} />
                                <Follow name='Favorite Games' value={profile ? profile.favoriteGames.length : null} />
                            </CountValues>
                        </FollowContainer>

                    </Container>
                </Section>

                <Section>
                    <List user ={profile}/>
                </Section>

            </Article>

            <ImageLeft/>

        </PageComponent>
    </>
    );
}

export default Profile;
