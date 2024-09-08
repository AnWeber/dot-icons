import { files, folders } from "./icons";
import {
  modifyToGrayFolders,
  modifyFileName,
  modifyDefaultFile,
} from "./modifier";
import { IconTheme } from "./types/iconTheme";

const modifier = "just";

export const justDot: IconTheme = {
  id: "just_dot",
  name: "just dot",
  default: {
    background: "#9E9E9E",
    background2: "#9E9E9E",
  },
  icons: [
    ...folders,
    ...modifyDefaultFile(modifyFileName(files, modifier), "document_just_dot"),
  ],
};

export const justDotRoot: IconTheme = {
  id: "just_dot_root",
  name: "just dot (Colored Root)",
  default: {
    background: "#9E9E9E",
    background2: "#9E9E9E",
  },
  icons: [
    ...folders.map((obj) => ({
      ...obj,
      fileName: obj.name === "root" ? "folder_colored" : obj.fileName,
      expandedFilename:
        obj.name === "root" ? "folder_open_colored" : obj.expandedFilename,
    })),
    ...modifyDefaultFile(modifyFileName(files, modifier), "document_just_dot"),
  ],
};

export const justDotGrayscaleFolder: IconTheme = {
  id: "just_dot_gray",
  name: "just dot (gray)",
  default: {
    background: "#9E9E9E",
    background2: "#9E9E9E",
  },
  icons: [
    ...modifyToGrayFolders(folders),
    ...modifyDefaultFile(modifyFileName(files, modifier), "document_just_dot"),
  ],
};
