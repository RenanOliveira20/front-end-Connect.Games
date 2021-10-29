import { React, useState, useEffect } from "react";

import NavBar from "../Navbar/Navbar";
import Posts from "../Profile/List/Post";
import CarouselGame from "./CarouselGames/CarouselGame";
import FormPost from "./Post/ReviewFormPost";

import { ImageRight, ImageLeft, Article, Section } from '../GamesInfo/styles'
import { PageComponent } from './styles'

import api from "../../api/api";

const Feed = () => {

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({})
  const getPosts = async () => {
    try {
      const postsFromDb = await api.getPost();
      setPosts(postsFromDb)
    } catch (error) {
      console.log(error);
    }
  };
  const history = useHistory()
  const validate = async (data) => {
    if (!data) history.push('/');
    return true
}
  useEffect(() => {
    getPosts(); 
  }, []);


  return (
 
    <>
    
      <NavBar />

      <PageComponent>

        <ImageRight/>

        <Article>
        
          <Section>

            <FormPost getPosts= {getPosts} />

          </Section>

            <CarouselGame />

          <Section>

            {posts.map((e) => {
              return <CardPost key={e._id} data={e} getPosts={getPosts}/>
            })}


          </Section> 
        
        </Article>        

        <ImageLeft/>

      </PageComponent>

    </>

  );
};

export default Feed;
