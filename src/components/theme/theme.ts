import { colors } from './colors';
import { radii } from './radii';
import { shadows } from './shadows';
import { space } from './spaces';
import { styles } from './styles';
import { transitions } from './transitions';
import { fontSizes, fontWeights, lineHeights, text } from './typography';
import { zIndices } from './zindices';
import { breakpoints } from './breakpoints';

export type ThemeType = Partial<{
  colors:
    | Partial<typeof colors>
    | { modes: { [key: string]: Partial<typeof colors> } };
  radii: Partial<typeof radii>;
  shadows: Partial<typeof shadows>;
  space: Partial<typeof space>;
  styles: Partial<typeof styles>;
  text: Partial<typeof text>;
  transitions: Partial<typeof transitions>;
  zIndices: Partial<typeof zIndices>;
}>;

export const DraekienTheme = () => {
  return {
    useCustomProperties: false,
    useBorderBox: true,
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    shadows,
    space,
    styles,
    text,
    transitions,
    zIndices,
    breakpoints,
  };
};
