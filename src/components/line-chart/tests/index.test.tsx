import * as React from 'react';
import { render } from '@testing-library/react';
import LineChart, { LineChartProps } from '..';

describe('LineChart component', () => {
  const props: LineChartProps = {
    data: [
      {
        label: 'test',
        color: 'primary',
        points: [
          { label: 'one', x: 0, y: 10 },
          { label: 'two', x: 10, y: 40 },
          { label: 'three', x: 40, y: 30 },
          { label: 'four', x: 60, y: 5 },
          { label: 'five', x: 90, y: 45 },
          { label: 'six', x: 120, y: 10 },
          { label: 'seven', x: 150, y: 45 },
          { label: 'eight', x: 200, y: 10 },
        ],
      },
      {
        label: 'test2',
        color: 'secondary',
        points: [
          { label: 'one', x: 0, y: 10 },
          { label: 'two', x: 10, y: 40 },
          { label: 'three', x: 40, y: 30 },
          { label: 'four', x: 60, y: 5 },
          { label: 'five', x: 90, y: 45 },
          { label: 'six', x: 120, y: 10 },
          { label: 'seven', x: 150, y: 45 },
          { label: 'eight', x: 300, y: 10 },
        ],
      },
    ],
    height: 500,
    width: 1000,
    precision: 0,
    fontSize: 16,
  };

  test('should match snapshot', () => {
    const { container } = render(
      <LineChart
        height={props.height}
        width={props.width}
        fontSize={props.fontSize}
        data={props.data}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
