import mongoose from "mongoose";

const { Schema } = mongoose;

const settingSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    job: {
      type: Schema.Types.String,
      required: true,
    },
    socialMedia: {
      type: Schema.Types.Array,
    },
  },
  {
    timestamps: true,
  }
);

const Setting = mongoose.model("Setting", settingSchema);

export default Setting;
