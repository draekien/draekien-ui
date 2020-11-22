import { TooltipDirection } from '..';
import { tooltipArrowCss, tooltipCss } from '../index.styles';

const directions = ['top', 'bottom', 'left', 'right', 'auto', null, undefined];

describe('Tooltip Styles', () => {
  directions.forEach((direction) => {
    test(`TooltipCss should match snapshot when direction is ${direction}`, () => {
      const css = tooltipCss({
        tooltipDirection: direction as TooltipDirection,
      });

      expect(css).toMatchSnapshot();
    });
  });

  directions.forEach((direction) => {
    test(`TooltipArrowCss should match snapshot when direction is ${direction}`, () => {
      const css = tooltipArrowCss({
        tooltipDirection: direction as TooltipDirection,
      });

      expect(css).toMatchSnapshot();
    });
  });
});
