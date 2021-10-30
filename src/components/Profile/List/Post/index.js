import React, { useState, useEffect } from 'react'
import api from '../../../../api/api'
import { BodyImage, ContainerPost, HeaderImage, PostBody, PostHeader, PostOptions, ProfileName, Reactions } from './style'
import { ImMenu3, ImMenu4 } from 'react-icons/im'
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike, AiOutlineSend } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Posts = ({ post, user }) => {
    const [myPost, setPost] = useState({})
    const [myForm, setForm] = useState({ form: false, comment: false })
    const [comment, setComment] = useState({ text: '' })
    const data = async () => {
        const myData = await api.getOnePost(post)
        if (myData) {
            setPost({ ...myPost, ...myData })
        }
    };
    useEffect(() => {
        data()
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



    return (
        <ContainerPost>
            <PostHeader>
                <div>
                    <Link to='/profile'><HeaderImage src={user && user.profilePicture} alt='profile image' /></Link>
                    <ProfileName><b>{user && user.name}</b></ProfileName>
                </div>
                <PostOptions onClick={handleForm}>
                    {myForm.form ? <>
                        <ImMenu4 style={{ color: '#dc3545' }} />
                        <ul>
                            <li> <span>Edit</span></li>
                            <li><span>Delete</span> </li>
                        </ul>
                    </>
                        :
                        <ImMenu3 style={{ color: '#dc3545' }} />
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
                        <AiOutlineLike />
                        <Link to={`/post/${post}/:${user._id}`}>
                            <p style={{ fontSize: '13px' }}>{myPost && myPost.likes && myPost.likes.length} likes</p>
                        </Link>
                    </li>
                    <li >
                        <AiOutlineDislike />
                        <Link to={`/post/${post}/:${user._id}`}>
                            <p style={{ fontSize: '13px' }}>{myPost && myPost.dislikes && myPost.dislikes.length} dislikes</p>
                        </Link>
                    </li>
                    <li onClick={handleComment}>
                        <FaRegComment />
                        <Link to={`/post/${post}/:${user._id}`}>
                            <p style={{ fontSize: '13px' }}>{myPost && myPost.comments && myPost.comments.length} comments</p>
                        </Link>
                    </li>
                </Reactions>}
        </ContainerPost>
    )
}
export default Posts