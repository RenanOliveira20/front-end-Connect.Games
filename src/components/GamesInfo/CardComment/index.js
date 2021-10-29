import React from "react";
import api from "../../../api/api";
import { Trash, Like, Dislike, Comment, LikeDislike, Profile, ImgProfile } from "./styles";
import { Card, Button } from "react-bootstrap";

const CardComment = (props) => {

    const { idGame, Comment } = props

    const userId = localStorage.getItem("userId")

    const deleteCommentGame = async () => {
        try {
            await api.deleteCommentGame(idGame, Comment._id);
            ;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Comment>
            <Card style={{ width: "70%" }}>
                {/* <ImgProfile>
                    {Comment.user.profilePicture ? (
                        <img src={Comment.user.profilePicture} alt={Comment.user.username} />
                    ) : (
                        <Profile />
                    )}
                </ImgProfile>
                <span className="p-3">{Comment.user.username}</span> */}
                <Card.Body>
                    {/* <Card.Text>{Comment.text}</Card.Text> */}

                    <Button variant="danger m-1" onClick={deleteCommentGame}>
                        <Trash />
                    </Button>
                </Card.Body>
            </Card>
        </Comment>
    );
};

export default CardComment;
