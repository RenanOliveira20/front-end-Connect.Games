import React from "react";
import NavBar from "../Navbar/Navbar";
import CardPost from "./Post/CardPost";
import CarouselGame from "./Post/CarouselGame";
import FormPost from "./Post/ReviewFormPost";
import { Button } from "react-bootstrap";

const Feed = () => {
  return (
    <div>
      <NavBar />
      <CarouselGame />
      <Button variant="danger"> Post</Button>
      <FormPost />
      <CardPost />
    </div>
  );
};

export default Feed;
