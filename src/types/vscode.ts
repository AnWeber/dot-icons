export interface IconDefinition {
  iconPath: string;
}

export interface IconConfig {
  fileExtensions?: Record<string, string>;
  fileNames?: Record<string, string>;
  folderNames?: Record<string, string>;
  folderNamesExpanded?: Record<string, string>;
  languageIds?: Record<string, string>;
  folder?: string;
  folderExpanded?: string;
  rootFolder?: string;
  rootFolderExpanded?: string;
  file?: string;
}

export interface IconRootConfig extends IconConfig {
  iconDefinitions: Record<string, IconDefinition>;
  light?: IconConfig;
  highContrast?: IconConfig;
}

export interface VSCodeIconTheme{
  id: string;
  label: string;
  path: string;
}
