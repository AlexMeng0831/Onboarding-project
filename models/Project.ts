import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    projectName: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: false },
    description: { type: String, required: true, trim: true },
    deploymentLink: { type: String, required: false, trim: true },
    githubLink: { type: String, required: false, trim: true },
  },
  { timestamps: true }
);

export const Project = models.Project || model("Project", ProjectSchema);
