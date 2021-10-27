import axios from 'axios';
class api {
    constructor() {
        this.api = axios.create({

            // baseURL: 'http://localhost:5000/'

            baseURL: 'https://api-connect-games-2.herokuapp.com'
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
            const { token } = data;
            console.log(data)
            localStorage.setItem('Authorization', `Bearer ${token}`)
            return true
        } catch (error) {
            console.error(error)
        }
    }
    signUp = async (payload) => {

        try {
            const result = await this.api.get('/games/all')

            return result
        } catch (error) {
            console.error(error.message)
        }
    }

    getAllGames = async () => {
        try {
            const result = await this.api.get('/games/all')
            return result
        } catch (error) {
            console.error(error.message)
        }
    }

    getOneGame = async (id) => {

        try {
            const result = await this.apiOne.get(`${id}?key=cbb5b86f21b641e194e2cf3dde368951`)
            return result.data
        } catch (error) {
            console.error(error.message)
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
        }
    }
    createPost = async (payload) => {
      try {
        await this.api.post("/feed", payload);
        return true;
      } catch (error) {
        console.log(error);
      }
    };

}
export default new api();
