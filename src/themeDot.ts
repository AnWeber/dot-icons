import { files , folders} from './icons';
import { toGrayFolders } from './modifier';
import { IconTheme } from './types/iconTheme';



export const dot: IconTheme = {
  id: 'dot',
  name: 'dot',
  default: {
    background: '#9E9E9E',
    background2: '#9E9E9E'
  },
  icons: [
    ...folders,
    ...files
  ]
};

export const dotGrayscaleFolder: IconTheme = {
  id: 'dot_gray_folder',
  name: 'dot (gray folder)',
  default: {
    background: '#9E9E9E',
    background2: '#9E9E9E'
  },
  icons: [
    ...toGrayFolders(folders),
    ...files
  ]
};