import * as React from 'react';

export type ViewportDimensions = {
  width: number;
  height: number;
};

/**
 * Custom hook for getting viewport height and width
 */
export const useViewport = (): ViewportDimensions => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width, height };
};
