import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const BlackCard = new Schema(
  {
    content: { type: String, required: true },
    score: { type: Number, default: 0 }
    // userId: { type: ObjectId, ref: "User", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default BlackCard;
