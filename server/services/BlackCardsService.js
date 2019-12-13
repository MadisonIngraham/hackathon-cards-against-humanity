import mongoose from "mongoose";
import BlackCard from "../models/BlackCard";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("BlackCard", BlackCard);

class ValueService {
  async getAll() {
    return await _repository.find({});
  }
  async delete(id) {
    let data = await _repository.findOneAndRemove({ _id: id });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async getById(id) {
    return await _repository.findById(id);
  }
  async edit(id, rawData) {
    let data = await _repository.findOneAndUpdate({ _id: id }, rawData, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const valueService = new ValueService();
export default valueService;
