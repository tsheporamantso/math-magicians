import { render } from '@testing-library/react';
import CalcText from '../page/CalcText';

describe('CalcText', () => {
  test('should match CalcText snapshot', () => {
    const tree = render(
      <CalcText />,
    );
    expect(tree).toMatchSnapshot();
  });
});
