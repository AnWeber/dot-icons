import { files, folders } from "./icons";
import { modifyToGrayFolders, modifyFileName } from "./modifier";
import { IconTheme } from "./types/iconTheme";

const modifier = "small";

export const dotSmall: IconTheme = {
  id: "dot_small",
  name: "dot small",
  default: {
    background: "#9E9E9E",
    background2: "#9E9E9E",
  },
  icons: [
    ...modifyFileName(folders, modifier),
    ...modifyFileName(files, modifier),
  ],
};

export const dotSmallRoot: IconTheme = {
  id: "dot_small_root",
  name: "dot small (Colored Root)",
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
      modifier
    ),
    ...modifyFileName(files, modifier),
  ],
};

export const dotSmallGrayscaleFolder: IconTheme = {
  id: "dot_small_gray",
  name: "dot small (gray)",
  default: {
    background: "#9E9E9E",
    background2: "#9E9E9E",
  },
  icons: [
    ...modifyFileName(modifyToGrayFolders(folders), modifier),
    ...modifyFileName(files, modifier),
  ],
};
