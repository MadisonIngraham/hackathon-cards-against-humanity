import mongoose from "mongoose";
import WhiteCard from "../models/WhiteCard";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("WhiteCard", WhiteCard);

class WhiteCardsService {
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
    return data;
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const whiteCardsService = new WhiteCardsService();
export default whiteCardsService;
