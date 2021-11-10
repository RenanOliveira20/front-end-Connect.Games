import { React, useState, useEffect } from "react";

import NavBar from "../Navbar/Navbar";
import CardPost from "./Post/CardPost";
import CarouselGame from "./CarouselGames/CarouselGame";
import FormPost from "./Post/ReviewFormPost";
import Footer from "../Footer";

import { ImageRight, ImageLeft, Article, Section } from "../GamesInfo/styles";
import { PageComponent } from "./styles";

import api from "../../api/api";
import Posts from "../Profile/List/Post";


const Feed = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const postsFromDb = await api.getPost();
      const arrayCopy =[]
      postsFromDb.forEach((e)=>{
        if(e._id) arrayCopy.push(e._id);
        if(!e._id) arrayCopy.push(e);
      })
      setPosts(arrayCopy)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>

      <NavBar />
      <PageComponent>

        <ImageRight />

        <Article>
          <Section>
            <CarouselGame />
          </Section>

          <Section>
            <FormPost getPosts={getPosts} />
          </Section>
          
          <Section>
            {posts.length === 0?
              <div className='d-flex align-items-center justify-content-center'style={{height:'18vh', width:'100%' }}>
                <h1>You don't have any posts yet!</h1>
              </div>
              : posts.map((e) => {
                return <Posts/>
              }
                )
            }
          </Section>

        </Article>

        <ImageLeft />

      </PageComponent>
      
      <Footer/>

    </>
  );
};

export default Feed;
