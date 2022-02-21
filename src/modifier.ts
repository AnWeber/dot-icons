import { FileIcon, FolderIcon } from './types';

export function toGrayFolders(objs: Array<FolderIcon>): Array<FolderIcon> {
  return objs.map(obj => ({
    ...obj,
    fileName: 'folder',
    expandedFilename: 'folder_open',
    dark: Object.assign({}, obj.dark, {
      background: '#BDBDBD',
      background2: '#9E9E9E'
    })
  }))
}

export function toSmallDot(objs: Array<FileIcon>) {
  return objs.map(obj => (
    { ...obj, fileName: obj.fileName.indexOf('dot') > 0 ? 'document_small_dot' : obj.fileName }))
}
