import { defineProject } from 'vitest/config';
import { resolve } from 'path';

console.log('dirnameDan1 ===> ', __dirname);
console.log('dirnameDan2 ===> ', resolve(__dirname, './'));

export default defineProject({
  test: {
    environment: 'node',
  },
  root: 'backend',
  resolve: {
    alias: [
      { find: '@backend', replacement: resolve(__dirname, '/') },
      {
        find: '@database',
        replacement: resolve(__dirname, '/data-architecture/database/'),
      },
      { find: '@db', replacement: resolve(__dirname, '/src/layers/db/*') },
      {
        find: '@useCase',
        replacement: resolve(__dirname, '/src/layers/useCase/*'),
      },
      {
        find: '@graphql',
        replacement: resolve(__dirname, '/src/layers/graphql/*'),
      },
      {
        find: '@model',
        replacement: resolve(__dirname, '/src/layers/models/*'),
      },
    ],
  },
});
