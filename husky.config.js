module.exports = {
  hooks: {
    'pre-commit': 'npm test && npm run docs && git add badges/* && lint-staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
