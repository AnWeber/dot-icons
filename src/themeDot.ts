import { files, folders } from "./icons";
import { toGrayFolders } from "./modifier";
import { IconTheme } from "./types/iconTheme";

export const dot: IconTheme = {
  id: "dot",
  name: "dot",
  default: {
    background: "#9E9E9E",
    background2: "#9E9E9E",
  },
  icons: [...folders, ...files],
};

export const dotRoot: IconTheme = {
  id: "dot_colored_root",
  name: "dot (Colored Root)",
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
    ...files,
  ],
};

export const dotGrayscaleFolder: IconTheme = {
  id: "dot_gray",
  name: "dot (gray)",
  default: {
    background: "#9E9E9E",
    background2: "#9E9E9E",
  },
  icons: [...toGrayFolders(folders), ...files],
};
