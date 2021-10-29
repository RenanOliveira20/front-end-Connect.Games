import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import NavBar from "../Navbar/Navbar";
import Posts from "../Profile/List/Post";
import CarouselGame from "./CarouselGames/CarouselGame";
import FormPost from "./Post/ReviewFormPost";
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
  useEffect(() => {
    const fetchData = async () => {
        const data = await api.getProfile();
        if (validate(data)) {
            setUser({ ...user, ...data })
        }
    }
    fetchData()
}, [user]);
  return (
    <div>
      <NavBar />
      <FormPost getPosts= {getPosts} />
      {/* <CarouselGame /> */}
     <div>
       {posts.map((e) => {
     return <Posts key={e._id} user={user} post={`${e._id}`}/>
       })}
     </div> 
      
    </div>
  );
};

export default Feed;
