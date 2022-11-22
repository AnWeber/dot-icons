import { FileIcon, FolderIcon } from "./types";

export function toGrayFolders(objs: Array<FolderIcon>): Array<FolderIcon> {
  return objs.map((obj) => ({
    ...obj,
    dark: Object.assign({}, obj.dark, {
      background: "#BDBDBD",
      background2: "#9E9E9E",
    }),
  }));
}

export function toSmallDot(objs: Array<FileIcon | FolderIcon>) {
  return objs.map((obj) => {
    const result = {
      ...obj,
    };
    if ("expandedFilename" in result) {
      result.expandedFilename = result.expandedFilename.indexOf("dot") > 0 ? "folder_open_small_dot" : result.expandedFilename;
      result.fileName = obj.fileName.indexOf("dot") > 0 ? "folder_small_dot" : result.fileName;
    } else {
      result.fileName = obj.fileName.indexOf("dot") > 0 ? "document_small_dot" : result.fileName;
    }
    return result;
  });
}
