import mongoose from "mongoose";
import User from "../models/User";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("User", User);

class UsersService {
	async getAllUsers () {
		return await _repository.find({});
	}

	async getByName(name) {
		return await _repository.findOne({ name });
	}

	async getById(id) {
		return await _repository.findOne({ _id: id });
	}

	async create(rawData) {
		return await _repository.create(rawData);
	}

	async edit(name, update) {
		let data = await _repository.findOneAndUpdate({ name }, update, {
			new: true
		});
		if (!data) {
			throw new ApiError("Invalid ID", 400);
		}
		return data;
	}

	async delete(name) {
		let data = await _repository.findOneAndDelete({ name });
		if (!data) {
			throw new ApiError("Invalid ID", 400);
		}
	}
}

const usersService = new UsersService();
export default usersService;
