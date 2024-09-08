import { files, folders } from "./icons";
import {
  modifyToGrayFolders,
  modifyFileName,
  modifyDefaultFile,
} from "./modifier";
import { IconTheme } from "./types/iconTheme";

const modifierSmall = "small";
const modifierJust = "just";

export const justDotSmall: IconTheme = {
  id: "just_dot_small",
  name: "just dot small",
  default: {
    background: "#9E9E9E",
    background2: "#9E9E9E",
  },
  icons: [
    ...modifyFileName(folders, modifierSmall),
    ...modifyDefaultFile(
      modifyFileName(files, modifierJust),
      "document_just_dot"
    ),
  ],
};

export const justDotSmallRoot: IconTheme = {
  id: "just_dot_small_root",
  name: "just dot small (Colored Root)",
  default: {
    background: "#9E9E9E",
    background2: "#9E9E9E",
  },
  icons: [
    ...modifyFileName(
      folders.map((obj) => ({
        ...obj,
        fileName: obj.name === "root" ? "folder_colored" : obj.fileName,
        expandedFilename:
          obj.name === "root" ? "folder_open_colored" : obj.expandedFilename,
      })),
      modifierSmall
    ),
    ...modifyDefaultFile(
      modifyFileName(files, modifierJust),
      "document_just_dot"
    ),
  ],
};

export const justDotSmallGrayscaleFolder: IconTheme = {
  id: "just_dot_small_gray",
  name: "just dot small (gray)",
  default: {
    background: "#9E9E9E",
    background2: "#9E9E9E",
  },
  icons: [
    ...modifyFileName(modifyToGrayFolders(folders), modifierSmall),
    ...modifyDefaultFile(
      modifyFileName(files, modifierJust),
      "document_just_dot"
    ),
  ],
};
