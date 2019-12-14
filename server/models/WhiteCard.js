import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const WhiteCard = new Schema({
    cardText: { type: String, required: true },
    likes: [String],
    userId: { type: ObjectId, ref: "User", required: true },
    blackCardId: { type: ObjectId, ref: "BlackCard", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default WhiteCard;
