module.exports = {
  '*.{ts,tsx,js}': ['eslint --fix', 'git add'],
  '*.{ts,tsx,js,json}': ['prettier --write', 'git add'],
  '*': 'jest --bail --findRelatedTests',
};
