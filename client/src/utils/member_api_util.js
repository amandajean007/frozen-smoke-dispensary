import axios from 'axios';

let address = '';

if (process.env.NODE_ENV === "production") {
    address = 'https://frozen-smoke.herokuapp.com/'
};
if (process.env.NODE_ENV === "development") {
    address = 'http://localhost:5002/'
};

export const postMember = (memberData) => {
    console.log(memberData);
    return axios.post(address + 'api/members', memberData)
};