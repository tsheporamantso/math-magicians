import { render } from '@testing-library/react';
import Home from '../page/Home';

describe('Home', () => {
  test('should match Home snapshot', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
