import { execSync } from "child_process";
import fs from "fs";
import path from "path";

import inquirer from "inquirer";

import { createFolderStructure,displayFolderStructure } from "../utils/create-folder-structure";
import { htmlProjectStructure } from "../utils/project-structure";

const choices = [ "templates-html", "none" ] as const;
type ProjectType = typeof choices[number];

interface Answers {
  type: ProjectType;
  description: string;
}
const create = async (name: string) => {
  const questions:  any= [
    {
      type: "list",
      name: "type",
      message: "What type of project do you want to create?",
      choices: choices
    },
    {
      type: "input",
      name: "description",
      message: "Enter a brief description of your project:"
    }
  ];
  try {
    const answers = await inquirer.prompt<Answers>(questions);
    const projectPath = path.join(process.cwd(), name);

    if (fs.existsSync(projectPath)) {
      console.error(`Error: A project named "${name}" already exists.`);
      process.exit(1);
    }

    fs.mkdirSync(projectPath);
    const projectStructure  = {
      "templates-html": htmlProjectStructure(name, answers.description),
      "none": {}
    };
    const basePath = path.join(process.cwd(), name);
    createFolderStructure(basePath, projectStructure[answers.type]);

    if (answers.type == "none") {
      console.log(`Project "${name}" created successfully!`);
      console.log(`Type: ${answers.type}`);
      console.log(`Description: ${answers.description}`);
      console.log("\nCreated folder structure:");
      displayFolderStructure(basePath);
      return;
    }

    // Create project structure
    // Initialize npm and install dependencies
    process.chdir(name);
    execSync("yarn install", { stdio: "inherit" });

    // Build Tailwind CSS
    execSync("yarn run build", { stdio: "inherit" });

    console.log(`Project "${name}" created successfully!`);
    console.log(`Type: ${answers.type}`);
    console.log(`Description: ${answers.description}`);
    console.log("\nCreated folder structure:");
    displayFolderStructure(basePath);
  } catch (error) {
    console.error("An error occurred:", error);
    process.exit(1);
  }
};

export default create;
