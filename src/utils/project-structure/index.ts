import {
  packageJsontailwindCss,
  gitignoreContent,
  tailwindCss,
  tailwindConfig,
  htmlTailwindCss
} from "../index";
import { ProjectStructure } from "./types";
export const htmlProjectStructure = (name:string, description:string):ProjectStructure => ({
  js: {
    components: {
      "Header.js": "",
      "Footer.js": "",
      "Sidebar.js": ""
    },
    utils: {
      "helpers.js": "",
      "constants.js": ""
    },
    "index.js": ""
  },
  css: {
    "main.css": tailwindCss.trim()
  },
  "tailwind.config.js": tailwindConfig.trim(),
  html: {
    "index.html": htmlTailwindCss(name).trim(),
  },
  ".gitignore": gitignoreContent.trim(),
  "README.md": "# Project Documentation",
  "package.json": JSON.stringify(packageJsontailwindCss(name,description), null, 2)
});
