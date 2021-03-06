/** @jsxImportSource theme-ui */
import * as React from 'react';
import * as styles from './index.styles';
import Icon from '../icon';
import Spinner from '../spinner';
import { Link } from 'react-router-dom';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Type of button to render
   * @default 'primary'
   */
  variant?: styles.ButtonVariant;
  /** Size of button to render
   * @default 'md'
   */
  size?: styles.ButtonSize;
  icon?: string | React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  openLinkInNewTab?: boolean;
  /** Is the button disabled?
   * @default false
   */
  disabled?: boolean;
  /** Is the button width 100% of the container element?
   * @default false
   */
  fullWidth?: boolean;
  /** Is the button in an active state (i.e. for dropdown menus)?
   * @default false
   */
  isCircle?: boolean;
  isActive?: boolean;
  isLoading?: boolean;
  showChildrenWhenLoading?: boolean;
  /** onClick event handler */
  onClick?: (e: React.SyntheticEvent<HTMLElement, MouseEvent>) => any;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    variant = 'primary',
    size = 'md',
    type,
    icon,
    iconPosition,
    href,
    openLinkInNewTab = false,
    disabled = false,
    fullWidth = false,
    isCircle = false,
    isActive = false,
    isLoading = false,
    showChildrenWhenLoading = false,
    children,
    ...rest
  } = props;

  const renderSpacedIcon = (renderPosition: 'left' | 'right') => {
    if (!icon || isLoading || renderPosition !== iconPosition) return null;

    if (typeof icon === 'string') {
      return (
        <span
          sx={styles.iconWrapperCss(renderPosition, !isCircle && !!children)}
        >
          <Icon name={icon} size={isCircle ? 'medium' : 'small'} />
        </span>
      );
    }
  };

  const renderSpacedSpinner = () =>
    isLoading && (
      <span sx={styles.iconWrapperCss('right', !!showChildrenWhenLoading)}>
        <Spinner size="small" color="b-100" />
      </span>
    );

  const ButtonContent = () => {
    const shouldRenderChildren =
      !isLoading || (showChildrenWhenLoading && isLoading);

    return (
      <React.Fragment>
        {renderSpacedIcon('left')}
        <span>{shouldRenderChildren && children}</span>
        {renderSpacedIcon('right')}
        {renderSpacedSpinner()}
      </React.Fragment>
    );
  };

  const isDisabledOrLoading = disabled || isLoading;

  const [isAbsoluteUrl, setIsAbsoluteUrl] = React.useState(false);

  React.useEffect(() => {
    if (href !== undefined) {
      const isAbsolute =
        new URL(document.baseURI).origin !==
        new URL(href, document.baseURI).origin;

      setIsAbsoluteUrl(isAbsolute);
    }
  }, [href]);

  if (href !== undefined) {
    if (isAbsoluteUrl) {
      return (
        <a
          sx={{ textDecoration: 'none' }}
          href={href}
          target={openLinkInNewTab ? '_blank' : undefined}
        >
          <button sx={styles.linkButtonCss(!!isActive)} type="button" {...rest}>
            <ButtonContent />
          </button>
        </a>
      );
    }

    return (
      <Link
        sx={{ textDecoration: 'none' }}
        to={href}
        target={openLinkInNewTab ? '_blank' : undefined}
      >
        <button sx={styles.linkButtonCss(!!isActive)} type="button" {...rest}>
          <ButtonContent />
        </button>
      </Link>
    );
  }

  return (
    <button
      sx={styles.buttonCss({
        variant,
        size,
        disabled: isDisabledOrLoading,
        fullWidth,
        active: isActive,
        isCircle,
        icon: !!icon,
        children: !!children,
      })}
      disabled={isDisabledOrLoading}
      type={type || 'button'}
      {...rest}
    >
      <ButtonContent />
    </button>
  );
};

export default Button;
