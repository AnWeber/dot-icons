
import { dot, dotGrayscaleFolder } from './themeDot';
import { dotSmall, dotSmallGrayscaleFolder } from './themeDotSmall';
import { IconRootConfig, IconConfig, IconDefinition, VSCodeIconTheme } from './types/vscode';
import { IconTheme, FileIcon, IconColor, FolderIcon } from './types/iconTheme';
import { promises as fs } from 'fs';

generateAll();

async function generateAll() {
  await initFolders();
  const iconThemes: Array<IconTheme> = [
    dot,
    dotGrayscaleFolder,
    dotSmall,
    dotSmallGrayscaleFolder,
  ];

  const contributes: {iconThemes: Array<VSCodeIconTheme>} = {
    iconThemes: []
  };
  for (const iconTheme of iconThemes) {
    contributes.iconThemes.push(await generate(iconTheme));
  }

  const packageJson = JSON.parse(await fs.readFile('./package.json', 'utf-8'));
  packageJson.contributes = contributes;
  await fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2));
}

async function initFolders() {
  const dir = './dist';
  try {
    if (await fs.stat(dir)) {
      await fs.rm(dir, {recursive: true, force:true});
    }
  } catch (err) {
  } finally {
    await fs.mkdir(dir);
    await fs.mkdir(`${dir}/svg`);
  }
}



async function generate(iconTheme: IconTheme) : Promise<VSCodeIconTheme>{
  const result: IconRootConfig = {
    iconDefinitions: {},
  };
  for (const icon of iconTheme.icons) {
    await addIcon(result, icon, Object.assign({}, iconTheme.default, icon.dark));
    if (icon.light) {
      if (!result.light) {
        result.light = {};
      }
      await addIcon(result, icon, Object.assign({}, iconTheme.default, icon.light));
    }
  }
  const path = `dist/${iconTheme.id}_config.json`;
  await fs.writeFile(path, JSON.stringify(result, null, 2));
  return {
    id: iconTheme.id,
    label: iconTheme.name,
    path,
  }
}

async function addIcon(result: IconRootConfig, icon: FileIcon | FolderIcon, color: IconColor) {
  const key = await createSvgKey(result.iconDefinitions, icon.fileName, color);
  if (isFolderIcon(icon)) {
    const expandedKey = await createSvgKey(result.iconDefinitions, icon.expandedFilename, color);
    addFolderIconConfig(result, key, expandedKey, icon);
  } else {
    addFileIconConfig(result, key, icon);
  }
}

function isFolderIcon(obj: FolderIcon | FileIcon): obj is FolderIcon{
  const guard = obj as FolderIcon;
  return !!guard?.folder;
}

function addFolderIconConfig(iconConfig: IconConfig, key: string, expandedKey: string, icon: FolderIcon) {
  if (icon.defaultFolder) {
    iconConfig.folder = key;
    iconConfig.folderExpanded= expandedKey;
  }
  if (icon.rootFolder) {
    iconConfig.rootFolder= key;
    iconConfig.rootFolderExpanded= expandedKey;
  }

  if (icon.folderNames) {
    iconConfig.folderNames = Object.assign({}, iconConfig.folderNames, fromArray(icon.folderNames, key));
    iconConfig.folderNamesExpanded = Object.assign({}, iconConfig.folderNamesExpanded, fromArray(icon.folderNames, expandedKey));
  }
}

function addFileIconConfig(iconConfig: IconConfig, key: string, icon: FileIcon) {
  if (icon.file) {
    iconConfig.file= key;
  }
  if (icon.fileExtensions) {
    iconConfig.fileExtensions = Object.assign({}, iconConfig.fileExtensions, fromArray(icon.fileExtensions, key))
  }
  if (icon.fileNames) {
    iconConfig.fileNames = Object.assign({}, iconConfig.fileNames, fromArray(icon.fileNames, key))
  }
  if (icon.languageIds) {
    iconConfig.languageIds = Object.assign({}, iconConfig.languageIds, fromArray(icon.languageIds, key))
  }
}

function fromArray(keys: Array<string> | undefined, value: string) {
  if (keys) {
    return keys.reduce((prev, current) => {
      prev[current] = value;
      return prev;
    }, {} as Record<string, string>)
  }
  return {};
}

async function createSvgKey(iconDefinitions: Record<string, IconDefinition>,  name: string, color: IconColor) {
  const key = [
    name,
    color?.color,
    color?.background2,
    color?.background,
    color?.grayscale,
  ].filter(obj => !!obj)
    .join('_')
    .replace(/#/gu, '');

  if (!iconDefinitions[key]) {

    const iconPath = `./dist/svg/${key}.svg`;
    iconDefinitions[key] = {
      iconPath: iconPath.replace('./dist','.'),
    };
    const svg = await fs.readFile(`./src/svg/${name}.svg`, 'utf-8');
    let targetSvg = svg
      .replace(/"#AAA"/gu, `"${color?.background}"`)
      .replace(/"#BBB"/gu, `"${color?.background2 || color?.background}"`)
      .replace(/"#CCC"/gu, `"${color?.color || color?.background2 || color?.background}"`);

    if (color.grayscale && color.grayscale > 0) {
      targetSvg = targetSvg.replace(/fill=/gu, `filter="grayscale(${color.grayscale}%)" fill=`)
    }
    await fs.writeFile(iconPath, targetSvg);
  }

  return key;

}