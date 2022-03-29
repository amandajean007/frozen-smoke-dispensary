import axios from 'axios';

export const getMessages = () => {
    return axios.get('http://localhost:5001/api/messages')
}
export const postMessage = (messageData) => {
    return axios.post('http://localhost:5001/api/messages', messageData)
}