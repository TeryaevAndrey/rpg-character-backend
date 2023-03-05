import mongoose, { model, Schema } from "mongoose";

interface IUserSchema {
  userName: string;
  password: string;
}

const UserSchema = new Schema<IUserSchema>({
  userName: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = model("User", UserSchema);

export default mongoose.models.User || UserModel;
