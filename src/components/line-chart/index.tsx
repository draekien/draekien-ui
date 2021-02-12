/** @jsxImportSource theme-ui */
import * as React from 'react';
import { colors } from '../theme/colors';

export type PointRelationship = {
  length: number;
  angle: number;
};

export type Point = {
  label: string;
  x: number;
  y: number;
};

export type Line = {
  label: string;
  color: keyof typeof colors;
  points: Point[];
};

export interface LineChartProps {
  data: Line[];
  precision?: number;
  heading?: string;
  xLabel?: string;
  yLabel?: string;
  height: any | number | bigint;
  width: any | number | bigint;
  fontSize?: number;
  horizontalGuides?: number;
  verticalGuides?: number;
  smoothing?: number;
  renderHorizontalGuides?: boolean;
  renderVerticalGuides?: boolean;
  background?: keyof typeof colors;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  height,
  width,
  heading,
  xLabel,
  yLabel,
  horizontalGuides = 5,
  verticalGuides = 5,
  smoothing = 0.2,
  precision = 0,
  renderHorizontalGuides = false,
  renderVerticalGuides = false,
  ...rest
}) => {
  const fontSize = rest.fontSize || width / 50;

  const maxXFromData = Math.max(
    ...data.map((line) => Math.max(...line.points.map((point) => point.x)))
  );
  const maxYFromData = Math.max(
    ...data.map((line) => Math.max(...line.points.map((point) => point.y)))
  );

  const digits =
    parseFloat(maxYFromData.toString()).toFixed(precision).length + 1;

  const padding = (fontSize + digits) * 4;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const svgPath = (line: Line, command: Function) => {
    const points = line.points.map((point) => {
      const x = (point.x / maxXFromData) * chartWidth + padding;
      const y = chartHeight - (point.y / maxYFromData) * chartHeight + padding;

      return { x, y };
    });

    const d = points.reduce(
      (acc, point, i, a) =>
        i === 0 ? `M ${point.x},${point.y}` : `${acc} ${command(point, i, a)}`,
      ''
    );

    return (
      <path
        d={d}
        sx={{
          stroke: line.color,
          fill: 'none',
          strokeWidth: '1px',
        }}
      />
    );
  };

  const line = (a: Point, b: Point): PointRelationship => {
    const lengthX = b.x - a.x;
    const lengthY = b.y - a.y;

    const length = Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2));
    const angle = Math.atan2(lengthY, lengthX);

    return { length, angle };
  };

  const controlPoint = (
    current: Point,
    previous: Point,
    next: Point,
    reverse?: boolean
  ): Point => {
    const p = previous || current;
    const n = next || current;
    const o = line(p, n);
    const angle = o.angle + (reverse ? Math.PI : 0);
    const length = o.length * smoothing;
    const x = current.x + Math.cos(angle) * length;
    const y = current.y + Math.sin(angle) * length;
    return { label: '', x, y };
  };

  const bezier = (point: Point, i: number, a: Point[]) => {
    const cps = controlPoint(a[i - 1], a[i - 2], point);
    const cpe = controlPoint(point, a[i - 1], a[i + 1], true);

    return `C ${cps.x},${cps.y} ${cpe.x},${cpe.y} ${point.x},${point.y}`;
  };

  const Axis = (props: { points: string }) => (
    <polyline
      sx={{ stroke: 'text', fill: 'none', strokeWidth: '1px' }}
      points={props.points}
    />
  );

  const XAxis = () => (
    <Axis
      points={`${padding},${height - padding} ${width - padding}, ${
        height - padding
      }`}
    />
  );

  const YAxis = () => (
    <Axis points={`${padding},${padding} ${padding},${height - padding}`} />
  );

  const chartHeading = () => {
    const x = chartWidth / 2;
    const y = fontSize * 2;
    return (
      <text x={x} y={y} sx={{ fill: 'text', fontSize, fontWeight: 'bold' }}>
        {heading}
      </text>
    );
  };

  const xAxisHeading = () => {
    const x = chartWidth / 2;
    const y = height - padding + fontSize * 4;
    return (
      <text x={x} y={y} sx={{ fill: 'text', fontSize }}>
        {xLabel}
      </text>
    );
  };

  const yAxisHeading = () => {
    const x = chartHeight / 2;
    const y = 0 - fontSize;
    return (
      <text
        x={x}
        y={y}
        sx={{ fill: 'text', fontSize, transform: 'rotate(90deg)' }}
      >
        {yLabel}
      </text>
    );
  };

  const labelXAxisWithValues = () => {
    const y = height - padding + fontSize * 2;

    const parts = verticalGuides;
    return new Array(parts + 1).fill(0).map((_, index) => {
      const ratio = index / verticalGuides;
      const x = chartWidth * ratio + padding - fontSize / 1.5;

      return (
        <text key={index} x={x} y={y} sx={{ fill: 'text', fontSize }}>
          {parseFloat((maxXFromData * (index / parts)).toString()).toFixed(
            precision
          )}
        </text>
      );
    });
  };

  const labelYAxisWithValues = () => {
    const parts = horizontalGuides;

    return new Array(parts + 1).fill(0).map((_, index) => {
      const x = padding - fontSize * 2;
      const ratio = index / horizontalGuides;

      const yCoordinate =
        chartHeight - chartHeight * ratio + padding + fontSize / 2;

      return (
        <text key={index} x={x} y={yCoordinate} sx={{ fill: 'text', fontSize }}>
          {parseFloat((maxYFromData * (index / parts)).toString()).toFixed(
            precision
          )}
        </text>
      );
    });
  };

  const drawVerticalGuides = () => {
    const guideCount =
      verticalGuides || Math.max(...data.map((line) => line.points.length)) - 1;

    const startY = padding;
    const endY = height - padding;

    return new Array(guideCount).fill(0).map((_, index) => {
      const ratio = (index + 1) / guideCount;
      const xCoord = padding + ratio * (width - padding * 2);

      return (
        <React.Fragment key={index}>
          <polyline
            sx={{
              fill: 'none',
              stroke: renderVerticalGuides ? 'b-000' : 'transparent',
              strokeWidth: '1px',
              strokeOpacity: 0.5,
            }}
            points={`${xCoord}, ${startY} ${xCoord},${endY}`}
          />
        </React.Fragment>
      );
    });
  };

  const drawHorizontalGuides = () => {
    const startX = padding;
    const endX = width - padding;

    return new Array(horizontalGuides).fill(0).map((_, index) => {
      const ratio = (index + 1) / horizontalGuides;

      const yCoord = chartHeight - chartHeight * ratio + padding;

      return (
        <React.Fragment key={index}>
          <polyline
            sx={{
              fill: 'none',
              stroke: renderHorizontalGuides ? 'b-000' : 'transparent',
              strokeWidth: '1px',
              strokeOpacity: 0.5,
            }}
            points={`${startX},${yCoord} ${endX},${yCoord}`}
          />
        </React.Fragment>
      );
    });
  };

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
      sx={{
        borderRadius: 'lg',
        backgroundColor: rest.background,
        boxShadow: rest.background ? 'md' : 'none',
      }}
    >
      {heading && chartHeading()}
      <XAxis />
      <YAxis />
      {labelXAxisWithValues()}
      {labelYAxisWithValues()}
      {xLabel && xAxisHeading()}
      {yLabel && yAxisHeading()}
      {verticalGuides && drawVerticalGuides()}
      {horizontalGuides && drawHorizontalGuides()}
      {data.map((line) => svgPath(line, bezier))}
    </svg>
  );
};

export default LineChart;
