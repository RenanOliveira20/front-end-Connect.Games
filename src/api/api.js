import axios from 'axios';
class api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000'
            //baseURL: 'https://api-connect-games-2.herokuapp.com/'
        })
        this.api.interceptors.request.use((config) => {
            const token = localStorage.getItem('Authorization');
            if (token) {
                config.headers = {
                    Authorization: `${token}`
                }
            }
            console.log(config)
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
            console.log('to aqui')
            await this.api.post('/auth/signup', payload);
            return true
        } catch (error) {
            console.error(error)
            throw error.response
        }
    }
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
    createPost = async (payload) => {
      try {
        await this.api.post("/feed", payload);
      } catch (error) {
        console.log(error);
        throw error.response
      }
    };
    
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
    
}
export default new api();
