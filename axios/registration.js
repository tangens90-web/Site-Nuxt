import axios from 'axios'


export default class Registration{
    static register(params){
        return axios.post(`http://localhost:3000/users`,params)
    }
}
