import { files , folders} from './icons';
import { toGrayFolders } from './modifier';
import { FolderIcon, IconTheme } from './types/iconTheme';

export function toColoredFolders(objs: Array<FolderIcon>): Array<FolderIcon> {
  return objs.map(obj => (
    {
      ...obj,
      fileName: obj.fileName.indexOf('dot') > 0 ? 'folder_colored' : obj.fileName,
      expandedFilename: obj.fileName.indexOf('dot') > 0 ? 'folder_open_colored' : obj.expandedFilename,
    }))
}

export const dotColored: IconTheme = {
  id: 'dot_colored',
  name: 'dot colored',
  default: {
    background: '#9E9E9E',
    background2: '#9E9E9E'
  },
  icons: [
    ...toColoredFolders(folders),
    ...files
  ]
};

export const dotColoredGrayscaleFolder: IconTheme = {
  id: 'dot_colored_gray',
  name: 'dot colored (gray)',
  default: {
    background: '#9E9E9E',
    background2: '#9E9E9E'
  },
  icons: [
    ...toColoredFolders(toGrayFolders(folders)),
    ...files
  ]
};