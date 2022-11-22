import { files , folders} from './icons';
import { toGrayFolders, toSmallDot } from './modifier';
import { IconTheme } from './types/iconTheme';



export const dotSmall: IconTheme = {
  id: 'dot_small',
  name: 'dot small',
  default: {
    background: '#9E9E9E',
    background2: '#9E9E9E'
  },
  icons: [
    ...toSmallDot(folders),
    ...toSmallDot(files),
  ]
};


export const dotSmallRoot: IconTheme = {
  id: 'dot_small_root',
  name: 'dot small (Colored Root)',
  default: {
    background: '#9E9E9E',
    background2: '#9E9E9E'
  },
  icons: [
    ...toSmallDot(folders.map((obj) => ({
      ...obj,
      fileName: obj.name === "root" ? "folder_colored" : obj.fileName,
      expandedFilename:
        obj.name === "root" ? "folder_open_colored" : obj.expandedFilename,
    }))),
    ...toSmallDot(files),
  ]
};

export const dotSmallGrayscaleFolder: IconTheme = {
  id: 'dot_small_gray',
  name: 'dot small (gray)',
  default: {
    background: '#9E9E9E',
    background2: '#9E9E9E'
  },
  icons: [
    ...toSmallDot(toGrayFolders(folders)),
    ...toSmallDot(files),
  ]
};