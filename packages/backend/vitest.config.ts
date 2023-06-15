import { defineProject } from 'vitest/config';
import { resolve } from 'path';

console.log('===== VITEST CONFIG ===== ');
console.log('NODE_ENV     ===> ', process.env.NODE_ENV);
console.log('PATH_ROOT    ===> ', __dirname);
console.log('PATH_BACKEND ===> ', resolve(__dirname, './'));
console.log('===== VITEST CONFIG ===== ');

export default defineProject({
  test: {
    environment: 'node',
  },
  root: '.',
  resolve: {
    alias: [
      {
        find: '@backend',
        replacement: resolve(__dirname, './'),
      },
      {
        find: '@database',
        replacement: resolve(__dirname, './data-architecture', 'database'),
      },
      {
        find: '@db',
        replacement: resolve(__dirname, './src', 'layers', 'db'),
      },
      {
        find: '@useCase',
        replacement: resolve(__dirname, './src', 'layers', 'useCase'),
      },
      {
        find: '@graphql',
        replacement: resolve(__dirname, './src', 'layers', 'graphql'),
      },
      {
        find: '@model',
        replacement: resolve(__dirname, './src', 'layers', 'model'),
      },
    ],
  },
});
