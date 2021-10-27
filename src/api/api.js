import axios from 'axios';
class api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/'
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

}
export default new api()