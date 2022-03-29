import axios from 'axios';

export const getMembers = () => {
    return axios.get('http://localhost:5001/api/members')
}
export const postMember = (memberData) => {
    return axios.post('http://localhost:5001/api/members', memberData)
}