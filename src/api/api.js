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

    getAllGames = async () => {
        try {
            const result = await this.api.get('/games/all')
            return result
        } catch (error) {
            console.error(error.message)
        }
    }

}
export default new api()