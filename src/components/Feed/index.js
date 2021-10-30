import { React, useState, useEffect } from "react";

import NavBar from "../Navbar/Navbar";
import CardPost from "./Post/CardPost";
import CarouselGame from "./CarouselGames/CarouselGame";
import FormPost from "./Post/ReviewFormPost";
import Footer from '../Footer'

import { ImageRight, ImageLeft, Article, Section } from "../GamesInfo/styles";
import { PageComponent } from "./styles";

import api from "../../api/api";
import { width } from "dom-helpers";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const postsFromDb = await api.getPost();
      setPosts(postsFromDb);
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
                return <CardPost key={e._id} data={e} getPosts={getPosts} />;
              })
            
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