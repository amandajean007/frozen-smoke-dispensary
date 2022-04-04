import axios from 'axios';

export const getMembers = () => {
    return axios.get('/api/members')
}
export const postMember = (memberData) => {
    return axios.post('/api/members', memberData)
}