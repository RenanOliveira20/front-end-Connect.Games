import React, { useState, useEffect } from 'react'
import api from '../../../../api/api'
import { BodyImage, ContainerPost, HeaderImage, PostBody, PostHeader, PostOptions, ProfileName, Reactions } from './style'
import { ImMenu3, ImMenu4 } from 'react-icons/im'
import { AiOutlineLike, AiOutlineDislike, AiOutlineSend, AiFillLike, AiFillDislike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Posts = ({ user, post, fetchData }) => {
    const [myPost, setPost] = useState({})
    const [myForm, setForm] = useState({ form: false, comment: false })
    const [comment, setComment] = useState({ text: '' })
    const [reactions, setReaction] = useState()
    const data = async () => {
        const myData = await api.getOnePost(post)
        if (myData) {
            setPost({ ...myPost, ...myData })
        }

    };
    const disliked = myPost && myPost.dislikes && myPost.dislikes.filter((e)=> e === user._id)
        const liked = myPost && myPost.likes && myPost.likes.filter((e)=> e === user._id)
    const myReactions = () => {
            if (liked) {
                setReaction({ ...reactions, like: true })
            }
            if (!liked) {
                setReaction({ ...reactions, like: false })
            }
            console.log(disliked, myPost)
            if (disliked) {
                setReaction({ ...reactions, dislike: true })
            }
            if (!disliked) {
                setReaction({ ...reactions, dislike: false })
            }

    }

    useEffect(() => {
        data();
        myReactions()
    }, [])

    const handleForm = () => {
        const newForm = {
            form: !myForm.form
        }
        setForm({ ...myForm, form: newForm.form })
    }
    const handleComment = () => {
        const newForm = {
            comment: !myForm.comment
        }
        setForm({ ...myForm, comment: newForm.comment })
        setComment({ ...comment, text: '' });
    }
    const handleText = ({ target: { value } }) => {
        setComment({ ...comment, text: value });

    }



    const createComment = async () => {
        try {
            await api.createComment(post, { ...comment });
            handleComment()
            data();
        } catch (error) {
            console.log(error);
        }
    };
    const deletePost = async () => {
        try {
            await api.deletePost(post);
        } catch (error) {
            console.log(error);
        }
        finally{
            fetchData()
        }
    };
    const reactionDislike = async () => {
        if (disliked.length === 0) {
            if(liked.length > 0){
                await api.putReactionsPost(myPost._id, {like: false})
            }
            await api.putReactionsPost(myPost._id, { dislike: true })
            data()
        } else {
            await api.putReactionsPost(myPost._id, { dislike: false })
            data()
        }
    }

    const reactionLike = async () => {
        if (liked.length === 0) {
            if (disliked.length > 0) {
                await api.putReactionsPost(myPost._id, { dislike: false })
                data()
            }
            await api.putReactionsPost(myPost._id, { like: true })
            data()
        } else {
            await api.putReactionsPost(myPost._id, { like: false })
            data()
        }
    }


    return (
        <ContainerPost>
            <PostHeader>
                <div>
                    <HeaderImage src={user && user.profilePicture} alt='profile image' />
                    <ProfileName><b>{user && user.name}</b></ProfileName>
                </div>
                <PostOptions onClick={handleForm}>
                    {myForm.form ? <>
                        <ImMenu4 style={{ color: 'white' }} />
                        <ul>
                            <li onClick={deletePost}><span >Delete</span> </li>
                        </ul>
                    </>
                        :
                        <ImMenu3 style={{ color: 'white' }} />
                    }
                </PostOptions>
            </PostHeader>
            <PostBody >
                {myPost && myPost.text &&
                    <p style={{ height: myPost && myPost.imageUrl ? '50px' : 'auto' }}>{myPost.text}</p>
                }
                {myPost && myPost.imageUrl &&
                    <BodyImage>
                        <img src={myPost && myPost.imageUrl} alt='post' />
                    </BodyImage>
                }
            </PostBody>
            {myForm.comment ?
                <Reactions>
                    <li onClick={handleComment} style={{ fontSize: '20px' }}>cancel</li>
                    <input type="text" value={comment.text} onChange={handleText} onSubmit={handleComment} />
                    <AiOutlineSend onClick={createComment} />
                </Reactions>
                :
                <Reactions>
                    <li>
                        {
                            liked && liked.length > 0 ?
                                <AiFillLike onClick={reactionLike} /> :
                                < AiOutlineLike onClick={reactionLike} />
                        }
                        <Link to={`/post/${post}/:${user._id}`}>
                            <p style={{ fontSize: '13px' }}>{myPost && myPost.likes && myPost.likes.length} likes</p>
                        </Link>
                    </li>
                    <li >
                        {
                            disliked && disliked.length ?
                                <AiFillDislike onClick={reactionDislike} /> :
                                < AiOutlineDislike onClick={reactionDislike} />
                        }
                        <Link to={`/post/${post}/:${user._id}`}>
                            <p style={{ fontSize: '13px' }}>{myPost && myPost.dislikes && myPost.dislikes.length} dislikes</p>
                        </Link>
                    </li>
                    <li onClick={handleComment}>
                        <FaRegComment />
                        <p style={{ fontSize: '13px' }}>{myPost && myPost.comments && myPost.comments.length} comments</p>

                    </li>
                </Reactions>}
        </ContainerPost>
    )
}
export default Posts