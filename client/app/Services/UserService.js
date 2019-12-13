import User from "../Models/User.js"

let _api = axios.create({
	baseURL: "http://localhost:3000/api",
	timeout: 5000
});

class UserService {
	getUser () {

	}
}

const service = new UserService();
export default service;