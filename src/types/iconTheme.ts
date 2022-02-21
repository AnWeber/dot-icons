

export interface IconColor{
  background?: string;
  background2?: string;
  color?: string;
  color2?: string;
  grayscale?: number;
}

export interface FolderIcon{
  name?: string;
  fileName: string;
  light?: IconColor,
  dark?: IconColor,
  folder: boolean;
  defaultFolder?: boolean;
  rootFolder?: boolean;
  expandedFilename: string;

  folderNames?: Array<string>,
}

export interface FileIcon{
  name?: string;
  fileName: string;
  light?: IconColor,
  dark?: IconColor,

  fileExtensions?:Array<string>,
  fileNames?: Array<string>,
  languageIds?: Array<string>;
  file?: boolean;
}

export interface IconTheme{
  id: string;
  name: string;
  default: IconColor;
  icons: Array<FileIcon | FolderIcon>
}