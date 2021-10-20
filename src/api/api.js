import axios from 'axios';
class api{ 
    constructor(){
        this.api = axios.create({
            baseURL : 'http://localhost:5000'
        })
    }
    login = async (payload) =>{
        try {
            const {data} = await this.api.post('/auth/login',payload)
            const {token} = data;
            localStorage.setItem('token', token)
            return true
        } catch (error) {
            console.error(error)
        }
    }
    signUp = async (payload) =>{
        try {
            console.log('to aqui')
            await this.api.post('/auth/signup', payload);
            return true
        } catch (error) {
            console.error(error)
        }
    }
}
export default new api()