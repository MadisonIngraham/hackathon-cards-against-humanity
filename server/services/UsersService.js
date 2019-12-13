import mongoose from "mongoose";
import User from "../models/User";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("User", User);

class UsersService {
  async getByName(name) {
    let data = await _repository.findOne({ name: name });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }
  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }
  async delete(id) {
    let data = await _repository.findOneAndDelete({ _id: id });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const usersService = new UsersService();
export default usersService;
