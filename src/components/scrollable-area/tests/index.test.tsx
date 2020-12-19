import React from 'react';
import { render } from '@testing-library/react';
import ScrollableArea from '..';

describe('ScrollableArea component', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <ScrollableArea maxHeight="200px">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nulla
        dolor fuga, voluptate autem cupiditate enim quae beatae repellendus
        velit quisquam quam tempora, commodi dolorum. Eos eaque consequatur
        doloremque officia.
      </ScrollableArea>
    );

    expect(container).toMatchSnapshot();
  });
});
