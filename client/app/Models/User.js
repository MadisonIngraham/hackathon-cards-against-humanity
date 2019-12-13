export default class User {
	constructor (data) {
		this.id = data._id;
		this.name = data.name;
		this.avatar = data.avatar;
	}

}