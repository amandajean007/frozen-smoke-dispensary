import axios from 'axios';

export const getMessages = () => {
    return axios.get('/api/messages')
}
export const postMessage = (messageData) => {
    return axios.post('/api/messages', messageData)
}