import axios from 'axios';
class api {
    constructor() {
        this.api = axios.create({
            //baseURL: 'http://localhost:5000'
            baseURL: 'https://api-connect-games-2.herokuapp.com/'

        })

        this.api.interceptors.request.use((config) => {
            const token = localStorage.getItem('Authorization');
            if (token) {
                config.headers = {
                    Authorization: `${token}`
                }
            }
            return config
        })
        this.api.interceptors.response.use((res) => res,

        ((error) => {
            if (error.response.status === 400) {
                localStorage.removeItem('Authorization')
            }
            throw error
        })
        )

        this.apiOne = axios.create({
            baseURL: `https://api.rawg.io/api/games/`
        })
    }
        login = async (payload) => {
            try {
            const { data } = await this.api.post('/auth/login', payload)
            const { token, user } = data;
            localStorage.setItem('Authorization', `Bearer ${token}`)
            localStorage.setItem("userId", user.id)
            return true
        } catch (error) {
            console.error(error)
            throw error.response
        }
    }
    signUp = async (payload) => {

        try {
            const result = await this.api.get('/games/all')
            return result
        } catch (error) {
            console.error(error)
            throw error.response
        }
    }

    getAllGames = async () => {
        try {
            const result = await this.api.get('/games/all')
            return result
        } catch (error) {
            console.error(error.message)
            throw error.response
        }
    }

    get_Id = async (_id) => {
        try {
            const result = await this.api.get(`/games/${_id}`)
            return result.data
        } catch (error) {
            console.error(error.message)
            throw error.response
        }
    }

    getOneGame = async (id) => {
        try {

            const result = await this.apiOne.get(`${id}?key=16bcb47270ed4224b57be626b618722e`)

            return result.data
        } catch (error) {
            console.error(error.message)
            throw error.response
        }
    }
    //profile routes
    getProfile = async () => {
        try {
            const profile = await this.api.get('/profile',{headers:{
                Authorization: localStorage.getItem('token')
            }})
            return profile.data
        } catch (error) {
            console.log(error)
            throw error.response
        }
    }
    otherUser = async (_id) => {
        try {
            const result = await this.api.get(`/profile/user/${_id}`)
            return result.data
        } catch (error) {
            console.error(error.message)
        }
    }
    followUser = async (payload) => {
        console.log('aqui')
        try {
            await this.api.put('/profile', payload);
            return true
        } catch (error) {
            console.error(error.message)
        }
    }


    createPost = async ({text, image}) => {
        const uploadData = new FormData();
        uploadData.append('image', image)
        uploadData.append('text', text)
        try {
            await this.api.post("/feed", uploadData);
        } catch (error) {
            console.log(error); 
            throw error.response
        }
    };
    getOnePost = async (id) => {
        try {
            const post = await this.api.get(`/post/${id}`);
            return post.data
        } catch (error) {
            console.error(error.message)
            throw error.response
        }
    }
    getPost = async () => {
        try {
        const posts = await this.api.get('/feed')
            return posts.data
        } catch (error) {
            console.log(error)
            throw error.response  
        }
    };
    
    putReactionsPost = async (idPost, payload) => {
        try {
            await this.api.put(`/feed/${idPost}/reactionsPost`, payload)
        } catch (error) {
            console.log(error)
            throw error.response
        }
    };

    deletePost = async (idPost) => {
        try {
            await this.api.delete(`/feed/${idPost}`)
        } catch (error) {
            console.log(error)
            throw error.response
        }
    }

    createComment = async (idPost, payload) => {
        try {
          await this.api.post(`/post/${idPost}/comment`, payload);
        } catch (error) {
          console.log(error);
          throw error.response
        }
    };

    putReactionsComment = async (idComment, payload) => {
        try {
            await this.api.put(`/post/${idComment}/reactionsComment`, payload)
        } catch (error) {
            console.log(error)
            throw error.response
        }
    };

    deleteComment = async (idPost, idComment) => {
        try {
            await this.api.delete(`/post/${idPost}/${idComment}`)
        } catch (error) {
            console.log(error)
            throw error.response
        }
    }

    createCommentGame = async (idGame , payload ) => {
        try {
            await this.api.post(`/games/comment/${idGame}`, payload)
        } catch (error) {
            throw error.response
        }
    }

    deleteCommentGame = async (idGame, idComment) =>{
        try {
            await this.api.delete(`/games/${idGame}/${idComment}`)
        } catch (error) {
            throw error.response
        }
    }

    putGameUserFavorite = async (idGame, payload) => {
        try {
            await this.api.put(`/games/favorites/${idGame}`, payload)
        } catch (error) {
            console.log(error)
            throw error.response
        }
    };

    putUserGameFavorite = async (idGame, payload) => {
        try {
            await this.api.put(`/profile/${idGame}/favorite`, payload)
        
        } catch (error) {
            console.log(error)
            throw error.response
        }
    }

}
export default new api();
