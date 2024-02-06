import { promises as fsPromises, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { load } from 'js-yaml';

import { glob, globSync, globStream, globStreamSync, Glob } from 'glob'

export default defineEventHandler(async (event) => {
  const rootDirectory = join(process.cwd(), './public/actions');

  const jsfiles = await glob(`${process.cwd()}/**/{action,ui-schema}.{yaml,yml}`)
  console.log(jsfiles)
  const actionFiles = await findAllActionFiles(rootDirectory);

  return actionFiles;
});

async function findAllActionFiles(directory) {
  const files = await fsPromises.readdir(directory);

  const actionFilePromises = files.map(async (file) => {
    const filePath = resolve(directory, file);
    const stats = statSync(filePath);

    if (stats.isDirectory()) {
      // If it's a directory, recursively find action files
      return findAllActionFiles(filePath);
    } else {
      // If it's an action.yaml file, read its content using js-yaml
      try {
        const content = await fsPromises.readFile(filePath, 'utf-8');
        const data = load(content);

        return { filePath, data };
      } catch (error) {
        console.error(`Error reading file ${filePath}:`, error.message);
        return { filePath, error: error.message };
      }
    }

    // If it's neither a directory nor an action.yaml file, return null
    return null;
  });

  // Flatten the array of promises and filter out null values
  const actionFiles = (await Promise.all(actionFilePromises)).flat().filter(Boolean);

  return actionFiles;
}
