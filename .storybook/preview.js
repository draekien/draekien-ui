import { themeDecorator } from './draekien-theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [themeDecorator];
