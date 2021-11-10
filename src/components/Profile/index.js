import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Button, Image } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';
import { GrConfigure } from 'react-icons/gr';

import api from '../../api/api';

import Nav from '../Navbar/Navbar';
import List from './List';
import Follow from './Follow';
import Footer from '../Footer'

import { FollowContainer, ProfileCard, Container, UserConfig, CountValues, ImageContainer } from './styles';
import { PageComponent, ImageRight, Article, Section, ImageLeft} from '../GamesInfo/styles'

const Profile = () => {
    const [profile, setProfile] = useState();
    const history = useHistory();

    const fetchData = async () => {
        try {
            const data = await api.getProfile();
            setProfile(data)
        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchData()
    }, []);

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
                            </ImageContainer>
                            
                            <FollowContainer>
                                <UserConfig>
                                    <p><b>{profile && profile.username}</b></p>
                                   
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
                        <List user={profile} fetchData={fetchData}/>
                    </Section>
                </Article>

                <ImageLeft/>
                
            </PageComponent>
            <Footer/>
        </>

    );
}

export default Profile;
