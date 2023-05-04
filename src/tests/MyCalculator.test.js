import { render } from '@testing-library/react';
import MyCalculator from '../components/MyCalculator';

describe('MyCalculator', () => {
  test('should match MyCalculator snapshot', () => {
    const tree = render(
      <MyCalculator />,
    );
    expect(tree).toMatchSnapshot();
  });
});
