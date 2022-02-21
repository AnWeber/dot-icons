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
    ...folders,
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
    ...toGrayFolders(folders),
    ...toSmallDot(files),
  ]
};