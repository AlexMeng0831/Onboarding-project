import { Schema, model, models } from "mongoose";

const ExperienceSchema = new Schema(
  {
    company: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: false },
    description: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const Experience =
  models.Experience || model("Experience", ExperienceSchema);
