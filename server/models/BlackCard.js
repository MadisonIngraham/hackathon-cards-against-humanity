import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const BlackCard = new Schema({
    cardText: { type: String, required: true },
    likes: [String],
    userId: { type: ObjectId, ref: "User", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default BlackCard;
