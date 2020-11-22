module.exports = {
  hooks: {
    'pre-commit': 'npm run docs && git add badges/* && lint-staged',
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
  },
};
