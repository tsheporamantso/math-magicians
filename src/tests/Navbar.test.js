import { render } from '@testing-library/react';
import Navbar from '../page/Navbar';

describe('Navbar', () => {
  test('should match Navbar snapshot', () => {
    const tree = render(<Navbar />);
    expect(tree).toMatchSnapshot();
  });
});
