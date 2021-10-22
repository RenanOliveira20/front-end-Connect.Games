import axios from 'axios';
class api {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://api-connect-games.herokuapp.com/'
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
            const { token } = data;
            localStorage.setItem('Authorization', `Bearer ${token}`)
            return true
        } catch (error) {
            console.error(error)
        }
    }
    signUp = async (payload) => {
        try {
            console.log('to aqui')
            await this.api.post('/auth/signup', payload);
            return true
        } catch (error) {
            console.error(error)
        }
    }
    getProfile = async () => {
        try {
            const profile = await this.api.get('/profile',{headers:{
                Authorization: localStorage.getItem('token')
            }})
            console.log(profile.data)
            return profile
        } catch (error) {
            console.log(error)
        }
    }
}
export default new api()