module.exports = {
  hooks: {
    'pre-commit': 'npm run docs && lint-staged',
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
  },
};
