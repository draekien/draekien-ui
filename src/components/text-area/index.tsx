/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import InputWrapper, { InputChildrenProps } from '../input-wrapper';
import TextareaAutosize from 'react-autosize-textarea/lib';

export interface TextAreaProps
  extends InputChildrenProps,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  /** value of input */
  value?: string;
  /** is text area disabled */
  disabled?: boolean;
  /** default / minimum height of textarea
   * @default '6.5rem'
   */
  height?: string;
  /** max height of text area. Defaults to height */
  maxHeight?: string;
  /** Ref to pass to the component */
  ref?: React.RefObject<HTMLTextAreaElement>;
  /** callback function when textarea is resized */
  onResize?: (event: Event) => void;
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
  const {
    id,
    label,
    variant,
    fullWidth,
    helpText,
    height = '6.5rem',
    maxHeight,
    ref = React.createRef<HTMLTextAreaElement>(),
    ...rest
  } = props;

  React.useEffect(() => {
    if (ref.current) {
      ref.current.placeholder = ref.current.placeholder.replace(/\\n/g, '\n');
    }
  }, []);

  return (
    <Box sx={styles.textareaWrapperCss(props)}>
      <InputWrapper
        id={id}
        label={label}
        variant={variant}
        helpText={helpText}
        fullWidth={fullWidth}
      >
        <TextareaAutosize
          ref={ref}
          id={id}
          sx={styles.textareaCss(props)}
          style={{
            height: height,
            minHeight: height,
            maxHeight: maxHeight || height,
          }}
          {...rest}
        />
      </InputWrapper>
    </Box>
  );
};
