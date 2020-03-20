module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',    
    "plugin:@typescript-eslint/recommended",
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.

  ],
  globals: {  
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  }, 
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion":0,
    "import/prefer-default-export":0,
    "import/extensions":0,
    "import/no-unresolved":0,
    "require-jsdoc" : 0,
    "no-unused-vars":0,
    'new-cap':0,
    "no-invalid-this":0,
    "no-console":0,
    // "lines-between-class-members": true,
    "@typescript-eslint/no-explicit-any":0,
    "@typescript-eslint/no-unused-vars":0
  },
};




