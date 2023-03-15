import mongoose, { model, Schema } from "mongoose";
const UserSchema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
});
const UserModel = model("User", UserSchema);
export default mongoose.models.User || UserModel;
