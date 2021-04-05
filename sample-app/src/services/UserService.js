import axios from "axios";

const USERS_LIST_API = 'http://localhost:8090/api/v1/users';
const ADDUSER_REST_API = 'http://localhost:8090/api/v1/add';
const UPDATE_USER_REST_API = 'http://localhost:8090/api/v1/updateuser';
const DELETE_USER_REST_API = 'http://localhost:8090/api/v1/deleteuser';
const GET_USER_REST_API = 'http://localhost:8090/api/v1/users/';

class UserService {
    getUsers() {
        return axios.get(USERS_LIST_API);
    }

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

