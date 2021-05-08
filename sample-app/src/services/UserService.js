import axios from "axios";


const ADDUSER_REST_API = 'http://localhost:8090/api/v1/add-user';
const UPDATE_USER_REST_API = 'http://localhost:8090/api/v1/update-user';
const DELETE_USER_REST_API = 'http://localhost:8090/api/v1/delete-user';
const GET_USER_REST_API = 'http://localhost:8090/api/v1/users/';

class UserService {

    addUser(user) {
        return axios.post(ADDUSER_REST_API, user);
    }

    updateUser(user, userid) {
        console.log(userid, user);
        return axios.post(UPDATE_USER_REST_API + '/' + userid, user);
    }

    getUser(userId) {
        return axios.get(GET_USER_REST_API + userId);
    }

    deleteUser(userId) {
        return axios.get(DELETE_USER_REST_API + '/' + userId);
    }
}

export default new UserService();

