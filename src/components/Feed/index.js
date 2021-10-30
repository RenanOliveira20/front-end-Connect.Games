import { React, useState, useEffect } from "react";

import NavBar from "../Navbar/Navbar";
import CardPost from "./Post/CardPost";
import CarouselGame from "./CarouselGames/CarouselGame";
import FormPost from "./Post/ReviewFormPost";
import Footer from "../Footer";

import { ImageRight, ImageLeft, Article, Section } from "../GamesInfo/styles";
import { PageComponent } from "./styles";

import api from "../../api/api";

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
    <div>
      <NavBar />
      <PageComponent>
        <ImageRight />

        <Article>
          <Section>
            <FormPost getPosts={getPosts} />
          </Section>
          <Section>
            <CarouselGame />
          </Section>
          <Section>
            {posts.map((e) => {
              return <CardPost key={e._id} data={e} getPosts={getPosts} />;
            })}
          </Section>
        </Article>
        <ImageLeft />
      </PageComponent>
      <Footer />
    </div>
  );
};

export default Feed;
