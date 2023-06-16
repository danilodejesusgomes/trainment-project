module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: ['./tsconfig.json'],
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    "import/no-extraneous-dependencies": ["error", {"includeInternal": true, "includeTypes": true}],
    "import/no-extraneous-dependencies": ["error", 
      {"packageDir": [
        './',
        './packages/backend/',
        './packages/web-awsimulate/',
      ]}
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
}
