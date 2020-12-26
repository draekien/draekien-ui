/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: styles.AvatarSize;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'lg',
  src = 'https://avatars.dicebear.com/api/jdenticon/default.svg',
  ...rest
}) => {
  return (
    <Box sx={styles.avatarContainerCss({ size })}>
      <img sx={styles.avatarCss} src={src} {...rest} />
    </Box>
  );
};

export default Avatar;
