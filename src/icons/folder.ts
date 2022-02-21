import { FolderIcon } from "../types";

export const folders: Array<FolderIcon> = [
  {
    name: "default",
    fileName: "folder",
    expandedFilename: "folder_open",
    folder: true,
    defaultFolder: true,
  },
  {
    name: "root",
    fileName: "folder_dot",
    expandedFilename: "folder_open_dot",
    dark: {
      color: "#42A5F5",
      color2: "#90CAF9",
    },
    folder: true,
    rootFolder: true,
  },
  {
    name: "hidden folder",
    fileName: "folder_dot",
    expandedFilename: "folder_open_dot",
    dark: {
      color: "#BDBDBD",
      color2: "#E0E0E0",
    },
    folder: true,
    folderNames: [
      "node_modules",
      ".vscode",
      ".git",
      ".github",
      ".svn",
      "bower_components",
      ".code-search",
      ".husky",
    ],
  },
  {
    name: "build folder",
    fileName: "folder_dot",
    expandedFilename: "folder_open_dot",
    dark: {
      color: "#8D6E63",
      color2: "#BCAAA4",
    },
    folder: true,
    folderNames: ["dist", "build", "bin", "release", "out"],
  },
  {
    name: "images",
    fileName: "folder_dot",
    expandedFilename: "folder_open_dot",
    dark: {
      color: "#FFCA28",
      color2: "#FFE082",
    },
    folder: true,
    folderNames: ["images", "image", "icons", "icon", "asset", "assets"],
  },
  {
    name: "public",
    fileName: "folder_dot",
    expandedFilename: "folder_open_dot",
    dark: {
      color: "#66BB6A",
      color2: "#A5D6A7",
    },
    folder: true,
    folderNames: ["public", "www", "wwwroot", "web", "website"],
  },
  {
    name: "environment",
    fileName: "folder_dot",
    expandedFilename: "folder_open_dot",
    dark: {
      color: "#26A69A",
      color2: "#80CBC4",
    },
    folder: true,
    folderNames: [
      ".env",
      ".environment",
      "env",
      "envs",
      "environment",
      "environments",
      ".venv",
    ],
  },
  {
    name: "source",
    fileName: "folder_dot",
    expandedFilename: "folder_open_dot",
    dark: {
      color: "#EF5350",
      color2: "#EF9A9A",
    },
    folder: true,
    folderNames: ["src", "source", "sources", "code"],
  },
].map((obj: FolderIcon) => {
  if (!obj.dark) {
    obj.dark = {};
  }
  if (!obj.dark.background) {
    obj.dark.background = "#FBC02D";
  }
  if (!obj.dark.background2) {
    obj.dark.background2 = "#F9A825";
  }
  return obj;
});
