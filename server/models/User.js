import mongoose from "mongoose";
const Schema = mongoose.Schema;
const User = new Schema(
  {
    name: { type: String, unique: true, required: true },
    avatar: {
      type: String,
      default: `https://robohash.org/${this.name}?set=set1"`
    }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
export default User;
