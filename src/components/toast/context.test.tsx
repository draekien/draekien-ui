/** @jsxRuntime classic */
import { ToastContext } from './context';

describe('ToastContext', () => {
  test('should match snapshot', () => {
    expect(ToastContext).toMatchSnapshot();
  });
});
