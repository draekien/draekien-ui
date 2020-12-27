import { ThemeUIStyleObject } from 'theme-ui';

export type AvatarSize = 'sm' | 'md' | 'lg' | string | number;
export type AvatarCssProps = {
  size: AvatarSize;
};

export const avatarContainerCss = (
  props: AvatarCssProps
): ThemeUIStyleObject => {
  const { size } = props;

  const css: any = {
    backgroundColor: 'muted',
    borderRadius: 'max',
    overflow: 'hidden',
    border: 'none',
    boxShadow: 'sm',
  };

  switch (size) {
    case 'sm':
      css.height = '1rem';
      css.width = '1rem';
      break;
    case 'md':
      css.height = '1.5rem';
      css.width = '1/5rem';
      break;
    case 'lg':
      css.height = '2rem';
      css.width = '2rem';
      break;
    default:
      css.height = size;
      css.width = size;
      break;
  }

  return css;
};

export const avatarCss: ThemeUIStyleObject = {
  height: '100%',
  width: '100%',
};
