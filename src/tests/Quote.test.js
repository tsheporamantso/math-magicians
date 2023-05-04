import { render } from '@testing-library/react';
import Quote from '../page/Quote';

describe('Qoute', () => {
  test('should match Qoute snapshot', () => {
    const tree = render(
      <Quote />,
    );
    expect(tree).toMatchSnapshot();
  });
});
