import { FileIcon, FolderIcon } from "./types";

export function modifyToGrayFolders(
  objs: Array<FolderIcon>
): Array<FolderIcon> {
  return objs.map((obj) => ({
    ...obj,
    dark: Object.assign({}, obj.dark, {
      background: "#BDBDBD",
      background2: "#9E9E9E",
    }),
  }));
}

export function modifyFileName(
  objs: Array<FileIcon | FolderIcon>,
  modifier: string
) {
  return objs.map((obj) => {
    const result = {
      ...obj,
    };
    if ("expandedFilename" in result) {
      result.expandedFilename =
        result.expandedFilename.indexOf("dot") > 0
          ? `folder_open_${modifier}_dot`
          : result.expandedFilename;
      result.fileName =
        obj.fileName.indexOf("dot") > 0
          ? `folder_${modifier}_dot`
          : result.fileName;
    } else {
      result.fileName =
        obj.fileName.indexOf("dot") > 0
          ? `document_${modifier}_dot`
          : result.fileName;
    }
    return result;
  });
}

export function modifyDefaultFile(files: Array<FileIcon>, fileName: string) {
  return files.map((f) => {
    if (f.name === "default file") {
      return {
        ...f,
        fileName,
      };
    }
    return f;
  });
}
