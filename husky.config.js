module.exports = {
  hooks: {
    'pre-commit': 'npm run test-ci && lint-staged',
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
  },
};
