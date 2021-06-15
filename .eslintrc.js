module.exports = {
    root: true,
    env: {
      node: true,
      es6: true
    },
    parser: "vue-eslint-parser",
    plugins: ["gridsome"],
    extends: [
      'plugin:gridsome/recommended',
      'plugin:vue/essential',
      'plugin:prettier/recommended',
      '@vue/prettier',
  ],
    rules: {
      "gridsome/format-query-block": "error",
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    
  }
  