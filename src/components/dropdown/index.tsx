/** @jsxImportSource theme-ui */

import * as React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Button from '../button';
import { ButtonSize, ButtonVariant } from '../button/index.styles';
import * as styles from './index.styles';

export type DropdownButtonProps = {
  /** onOpen event handler */
  onOpen?: Function;
  /** is dropdown open */
  isOpen?: boolean;
  /** is dropdown disabled */
  disabled?: boolean;
};

export type DropdownPosition =
  | 'auto'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type DropdownProps = {
  /** children to render inside the dropdown */
  children: React.ReactNode;
  /** button type to render
   * @default 'text'
   */
  variant?: ButtonVariant;
  /** size of dropdown button */
  size?: ButtonSize;
  /** dropdown label */
  label?: React.ReactNode;
  /** position to display dropdown
   * @default 'auto'
   */
  position?: DropdownPosition;
  /** onOpen event handler */
  onOpen?: Function;
  /** onClose event handler */
  onClose?: Function;
  /** is the dropdown open */
  isOpen?: boolean;
  /** is the dropdown disabled */
  disabled?: boolean;
  /** max height of dropdown */
  maxHeight?: string | number | string[] | number[];
  /** min width of dropdown */
  minWidth?: string | number | string[] | number[];
  /** did user select an item from dropdown
   * only use when variant is default
   */
  hasSelection?: boolean;
};

const margin = 4;

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    children,
    size,
    variant,
    label,
    onClose,
    onOpen,
    disabled,
    maxHeight,
    minWidth,
    hasSelection,
    ...rest
  } = props;

  const fixedPosition = rest.position !== 'auto' ? rest.position : null;
  const open = rest.isOpen !== undefined ? rest.isOpen : false;

  const [position, setPosition] = React.useState(fixedPosition);
  const [isOpen, setIsOpen] = React.useState(open);

  const dropdownWrapper = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (rest.isOpen) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [rest.isOpen]);

  React.useEffect(() => {
    if (isOpen === true) document.addEventListener('keydown', handleKeyDown);
    else document.removeEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  React.useEffect(() => {
    if (fixedPosition) return;
    if (!dropdownWrapper.current) {
      setPosition('bottom-left');
      return;
    }

    // Dropdown
    const dRect = dropdownWrapper.current.getBoundingClientRect();
    // Button - the wrapper will always initially be the element after the button so we can get the button by selecting the previous sibling
    const dbRect = dropdownWrapper.current.previousElementSibling!.getBoundingClientRect();

    let finalPosition: DropdownPosition;

    // Fits to the bottom if the dropdown height is smaller than the space between the bottom edge of the window and the bottom edge of the button
    // It will fit if it's smaller than the height of the window less the bottom position of the button (plus margin)
    const fitsBottom =
      dRect.height <
      document.documentElement.clientHeight - dbRect.bottom + margin;

    // Fits to the top if the dropdown height is smaller than the space between the top edge of the window and the top edge of the button (plus margin)
    const fitsTop = dRect.height < dbRect.top + margin;

    // Fits to the right if the dropdown width is smaller than the space between the right edge of the window and the right edge of the button
    // It will fit if it's narrower than / equal to  the button, otherwise calculate the amount that hangs over the edge of the button
    // (dropdown width - button width) and make sure it's less than the button's right position (space between button and right edge of page)
    // which is calculated by getting the document width minus the button's right position
    const fitsRight =
      dRect.width <= dbRect.width ||
      dRect.width - dbRect.width <
        document.documentElement.clientWidth - dbRect.right;

    // Fits to the left if the dropdown width is smaller than the space between the left edge of the window and the left edge of the button
    // It will fit if it's narrower than / equal to the button, otherwise calculate the amount that hangs over the edge of the button
    // (dropdown width - button width) and make sure it's less than the button's left position (space between button and left edge of page)
    const fitsLeft =
      dRect.width <= dbRect.width || dRect.width - dbRect.width < dbRect.left;

    if (fitsBottom && fitsRight) {
      finalPosition = 'bottom-left';
    } else if (fitsBottom && fitsLeft) {
      finalPosition = 'bottom-right';
    } else if (fitsTop && fitsRight) {
      finalPosition = 'top-left';
    } else if (fitsTop && fitsLeft) {
      finalPosition = 'top-right';
    } else {
      // If it won't fit anywhere, it's best to position it bottom-left
      finalPosition = 'bottom-left';
    }

    setPosition(finalPosition);
  }, [isOpen]);

  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(true);
      onOpen && onOpen();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset the position each time (if not fixedPosition)
    !fixedPosition && setPosition(null);
    onClose && onClose();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') handleClose();
  };

  const handleToggle = () => {
    if (disabled) return;

    if (isOpen) handleClose();
    else handleOpen();
  };

  const childrenWrapper = (
    <div
      sx={styles.childrenWrapperCss({ position, margin, maxHeight })}
      ref={dropdownWrapper}
    >
      {children}
    </div>
  );

  return (
    <div sx={styles.outsideClickWrapper(minWidth)}>
      <OutsideClickHandler
        onOutsideClick={() => isOpen && handleClose()}
        display="inline-block"
      >
        <div sx={styles.contentWrapper(hasSelection)}>
          {isOpen && position && position.includes('top') && childrenWrapper}

          <Button
            variant={variant || 'text'}
            size={size}
            onClick={handleToggle}
            isActive={isOpen}
            disabled={disabled}
            iconPosition="right"
            icon={isOpen ? 'expand_less' : 'expand_more'}
          >
            {label}
          </Button>

          {isOpen &&
            ((position && position.includes('bottom')) || position === null) &&
            childrenWrapper}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Dropdown;
