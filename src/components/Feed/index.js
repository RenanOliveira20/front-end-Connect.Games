import React from "react";
import NavBar from "../Navbar/Navbar";
import CardPost from "./Post/CardPost";
import CarouselGame from "./CarouselGame";
import FormPost from "./Post/ReviewFormPost";
import { Button } from "react-bootstrap";

const Feed = () => {
  return (
    <div>
      <NavBar />
      <Button variant="danger"> Post</Button>
      <FormPost />
      <CarouselGame />
      <CardPost />
    </div>
  );
};

export default Feed;
