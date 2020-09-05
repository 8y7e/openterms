module.exports = {
  require: '@babel/register',
  globals: 'document',
  'check-leaks': true,
  recursive: true,
  ui: 'bdd',
  timeout: 2000,
};
