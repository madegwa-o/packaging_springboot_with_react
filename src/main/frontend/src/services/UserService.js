// src/services/UserService.js
import axios from 'axios';

class UserService {
    // Define the API endpoint
    static API_URL = 'http://localhost:8080/api/v1/all-users';

    // Method to get all users
    getUsers() {
        return axios.get(UserService.API_URL);
    }
}

export default new UserService();
